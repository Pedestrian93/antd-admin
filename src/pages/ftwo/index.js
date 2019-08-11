import React, { Component } from 'react'
import G6 from '@antv/g6'

const w = 1000
const h = 300
G6.track(false)

export default class index extends Component {
  darwPipeline = () => {
    const data = {
      nodes: [
        {
          shape: 'rect',
          id: 'node1',
          label: 1,
          x: 100,
          y: 200,
        },
        {
          shape: 'rect',
          label: 2,
          id: 'node2',
          x: 300,
          y: 200,
        },
        {
          shape: 'rect',
          label: 3,
          id: 'node3',
          x: 500,
          y: 200,
        },
        {
          label: 5,
          shape: 'rect',
          id: 'node5',
          x: 700,
          y: 200,
        },
        {
          shape: 'rect4',
          label: 4,
          id: 'node4',
          x: 400,
          y: 100,
        },
      ],

      //       4
      // 1   2   3   5
      edges: [
        {
          source: 'node1',
          id: 'edge1',
          target: 'node2',
        },
        {
          source: 'node2',
          id: 'edge2',
          target: 'node3',
        },
        {
          source: 'node4',
          id: 'edge3',
          target: 'node2',
        },
        {
          source: 'node3',
          id: 'edge4',
          target: 'node4',
          shape: 'VH',
          sourceAnchor: 0,
          targetAnchor: 2,
        },
        {
          source: 'node3',
          id: 'edge5',
          target: 'node5',
        },
      ],
    }

    // // 注册边
    // G6.registEdge('edge1', {
    //   // 绘制
    //   draw: function(cfg, group) {
    //     return HV
    //   },
    //   // 绘制后执行
    //   // afterDraw: function(cfg, group, keyShape) {},
    // })
    // 第二步：注册图形
    G6.registNode('rect', {
      // 设置锚点
      getAnchorPoints: function(cfg, group) {
        return [
          // [0, 0], //
          [0.5, 0],
          [1, 0.5],
          [0.5, 1],
          [0, 0.5],
        ]
      },
    })
    G6.registNode('rect4', {
      // 设置锚点4
      getAnchorPoints: function(cfg, group) {
        return [
          // [0, 0], // 左上
          [1, 0.5],
          [0, 0.5],
        ]
      },
    })
    G6.registNode('rect3', {
      // 设置锚点4
      getAnchorPoints: function(cfg, group) {
        // return [
        //   // [0, 0], // 左上
        //   [0.5, 0],
        //   [1, 0.5],
        // ]
        return 'auto'
      },
    })

    // 第三步：进行布局
    // let Layout = G6.Layout
    // let margin = 60
    // let height = 800 - 2 * margin
    // let width = 500 - 2 * margin
    let nodes = data.nodes
    let edges = data.edges
    // let layout = new Layout.Flow({
    //   nodes,
    //   edges,
    // })
    // nodes = layout.getNodes()
    // nodes.forEach(node => {
    //   // const x = node.x * width + margin
    //   // const y = node.y * height + margin
    //   node.x = y
    //   node.y = x
    // })

    const net = new G6.Net({
      container: this.node, // 容器ID
      height: 450, // 此处替换高度
      fitView: 'autoZoom', // 自动缩放
      // drag: false,
      grid: null,
    })
    // 第五步：载入数据
    net.source(nodes, edges)
    // 第六步：数据映射
    // net.node().style(function(obj) {
    //   var domain = 100
    //   var keep = obj.keep
    //   var runoff = obj.runoff
    //   var keepRatio = keep / domain
    //   var runoffRatio = runoff / domain
    //   var attrs = {}
    //   if (keep && runoff) {
    //     attrs.fill =
    //       'l (0) 0:#00A263 ' + keepRatio + ':#00A263 ' + keepRatio + ':#E6504A'
    //   }
    //   attrs.fillOpacity = 0.4
    //   return attrs
    // })
    net
      .edge()
      .size(function(obj) {
        return (obj.val / 100) * 6
      })
      .shape('HV')
      .style({
        stroke: '#00A263',
        strokeOpacity: 0.6,
        arrow: true,
      })
    // 第六步：渲染关系图
    net.render()
  }

  componentDidMount() {
    this.darwPipeline()
  }

  render() {
    return (
      <>
        g6
        <div
          style={{ border: '1px solid red' }}
          ref={n => (this.node = n)}
        ></div>
      </>
    )
  }
}
