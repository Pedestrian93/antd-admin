import React, { Component } from 'react'
import {
  Progress,
  PageHeader,
  Upload,
  Card,
  Icon,
  Button,
  message,
  Input,
} from 'antd'
import { request } from 'utils'
import OSS from 'ali-oss'
var urllib = OSS.urllib
var Buffer = OSS.Buffer
// var OSS = OSS.Wrapper
var STS = OSS.STS

const appServer = 'http://localhost:9000/sts'
const bucket = 'pedestrian-pic'
const region = 'oss-cn-hangzhou'

function applyTokenDo(func) {
  const url = appServer
  return request({ url }).then(result => {
    var creds = result
    var client = new OSS({
      region: region,
      accessKeyId: creds.AccessKeyId,
      accessKeySecret: creds.AccessKeySecret,
      stsToken: creds.SecurityToken,
      bucket: bucket,
      endpoint: 'oss-cn-hangzhou.aliyuncs.com',
    })
    return func(client)
  })
}
export default class index extends Component {
  state = {
    uploadKey: '',
    uploadFileList: [],
    uploading: false,
    uploadProgress: 0,
  }
  progress = function(p) {
    return function(done) {
      this.setState({
        uploadProgress: p,
      })
      done()
    }
  }
  uploadFile = client => {
    var file = this.state.uploadFileList[0]
    var key = this.state.uploadKey || 'object'

    return client
      .multipartUpload(key, file, {
        parallel: 2,
        partSize: 10000000,
      })
      .then(res => {
        console.log(res)

        // client.CompleteMultipartUpload('xxx', res.uploadId)
        // // // return this.listFiles(client)
      })
  }

  listFiles = function(client) {
    var table = document.getElementById('list-files-table')
    console.log('list files')

    return client
      .list({
        'max-keys': 100,
      })
      .then(function(result) {
        var objects = result.objects.sort(function(a, b) {
          var ta = new Date(a.lastModified)
          var tb = new Date(b.lastModified)
          if (ta > tb) return -1
          if (ta < tb) return 1
          return 0
        })

        var numRows = table.rows.length
        for (var i = 1; i < numRows; i++) {
          table.deleteRow(table.rows.length - 1)
        }

        for (var i = 0; i < Math.min(3, objects.length); i++) {
          var row = table.insertRow(table.rows.length)
          row.insertCell(0).innerHTML = objects[i].name
          row.insertCell(1).innerHTML = objects[i].size
          row.insertCell(2).innerHTML = objects[i].lastModified
        }
      })
  }

  render() {
    const { uploadFileList, uploading } = this.state
    const UploadProps = {
      onRemove: file => {
        this.setState(state => {
          const index = state.uploadFileList.indexOf(file)
          const newFileList = state.uploadFileList.slice()
          newFileList.splice(index, 1)
          return {
            uploadFileList: newFileList,
          }
        })
      },
      beforeUpload: file => {
        this.setState(state => ({
          uploadFileList: [...state.uploadFileList, file],
        }))
        return false
      },
      uploadFileList,
    }
    return (
      <div>
        <PageHeader
          onBack={() => null}
          title="OSS SDK"
          subTitle="This is a sdk demo of antd"
          style={{ marginBottom: '12px' }}
        />
        <div
          style={{
            width: '50%',
            padding: '10px',
          }}
        >
          <Card
            title="上传文件"
            extra={<a href="##">More</a>}
            style={{ width: '100%' }}
          >
            <Upload {...UploadProps}>
              <Button>
                <Icon type="upload" /> Select File
              </Button>
            </Upload>
            <span>Store as</span>
            <Input
              onChange={e =>
                this.setState({ uploadKey: e.target.value.trim() })
              }
              style={{ display: 'inline', width: 100 }}
            ></Input>
            <br></br>
            <Button
              type="primary"
              onClick={() => applyTokenDo(this.uploadFile)}
              disabled={uploadFileList.length === 0}
              loading={false}
              style={{ marginTop: 16 }}
            >
              {uploading ? 'Uploading' : 'Start Upload'}
            </Button>
            <Progress percent={50} status="active" />
          </Card>
        </div>
      </div>
    )
  }
}
