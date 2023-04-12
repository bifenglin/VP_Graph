 
      /** 动态请求需要的配套资产 **/
      export const GI_ASSETS_PACKAGE = [{
  "url": "https://gw.alipayobjects.com/os/lib/antv/gi-assets-tugraph/1.1.0/dist/index.min.js",
  "global": "GI_ASSETS_TUGRAPH",
  "name": "@antv/gi-assets-tugraph",
  "version": "1.1.0"
}, {
  "url": "https://gw.alipayobjects.com/os/lib/antv/gi-assets-neo4j/1.1.2/dist/index.min.js",
  "global": "GI_ASSETS_NEO4J",
  "name": "@antv/gi-assets-neo4j",
  "version": "1.1.2"
}, {
  "url": "https://gw.alipayobjects.com/os/lib/antv/gi-assets-graphscope/1.0.2/dist/index.min.js",
  "global": "GI_ASSETS_GRAPHSCOPE",
  "name": "@antv/gi-assets-graphscope",
  "version": "1.0.2"
}, {
  "url": "https://gw.alipayobjects.com/os/lib/antv/gi-assets-advance/1.1.1/dist/index.min.js",
  "global": "GI_ASSETS_ADVANCE",
  "name": "@antv/gi-assets-advance",
  "version": "1.1.1"
}, {
  "url": "https://gw.alipayobjects.com/os/lib/antv/gi-assets-basic/1.3.0/dist/index.min.js",
  "global": "GI_ASSETS_BASIC",
  "name": "@antv/gi-assets-basic",
  "version": "1.3.0"
}, {
  "url": "https://gw.alipayobjects.com/os/lib/antv/gi-assets-scene/1.0.0/dist/index.min.js",
  "global": "GI_ASSETS_SCENE",
  "name": "@antv/gi-assets-scene",
  "version": "1.0.0"
}];

      /** G6VP 站点自动生成的配置 **/
      export const GI_PROJECT_CONFIG = {
  "nodes": [{
    "id": "SimpleNode",
    "props": {
      "size": 26,
      "color": "#ddd",
      "label": [],
      "advanced": {
        "label": {
          "fill": "#000"
        }
      }
    },
    "groupName": "默认样式",
    "expressions": [],
    "logic": true
  }, {
    "id": "SimpleNode",
    "props": {
      "size": 26,
      "color": "#3056E3",
      "label": ["techNode^^titleId"],
      "advanced": {
        "label": {
          "fill": "#000",
          "visible": true,
          "fontSize": 12,
          "position": "bottom"
        },
        "icon": {
          "type": "font",
          "value": "",
          "fill": "#fff"
        },
        "keyshape": {
          "fillOpacity": 0.8
        },
        "badge": {
          "visible": false
        }
      }
    },
    "groupName": "TECHNODE TYPE",
    "expressions": [{
      "name": "nodeType",
      "operator": "eql",
      "value": "techNode"
    }],
    "logic": true
  }, {
    "id": "SimpleNode",
    "props": {
      "size": 26,
      "color": "#faad14",
      "label": ["productionNode^^titleId"],
      "advanced": {
        "label": {
          "fill": "#000",
          "visible": true,
          "fontSize": 12,
          "position": "bottom"
        },
        "icon": {
          "type": "font",
          "value": "",
          "fill": "#fff"
        },
        "keyshape": {
          "fillOpacity": 0.8
        },
        "badge": {
          "visible": false
        }
      }
    },
    "groupName": "PRODUCTIONNODE TYPE",
    "expressions": [{
      "name": "nodeType",
      "operator": "eql",
      "value": "productionNode"
    }],
    "logic": true
  }, {
    "id": "SimpleNode",
    "props": {
      "size": 26,
      "color": "#a0d911",
      "label": ["enterpriseNode^^titleId"],
      "advanced": {
        "label": {
          "fill": "#000",
          "visible": true,
          "fontSize": 12,
          "position": "bottom"
        },
        "icon": {
          "type": "font",
          "value": "",
          "fill": "#fff"
        },
        "keyshape": {
          "fillOpacity": 0.8
        },
        "badge": {
          "visible": false
        }
      }
    },
    "groupName": "ENTERPRISENODE TYPE",
    "expressions": [{
      "name": "nodeType",
      "operator": "eql",
      "value": "enterpriseNode"
    }],
    "logic": true
  }],
  "edges": [{
    "id": "SimpleEdge",
    "props": {
      "size": 1,
      "color": "#ddd",
      "label": []
    },
    "name": "官方边",
    "order": -1,
    "expressions": [],
    "logic": true,
    "groupName": "默认样式"
  }, {
    "id": "SimpleEdge",
    "props": {
      "size": 1,
      "color": "#a0d911",
      "label": []
    },
    "name": "官方边",
    "expressions": [{
      "name": "edgeType",
      "operator": "eql",
      "value": "productionEdge"
    }],
    "order": 0,
    "logic": true,
    "groupName": "PRODUCTIONEDGE TYPE"
  }, {
    "id": "SimpleEdge",
    "props": {
      "size": 1,
      "color": "#a0d911",
      "label": []
    },
    "name": "官方边",
    "expressions": [{
      "name": "edgeType",
      "operator": "eql",
      "value": "techEdge"
    }],
    "order": 1,
    "logic": true,
    "groupName": "TECHEDGE TYPE"
  }],
  "layout": {
    "id": "Dagre",
    "props": {
      "type": "dagre",
      "rankdir": "TB",
      "align": null,
      "nodesep": 40,
      "ranksep": 80
    }
  },
  "components": [{
    "id": "ZoomIn",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "放大",
        "isShowIcon": true,
        "icon": "icon-zoomin",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true
      }
    }
  }, {
    "id": "ZoomOut",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "缩小",
        "isShowIcon": true,
        "icon": "icon-zoomout",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true
      }
    }
  }, {
    "id": "FitView",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "自适应",
        "isShowIcon": true,
        "icon": "icon-fit-view",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true
      }
    }
  }, {
    "id": "FitCenter",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "视图居中",
        "isShowIcon": true,
        "icon": "icon-fit-center",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true
      }
    }
  }, {
    "id": "LassoSelect",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "自由圈选",
        "isShowIcon": true,
        "icon": "icon-lasso",
        "isShowTooltip": true,
        "tooltip": "按住Shift，点击画布即可自由圈选",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true
      }
    }
  }, {
    "id": "PropertiesPanel",
    "props": {
      "serviceId": "GI/PropertiesPanel",
      "title": "属性面板",
      "placement": "RT",
      "width": "356px",
      "height": "calc(100% - 0px)",
      "offset": [10, 10],
      "animate": false,
      "defaultiStatistic": false
    }
  }, {
    "id": "ActivateRelations",
    "props": {
      "enableNodeHover": true,
      "enableEdgeHover": true,
      "enable": true,
      "trigger": "click",
      "upstreamDegree": 1,
      "downstreamDegree": 1
    }
  }, {
    "id": "CanvasSetting",
    "props": {
      "styleCanvas": {
        "backgroundColor": "#fff",
        "backgroundImage": "https://gw.alipayobjects.com/mdn/rms_0d75e8/afts/img/A*k9t4QamMuQ4AAAAAAAAAAAAAARQnAQ",
        "background": "#fff"
      },
      "dragCanvas": {
        "disabled": false,
        "direction": "both",
        "enableOptimize": true
      },
      "zoomCanvas": {
        "disabled": false,
        "enableOptimize": true
      },
      "clearStatus": true,
      "doubleClick": true
    }
  }, {
    "id": "NodeLegend",
    "props": {
      "sortKey": "type",
      "textColor": "#ddd",
      "placement": "LB",
      "offset": [100, 20]
    }
  }, {
    "id": "Placeholder",
    "name": "画布占位符",
    "props": {
      "img": "https://gw.alipayobjects.com/zos/bmw-prod/db278704-6158-432e-99d2-cc5db457585d.svg",
      "text": "当前画布为空，请先试试「数据/图数据源/导入/示例数据」",
      "width": 380
    }
  }, {
    "id": "FilterPanel",
    "name": "筛选面板",
    "props": {
      "histogramColor": "#3056E3",
      "isFilterIsolatedNodes": true,
      "highlightMode": true,
      "GI_CONTAINER_INDEX": 2,
      "GIAC_CONTENT": {
        "visible": false,
        "disabled": false,
        "isShowTitle": true,
        "title": "筛选面板",
        "isShowIcon": true,
        "icon": "icon-filter",
        "isShowTooltip": true,
        "tooltip": "通过属性筛选画布信息，可自定义",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "top",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true,
        "containerType": "div",
        "containerAnimate": false,
        "containerPlacement": "RT",
        "offset": [0, 0],
        "containerWidth": "400px",
        "containerHeight": "calc(100% - 100px)",
        "contaienrMask": false
      },
      "filterKeys": [],
      "filterLogic": "and",
      "histogramOptions": {
        "isCustom": false,
        "min": null,
        "max": null,
        "binWidth": null
      }
    }
  }, {
    "id": "LargeGraph",
    "name": "3D大图",
    "props": {
      "visible": false,
      "minSize": "50%",
      "maxSize": "100%",
      "placement": "RB",
      "offset": [0, 0],
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "3D大图",
        "isShowIcon": true,
        "icon": "icon-3d",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true
      },
      "backgroundColor": "#fff",
      "highlightColor": "red"
    }
  }, {
    "id": "MapMode",
    "name": "地图模式",
    "props": {
      "visible": false,
      "type": "amap",
      "theme": "light",
      "minSize": "50%",
      "maxSize": "100%",
      "placement": "RB",
      "offset": [0, 0],
      "longitudeKey": "longitude",
      "latitudeKey": "latitude",
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "地图模式",
        "isShowIcon": true,
        "icon": "icon-global",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true
      }
    }
  }, {
    "id": "SnapshotGallery",
    "name": "快照画廊",
    "props": {
      "background": "#fff",
      "direction": "horizontal",
      "placement": "LT",
      "offset": [20, 20],
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "快照画廊",
        "isShowIcon": true,
        "icon": "icon-camera",
        "isShowTooltip": true,
        "tooltip": "快照画廊(快捷键ctrl+x)",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true
      }
    }
  }, {
    "id": "ContextMenu",
    "name": "右键菜单",
    "props": {
      "GI_CONTAINER": ["NeighborsQuery", "ToggleClusterWithMenu", "PinNodeWithMenu"],
      "nodeMenuComponents": ["NeighborsQuery", "ToggleClusterWithMenu", "PinNodeWithMenu"],
      "bindTypes": ["node"],
      "edgeMenuComponents": [],
      "canvasMenuComponents": [],
      "comboMenuComponents": []
    }
  }, {
    "id": "ToggleClusterWithMenu",
    "name": "展开/收起",
    "props": {
      "isReLayout": false,
      "degree": 1
    }
  }, {
    "id": "NeighborsQuery",
    "name": "邻居查询",
    "props": {
      "serviceId": "GI/NeighborsQuery",
      "degree": "1",
      "isFocus": true
    }
  }, {
    "id": "Copyright",
    "name": "版权",
    "props": {
      "imageUrl": "https://gw.alipayobjects.com/zos/bmw-prod/c2d4b2f5-2a34-4ae5-86c4-df97f7136105.svg",
      "width": 200,
      "height": 30,
      "placement": "RB",
      "offset": [10, 10]
    }
  }, {
    "id": "Loading",
    "name": "加载动画",
    "props": {}
  }, {
    "id": "PinNodeWithMenu",
    "name": "固定节点(MENU)",
    "props": {
      "color": "#fff",
      "fill": "#262626"
    }
  }, {
    "id": "ForceSimulation",
    "name": "力导布局控制器",
    "props": {
      "autoPin": true,
      "dragNodeMass": 10000000,
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "力导布局控制器",
        "isShowIcon": true,
        "icon": "icon-layout-force",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true
      }
    }
  }, {
    "id": "Initializer",
    "name": "初始化器",
    "props": {
      "serviceId": "GI/GI_SERVICE_INTIAL_GRAPH",
      "schemaServiceId": "GI/GI_SERVICE_SCHEMA",
      "GI_INITIALIZER": true,
      "aggregate": false
    }
  }, {
    "id": "LayoutSwitch",
    "name": "布局切换",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "布局切换",
        "isShowIcon": true,
        "icon": "icon-layout",
        "isShowTooltip": false,
        "tooltip": "一键切换画布布局",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true
      }
    }
  }, {
    "id": "GrailLayout",
    "name": "圣杯布局",
    "props": {
      "GI_CONTAINER_LEFT": [],
      "leftDisplay": false,
      "leftWidth": "400px",
      "GI_CONTAINER_RIGHT": ["FilterPanel", "Overview"],
      "rightDisplay": true,
      "rightWidth": "350px",
      "GI_CONTAINER_BOTTOM": [],
      "bottomDisplay": false,
      "bottomHeight": "400px",
      "leftVisible": true,
      "rightVisible": true,
      "bottomVisible": true,
      "GI_CONTAINER_TOP": [],
      "topDisplay": false,
      "topVisible": false,
      "topHeight": "200px"
    }
  }, {
    "id": "Toolbar",
    "name": "工具栏",
    "props": {
      "GI_CONTAINER": ["ZoomIn", "ZoomOut", "FitView", "FitCenter", "LargeGraph", "MapMode", "ForceSimulation",
        "LayoutSwitch"
      ],
      "direction": "vertical",
      "placement": "LT",
      "offset": [24, 64]
    }
  }, {
    "id": "Export",
    "name": "导出",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "导出",
        "isShowIcon": true,
        "icon": "icon-export",
        "isShowTooltip": true,
        "tooltip": "导出CSV,PNG,JSON数据",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true
      }
    }
  }, {
    "id": "Overview",
    "name": "大图概览",
    "props": {
      "limit": 600,
      "filterLogic": "and",
      "GI_CONTAINER_INDEX": 2,
      "GIAC_CONTENT": {
        "visible": false,
        "disabled": false,
        "isShowTitle": true,
        "title": "大图概览",
        "isShowIcon": true,
        "icon": "icon-dashboard",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "46px",
        "isVertical": true,
        "containerType": "div",
        "containerAnimate": false,
        "containerPlacement": "RT",
        "offset": [0, 0],
        "containerWidth": "400px",
        "containerHeight": "calc(100% - 100px)",
        "contaienrMask": false
      }
    }
  }]
};
      
      /** G6VP 站点选择服务引擎的上下文配置信息 **/
      export const SERVER_ENGINE_CONTEXT = {
  "GI_SITE_PROJECT_ID": "2189cbf3-a8ba-4aa8-9edc-1f6d66e6ec91",
  "engineId": "GI"
};

      /** G6VP 站点 本地上传的数据 **/
      export const GI_LOCAL_DATA = {
  "nodes": [{
    "id": "多模态机器学习",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166055751681",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "多模态机器学习",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680513781000,\"id\":\"1642819982961737729\",\"level\":\"2\",\"name\":\"多模态机器学习\",\"parent\":\"1642840218322665473\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518822000}"
    }
  }, {
    "id": "数据应用(垂直行业)",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166076723201",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "数据应用(垂直行业)",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680513797000,\"id\":\"1642820051005931521\",\"level\":\"2\",\"name\":\"数据应用(垂直行业)\",\"parent\":\"1642840034133999618\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518791000}"
    }
  }, {
    "id": " 数据智能/可视化（数字孪生）/BI",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166076723202",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": " 数据智能/可视化（数字孪生）/BI",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680513812000,\"id\":\"1642820115405275138\",\"level\":\"2\",\"name\":\" 数据智能/可视化（数字孪生）/BI\",\"parent\":\"1642840034133999618\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518781000}"
    }
  }, {
    "id": "数据存储和管理",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166076723203",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "数据存储和管理",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680513837000,\"id\":\"1642820220053159938\",\"level\":\"2\",\"name\":\"数据存储和管理\",\"parent\":\"1642840034133999618\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518760000}"
    }
  }, {
    "id": "计算机视觉",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166080917506",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "计算机视觉",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518157000,\"id\":\"1642838337810661378\",\"level\":\"2\",\"name\":\"计算机视觉\",\"parent\":\"1642840218322665473\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518832000}"
    }
  }, {
    "id": "自然语言处理与知识图谱",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166085111809",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "自然语言处理与知识图谱",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518176000,\"id\":\"1642838417217224706\",\"level\":\"2\",\"name\":\"自然语言处理与知识图谱\",\"parent\":\"1642840218322665473\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518842000}"
    }
  }, {
    "id": "语音处理",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166085111810",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "语音处理",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518239000,\"id\":\"1642838681034752001\",\"level\":\"2\",\"name\":\"语音处理\",\"parent\":\"1642840218322665473\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518853000}"
    }
  }, {
    "id": "结构化数据机器学习",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166089306113",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "结构化数据机器学习",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518260000,\"id\":\"1642838768506961921\",\"level\":\"2\",\"name\":\"结构化数据机器学习\",\"parent\":\"1642840218322665473\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518868000}"
    }
  }, {
    "id": " 强化学习",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166089306114",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": " 强化学习",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518277000,\"id\":\"1642838842892943362\",\"level\":\"2\",\"name\":\" 强化学习\",\"parent\":\"1642840218322665473\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518878000}"
    }
  }, {
    "id": "联邦学习及隐私计算",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166089306115",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "联邦学习及隐私计算",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518296000,\"id\":\"1642838923473911810\",\"level\":\"2\",\"name\":\"联邦学习及隐私计算\",\"parent\":\"1642840218322665473\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518894000}"
    }
  }, {
    "id": "物理仿真",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166093500418",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "物理仿真",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518318000,\"id\":\"1642839012770643970\",\"level\":\"2\",\"name\":\"物理仿真\",\"parent\":\"1642840218322665473\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518906000}"
    }
  }, {
    "id": "运筹学",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166093500419",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "运筹学",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518332000,\"id\":\"1642839073709686785\",\"level\":\"2\",\"name\":\"运筹学\",\"parent\":\"1642840218322665473\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518915000}"
    }
  }, {
    "id": "云计算",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166097694722",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "云计算",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518361000,\"id\":\"1642839193188630530\",\"level\":\"2\",\"name\":\"云计算\",\"parent\":\"1642840752349839362\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518936000}"
    }
  }, {
    "id": "芯片",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166097694723",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "芯片",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518371000,\"id\":\"1642839236406738945\",\"level\":\"2\",\"name\":\"芯片\",\"parent\":\"1642840752349839362\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518943000}"
    }
  }, {
    "id": "物联网",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166097694724",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "物联网",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518387000,\"id\":\"1642839303528185858\",\"level\":\"2\",\"name\":\"物联网\",\"parent\":\"1642840752349839362\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680518950000}"
    }
  }, {
    "id": "数据相关",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166097694725",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "数据相关",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518561000,\"id\":\"1642840034133999618\",\"level\":\"1\",\"name\":\"数据相关\",\"parent\":\"0\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "id": "算法技术分类",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166101889026",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "算法技术分类",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518605000,\"id\":\"1642840218322665473\",\"level\":\"1\",\"name\":\"算法技术分类\",\"parent\":\"0\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "id": "算力技术分类",
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166101889027",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "算力技术分类",
      "nodeType": "techNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680518733000,\"id\":\"1642840752349839362\",\"level\":\"1\",\"name\":\"算力技术分类\",\"parent\":\"0\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "id": "算力设备",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166101889028",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "算力设备",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680513939000,\"id\":\"1642820648870412289\",\"level\":\"1\",\"name\":\"算力设备\",\"parent\":\"0\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523449000}"
    }
  }, {
    "id": "芯片（CPU、GPU、ASIC、FPGA、DSP）",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166106083329",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "芯片（CPU、GPU、ASIC、FPGA、DSP）",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680515627000,\"id\":\"1642827727173648385\",\"level\":\"2\",\"name\":\"芯片（CPU、GPU、ASIC、FPGA、DSP）\",\"parent\":\"1642820648870412289\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523483000}"
    }
  }, {
    "id": "板卡",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166106083330",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "板卡",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523508000,\"id\":\"1642860784131833858\",\"level\":\"2\",\"name\":\"板卡\",\"parent\":\"1642820648870412289\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "id": "模组",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166110277634",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "模组",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523522000,\"id\":\"1642860840109015042\",\"level\":\"2\",\"name\":\"模组\",\"parent\":\"1642820648870412289\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523531000}"
    }
  }, {
    "id": "终端设备",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166110277635",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "终端设备",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523575000,\"id\":\"1642861061450825730\",\"level\":\"1\",\"name\":\"终端设备\",\"parent\":\"0\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "id": "传感器",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166110277636",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "传感器",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523592000,\"id\":\"1642861132800131074\",\"level\":\"2\",\"name\":\"传感器\",\"parent\":\"1642861061450825730\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523716000}"
    }
  }, {
    "id": " 一体机",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166110277637",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": " 一体机",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523610000,\"id\":\"1642861210449281026\",\"level\":\"2\",\"name\":\" 一体机\",\"parent\":\"1642861061450825730\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523721000}"
    }
  }, {
    "id": "可穿戴设备",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166110277638",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "可穿戴设备",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523625000,\"id\":\"1642861274081067009\",\"level\":\"2\",\"name\":\"可穿戴设备\",\"parent\":\"1642861061450825730\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523727000}"
    }
  }, {
    "id": "智能家居设备",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166114471937",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "智能家居设备",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523639000,\"id\":\"1642861329647206401\",\"level\":\"2\",\"name\":\"智能家居设备\",\"parent\":\"1642861061450825730\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523739000}"
    }
  }, {
    "id": "智能运载工具",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166114471938",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "智能运载工具",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523653000,\"id\":\"1642861390758215681\",\"level\":\"2\",\"name\":\"智能运载工具\",\"parent\":\"1642861061450825730\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523747000}"
    }
  }, {
    "id": "机器人（实体）",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166114471939",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "机器人（实体）",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523670000,\"id\":\"1642861460048117761\",\"level\":\"2\",\"name\":\"机器人（实体）\",\"parent\":\"1642861061450825730\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523755000}"
    }
  }, {
    "id": "网络通信设备",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166114471940",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "网络通信设备",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523683000,\"id\":\"1642861516977405954\",\"level\":\"2\",\"name\":\"网络通信设备\",\"parent\":\"1642861061450825730\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523760000}"
    }
  }, {
    "id": "其他",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166114471941",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "其他",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523691000,\"id\":\"1642861551156789249\",\"level\":\"2\",\"name\":\"其他\",\"parent\":\"1642861061450825730\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523765000}"
    }
  }, {
    "id": "SaaS服务",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166118666242",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "SaaS服务",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523796000,\"id\":\"1642861990300418049\",\"level\":\"1\",\"name\":\"SaaS服务\",\"parent\":\"0\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "id": " 通用SaaS",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166118666243",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": " 通用SaaS",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523820000,\"id\":\"1642862090267459586\",\"level\":\"2\",\"name\":\" 通用SaaS\",\"parent\":\"1642861990300418049\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523884000}"
    }
  }, {
    "id": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166118666244",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523844000,\"id\":\"1642862190683291650\",\"level\":\"2\",\"name\":\"行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）\",\"parent\":\"1642861990300418049\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523891000}"
    }
  }, {
    "id": "其他SaaS(个人TOC的小智能化工具)",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166118666245",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "其他SaaS(个人TOC的小智能化工具)",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523859000,\"id\":\"1642862252347949058\",\"level\":\"2\",\"name\":\"其他SaaS(个人TOC的小智能化工具)\",\"parent\":\"1642861990300418049\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523895000}"
    }
  }, {
    "id": "AI平台",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166118666246",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "AI平台",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523918000,\"id\":\"1642862503779696641\",\"level\":\"1\",\"name\":\"AI平台\",\"parent\":\"0\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "id": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166118666247",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523936000,\"id\":\"1642862575514877953\",\"level\":\"2\",\"name\":\"MLOps（包括框架和modelOps、安全平台、视觉平台）\",\"parent\":\"1642862503779696641\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680523998000}"
    }
  }, {
    "id": "DevOps(低/无代码开发平台)",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166122860545",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "DevOps(低/无代码开发平台)",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523949000,\"id\":\"1642862631265566721\",\"level\":\"2\",\"name\":\"DevOps(低/无代码开发平台)\",\"parent\":\"1642862503779696641\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680524007000}"
    }
  }, {
    "id": " 开放API（类似GPT）",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166122860546",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": " 开放API（类似GPT）",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523963000,\"id\":\"1642862691114090498\",\"level\":\"2\",\"name\":\" 开放API（类似GPT）\",\"parent\":\"1642862503779696641\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680524011000}"
    }
  }, {
    "id": "RPA（流程自动化软件）",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166122860547",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "RPA（流程自动化软件）",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680523978000,\"id\":\"1642862752384483329\",\"level\":\"2\",\"name\":\"RPA（流程自动化软件）\",\"parent\":\"1642862503779696641\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680524017000}"
    }
  }, {
    "id": "AI生态",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166122860548",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "AI生态",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680524037000,\"id\":\"1642863000469176321\",\"level\":\"1\",\"name\":\"AI生态\",\"parent\":\"0\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "id": "总包集成",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166127054850",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "总包集成",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680524053000,\"id\":\"1642863069343842306\",\"level\":\"2\",\"name\":\"总包集成\",\"parent\":\"1642863000469176321\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680524141000}"
    }
  }, {
    "id": "咨询服务",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166127054851",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "咨询服务",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680524068000,\"id\":\"1642863132568780802\",\"level\":\"2\",\"name\":\"咨询服务\",\"parent\":\"1642863000469176321\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680524152000}"
    }
  }, {
    "id": "开发者社区",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166127054852",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "开发者社区",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680524082000,\"id\":\"1642863190718611458\",\"level\":\"2\",\"name\":\"开发者社区\",\"parent\":\"1642863000469176321\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680524158000}"
    }
  }, {
    "id": "安全检测与认证（检验产品）",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166127054853",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "安全检测与认证（检验产品）",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680524097000,\"id\":\"1642863251263389697\",\"level\":\"2\",\"name\":\"安全检测与认证（检验产品）\",\"parent\":\"1642863000469176321\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680524164000}"
    }
  }, {
    "id": " 智能云服务（渲染、训练、推理）",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166127054854",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": " 智能云服务（渲染、训练、推理）",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680524112000,\"id\":\"1642863315075530754\",\"level\":\"2\",\"name\":\" 智能云服务（渲染、训练、推理）\",\"parent\":\"1642863000469176321\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680524168000}"
    }
  }, {
    "id": "数据",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166127054855",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "数据",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680524188000,\"id\":\"1642863635058982913\",\"level\":\"1\",\"name\":\"数据\",\"parent\":\"0\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "id": "数据治理（包括采集、标注、清洗）",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166131249153",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "数据治理（包括采集、标注、清洗）",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680524204000,\"id\":\"1642863700402044929\",\"level\":\"2\",\"name\":\"数据治理（包括采集、标注、清洗）\",\"parent\":\"1642863635058982913\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680524231000}"
    }
  }, {
    "id": "数据中台",
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166131249154",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "数据中台",
      "nodeType": "productionNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680524220000,\"id\":\"1642863769901662210\",\"level\":\"2\",\"name\":\"数据中台\",\"parent\":\"1642863635058982913\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680524237000}"
    }
  }, {
    "id": "1",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166131249155",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "1",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"3\",\"basicContractPhone\":\"4\",\"basicEnglishTitle\":\"2\",\"basicInfo\":\"100\",\"basicTitle\":\"1\",\"compreMarket\":\"Pre-IPO企业\",\"compreQuatification\":\"69\",\"compreQulification\":\"国高新\",\"compreStandardIndustry\":\"66\",\"compreStandardInternation\":\"64\",\"compreStandardLocal\":\"67\",\"compreStandardNation\":\"65\",\"comprehensiveAuthority\":\"63\",\"createBy\":\"qiye_admin\",\"createTime\":1668073922000,\"govsuppCarryNation\":\"70\",\"govsuppCarryOffice\":\"72\",\"govsuppCarryProvin\":\"71\",\"id\":\"1590643434783834113\",\"investFinancing\":\"23\",\"investInstitution\":\"73\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"15\",\"marksaleMain2019\":\"17\",\"marksaleMain2020\":\"18\",\"marksaleMain2021\":\"18\",\"marksaleRevenue2019\":\"19\",\"marksaleRevenue2020\":\"20\",\"marksaleRevenue2021\":\"21\",\"marksaleService\":\"16\",\"scholarCooperation\":\"22\",\"status\":\"录入专员未录入\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"62\",\"techcontIsStable\":\"否\",\"techcontIsStock\":\"是\",\"techcontIsStockPool\":\"是\",\"techcontPaperRatio\":\"61\",\"techcontPatentRatio\":\"60\",\"techdevAdvantage\":\"14\",\"techdevFormChip\":\"IP\",\"techdevFormSoft\":\"SDK\",\"techdevMaturity\":\"已完成原始技术原型且尚未形成产品,已完成实际产品销售且尚未部署\",\"techinvLeader1Achievement\":\"32\",\"techinvLeader1Education\":\"28\",\"techinvLeader1Experience\":\"30\",\"techinvLeader1Graduate\":\"29\",\"techinvLeader1Is\":\"两院院士\",\"techinvLeader1IsOther\":\"31\",\"techinvLeader1Name\":\"8\",\"techinvLeader2Achievement\":\"37\",\"techinvLeader2Education\":\"33\",\"techinvLeader2Experience\":\"35\",\"techinvLeader2Graduate\":\"34\",\"techinvLeader2Is\":\"长江学者\",\"techinvLeader2IsOther\":\"36\",\"techinvLeader2Name\":\"9\",\"techinvMoney2019\":\"5\",\"techinvMoney2020\":\"6\",\"techinvMoney2021\":\"7\",\"techinvTechAllAmount\":11,\"techinvTechDoctorAmount\":12,\"techinvTechMasterAmount\":13,\"techinvTechResearcherAmount\":10,\"techprodAicomCcf\":\"54\",\"techprodAicomCcfBest\":\"55\",\"techprodAicomNormal\":\"53\",\"techprodAicomOtherAsso\":\"59\",\"techprodAicomOtherCity\":\"58\",\"techprodAicomOtherNation\":\"56\",\"techprodAicomOtherPro\":\"57\",\"techprodAicomTop\":\"52\",\"techprodAwardNation\":\"43\",\"techprodAwardPatent\":\"44\",\"techprodAwardProadv\":\"47\",\"techprodAwardProv\":\"45\",\"techprodAwardWuwenjun\":\"48\",\"techprodAwardXuehui\":\"46\",\"techprodBusiness\":\"49\",\"techprodBusinessOther\":\"51\",\"techprodBusinessProvince\":\"50\",\"techprodPaperAmount\":40,\"techprodPaperQualityAmount\":\"41\",\"techprodPatentAmount\":38,\"techprodPatentEffectiveAmount\":39,\"techprodPatentInfluence\":\"42\",\"updateBy\":\"qiye_admin\",\"updateTime\":1676352614000}"
    }
  }, {
    "id": "北京宝龙德科技有限责任公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166131249156",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京宝龙德科技有限责任公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"刘铭新\",\"basicContractPhone\":\"13910300176\",\"basicEnglishTitle\":\"bolder\",\"basicInfo\":\"北京宝龙德科技有限责任公司创建于2002年，公司从成立伊始，即坚持以科研成果为技术依托，以立足于高新技术产品化、专业从事电气测控设备和电力电子产品的研发、制造、销售。从2014年以来，着手开发电池智能控制系统第一代产品开始，后续几年根据应用的范围及场景不同，不断完善产品的性能。即在2016年研发成功了通信基站电池维护系统第二代产品，在青海地区通讯基站作为基站备电管理系统广泛应用。2018年产品升级到动态重构系统第五代产品。研发成果在新疆、湖北、湖南、河北、安徽等地方作为通讯基站备电管理系统应用，解决了5G通讯基站大负载备电的需求。2019年以后，产品升级改造成功，可以在储能系统中广泛应用，特别是针对目前大量的梯次锂电池二次使用。此技术解决了传统电池组使用中的电池安全性差，寿命短，达不到设计使用寿命的问题。在此期间，获得授权5项发明专利、1项实用新型、2项软件著作权项。\",\"basicTitle\":\"北京宝龙德科技有限责任公司\",\"compreMarket\":\"其他\",\"compreQuatification\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\\n\",\"createBy\":\"bolder\",\"createTime\":1675927045000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1623581820444016642\",\"investFinancing\":\"0\",\"investInstitution\":\"北京宝龙德能源科技股份有限公司；北京德元宝龙科技发展有限公司\",\"investRound\":\"暂无\",\"marksaleFamouse\":\"北京航空航天大学江西研究院、新至储能科技（浙江）有限公司，中国铁塔股份有限公司，国家电投集团科学技术研究院有限公司\",\"marksaleMain2019\":\"无\",\"marksaleMain2020\":\"北京航空航天大学江西研究院；国家电投集团科学技术研究院有限公司\",\"marksaleMain2021\":\"新至储能科技（浙江）有限公司; 中国移动内蒙古分公司\",\"marksaleRevenue2019\":\"0\",\"marksaleRevenue2020\":\"50.8\",\"marksaleRevenue2021\":\"196\",\"marksaleService\":\"四笔/246.8万\",\"scholarCooperation\":\"与国家电投集团科学技术研究院有限公司合作开发电能智能管理装置，中国铁塔股份有限公司  认证为创新能源（认证编号：47878）\",\"status\":\"未确认\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"否\",\"techcontIsStock\":\"是\",\"techcontIsStockPool\":\"是\",\"techcontPaperRatio\":\"0\",\"techcontPatentRatio\":\"5\",\"techdevAdvantage\":\"授权5项发明专利、1项实用新型、2项软件著作权项\",\"techdevFormChip\":\"集成了芯片的硬件产品\",\"techdevFormHard\":\"集成软硬件的系统\",\"techdevFormSoft\":\"系统集成\",\"techdevMaturity\":\"实际产品已完成销售并部署到用户端\",\"techinvLeader1Achievement\":\"创立：（1）机会理论，（2）不确定随机规划，（3）不确定随机风险分析。其他学者在本\\n人创立的机会理论基础之上发展出了不确定随机可靠性理论、不确定随机逻辑、不确定随\\n机图、不确定随机网络、不确定随机更新过程、科学解读了Ellsberg实验等。目前为止，\\n基于机会理论的文章共发表几十余篇，其中顶级期刊IEEE Trans. on Fuzzy Systems7\\n篇。（4）信度人工智能创始人之一。\",\"techinvLeader1Education\":\"博士生\",\"techinvLeader1Experience\":\"\",\"techinvLeader1Graduate\":\"美国辛辛那提大学、清华大学\",\"techinvLeader1IsOther\":\"\",\"techinvLeader1Name\":\"刘郁涵\",\"techinvLeader2Achievement\":\"1、科技部，A类项目-国家重点研发计划项目-国家重点研发计划课题，纵20200001，金融科技监管的理论与方法研究2、深圳市随手科技有限公司，横向课题，横20201484，基于智能现金流的生命周期投资组合问题研究\",\"techinvLeader2Education\":\"博士生\",\"techinvLeader2Experience\":\"中央财经大学金融学院金融工程系工作\",\"techinvLeader2Graduate\":\"清华大学\",\"techinvLeader2IsOther\":\"\",\"techinvLeader2Name\":\"戴韡,\",\"techinvMoney2019\":\"108\",\"techinvMoney2020\":\"130\",\"techinvMoney2021\":\"180\",\"techinvTechAllAmount\":13,\"techinvTechDoctorAmount\":2,\"techinvTechMasterAmount\":0,\"techinvTechResearcherAmount\":5,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":15,\"techprodPatentEffectiveAmount\":5,\"techprodPatentInfluence\":\"1.54\",\"updateBy\":\"qiye_admin\",\"updateTime\":1677226834000}"
    }
  }, {
    "id": "神州灵云（北京）科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166135443458",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "神州灵云（北京）科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"罗景宏\",\"basicContractPhone\":\"13701022662\",\"basicEnglishTitle\":\"DCLINGCLOUD\",\"basicInfo\":\"神州灵云（北京）科技有限公司基于大数据分析平台和人工智能技术，提供网络全流量实时分析和应用业务数据融合解决方案，助力企业IT系统端到端网络安全运维管理和优化。公司在网络流量分析和性能监控领域深耕6年以上，已将成熟的高性能探针技术应用于实时全流量安全检测和回溯审计领域。公司率先完成云原生架构下的流量采集分析解决方案，搭建了云网一体化运维平台。公司坚持安全自主创新和产业融合共赢的发展道路，以用户为中心，以实用性、前瞻性、智能化、精细化的产品开发为指引，助力用户构建全链路的网络安全体系，促进数字技术与实体经济的深度融合。\\n神州灵云公司拥有自主知识产权，已获取多项软件著作权和发明专利；公司通过了ISO9001质量体系认证、ISO14001环境管理体系认证、ISO45001职业健康安全管理体系认证、ISO20000信息技术服务管理认证、ISO27000信息安全管理体系认证、ISO22301业务连续性管理体系认证；公司为国家高新技术企业，入选“北京中关村瞪羚企业”，北京市“专精特新”中小企业。\",\"basicTitle\":\"神州灵云（北京）科技有限公司\",\"compreMarket\":\"其他\",\"compreQuatification\":\"中国软件协会 | 企业信用等级证书（AAA级）\\n中国信通院 | 软件供应商厂商名录\\n中国网络安全产业联盟（CCIA） | 网络安全服务阳光行动成员单位\",\"compreQulification\":\"国高新,省市级专精特新\",\"compreQulificationOther\":\"中关村高新技术企业、瞪羚企业、国家级科技型中小企业\",\"compreStandardIndustry\":\"《网络安全产品质量与技术能力评价体系及相关标准》\\n《信息技术服务 应用和网络性能管理技术要求》\",\"compreStandardInternation\":\"0\",\"compreStandardLocal\":\"0\",\"compreStandardNation\":\"0\",\"comprehensiveAuthority\":\"CNAS：1、环境管理体系认证-02122E11139R0S；2、中国职业健康安全管理体系认证-02122S11052R0S；3、质量管理体系认证（ISO9001）-02122Q10148R1M；4、信息技术服务管理体系认证-0212020ITSM0101R0MN；5、信息安全管理体系认证-02120|10204R0M；6、NetSensor网络全流量分析系统-2092054；7、NetSensor网络全流量分析系统-SHTEC2020TYP0017；8、神州灵云APT威胁监测系统-2020-154；9、内网主机安全监测系统-202200082；10、神州灵云网络流量分析审计系统-2206520072；11、神州灵云APT威胁检测系统-2022-181\\nCNCA：1、CCC强制性产品-网络全流量分析系统服务器-2021010911436372；2、CCC强制性产品-网络全流量分析系统服务器-2021010911437260；3、业务连续性管理体系-CCSC22BC3647R0S\\n兼容性认证：1、华为鲲鹏技术认证；2、IPv6认证；3、长城超云服务器兼容性认证；4、长城飞腾服务器兼容性认证；5、通信软件兼容性认证；6、麒麟软件NeoCertify认证；7、东方通软件兼容性认证；8、人大金仓软件兼容性认证；9、阿里云生态集成认证；10、龙芯架构兼容互认证\\n公安部计算机信息系统安全专用产品销售许可证\\n中国国家信息安全产品认证\\n网络关键设备与网络安全专用产品安全认证\\n信息技术产品安全测评认证\\n中国信通院-先进网络安全产品技术能力\\n中国信通院 | 软件供应链产品名录\\nITSS符合性认证\\nCMMIDEV/3认证\",\"createBy\":\"Dcling\",\"createTime\":1677054639000,\"govsuppCarryNation\":\"2022年大数据产业发展试点示范项目:\\n项目名称：实时网络全流量大数据基座  （大数据重点产品方向）\",\"govsuppCarryOffice\":\"中国移动科技进步与业务服务创新：构建AI应用智造工厂，加速AI场景规模化落地\",\"govsuppCarryProvin\":\"新疆网信科创课题研究\",\"id\":\"1628311293009657857\",\"investFinancing\":\"2400\",\"investInstitution\":\"神州信息\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"交通银行股份有限公司\\n中国解放军总医院\\n华泰人寿保险有限公司\\n中国人寿保险有限公司\\n中国移动通信集团\\n上海诺基亚贝尔股份有限公司\",\"marksaleMain2019\":\"交通银行股份有限公司、新华三信息技术有限公司、上海诺基亚贝尔股份有限公司、光大证券股份有限公司、中国移动通信集团安徽有限公司\",\"marksaleMain2020\":\"神州数码系统集成服务有限公司、北京宇信智臻信息技术有限公司、上海华讯网络系统有限公司、北京奇虎科技有限公司、新华三信息技术有限公司\",\"marksaleMain2021\":\"新华三信息技术有限公司、中国移动通信集团安徽有限公司、广州东诚信息科技有限公司、神州数码系统集成服务有限公司、上海诺基亚贝尔股份有限公司\",\"marksaleRevenue2019\":\"5532\",\"marksaleRevenue2020\":\"2009\",\"marksaleRevenue2021\":\"5136\",\"marksaleService\":\"神州灵云网络流量分析审计系统\\n神州灵云应用性能管理系统\\nPMOne大数据分析平台软件\\n神州灵云APT威胁监测系统\\n神州灵云内网主机安全监测系统\",\"scholarCooperation\":\"华东师范大学 :  双方签署了《产学研合作协议书》，双方合作产品研发并共同申请发明专利\",\"status\":\"正在评级\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"否\",\"techcontIsStock\":\"是\",\"techcontIsStockPool\":\"是\",\"techcontPaperRatio\":\"2\",\"techcontPatentRatio\":\"5\",\"techdevAdvantage\":\"中国软件行业协会 | 2021年软件行业典型示范案例\\n中国软件行业协会 | 2022年度优秀软件产品\\n中国信通院 |  先进网络安全产品技术能力评测证书\\n创客北京2022 | 企业组TOP150\\n创客北京2022 | 软件与信息技术三等奖\",\"techdevFormSoft\":\"软件平台包含前中后台,系统集成\",\"techdevMaturity\":\"实际产品已完成销售并部署到用户端\",\"techinvLeader1Achievement\":\"1、论文：NetSensor网络全流量分析解决方案（NetSensor Network Traffic Analysis Solution）\\n2、论文：《网站自动生成器的设计和实现》发表于《计算机应用与软件》\\n3、论文：《一个单源的应用层组播协议的设计和实现》发表于《计算机应用》\\n4、发明专利：《一种基于多核处理器的网络协议分析系统及其分析方法》\\n5、发明专利：《一种多段链接网络的实时分析方法及旁路抓包系统》\\n6、发明专利：《一种网络监控数据处理方法及装置》\\n7：发明专利：《一种服务器IP与服务标识关联的方法及装置》\\n8：发明专利:  《一种离线安装文件的校验方法、装置、介质及电子设备》\",\"techinvLeader1Education\":\"硕士研究生\",\"techinvLeader1Experience\":\"神州灵云CTO，是神州灵云自主研发产品的总架构设计师。中国网络安全产业联盟（CCIA）技术专家库成员，提交发明专利十余篇。华东师范大学计算机硕士毕业。二十年网络大数据性能分析和大客户项目经验。曾在NetScout公司（NASDAQ：NTCT）工作近十年，担任资深技术负责人，从事亚太和欧洲区技术管理和产品需求工作，负责亚太百万美金以上大型项目的技术支持和咨询服务，并担任亚太区NetScout大学的首席培训师。此前就职于微软全球技术中心担任windows服务器技术支持工程师。\",\"techinvLeader1Graduate\":\"华东师范大学\",\"techinvLeader1Is\":\"\",\"techinvLeader1IsOther\":\"中国网络安全产业联盟（CCIA）技术专家库成员\",\"techinvLeader1Name\":\"方奕\",\"techinvLeader2Achievement\":\"1、论文：An on-demand virtual backbone broadcast for VANET\\n2、发明专利：《一种多段链接网络的实时分析方法及旁路抓包系统》\\n3、发明专利：《一种服务器IP与服务标识关联的方法及装置》\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\" 神州灵云软件研发部研发总监，负责网络全流量大数据基座架构设计和规范指定。华东师范大学计算机硕士毕业，曾获ACM大赛铜奖,全国大学生数学建模二等奖。提交发明专利3篇。曾就职于美国DELL公司UTM部门软件开发部, 美国Cisco公司网络设备部软件开发。Belkin公司高级软件开发工程师。 \",\"techinvLeader2Graduate\":\"华东师范大学\",\"techinvLeader2Is\":\"\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"石天磊\",\"techinvMoney2019\":\"2105.06\",\"techinvMoney2020\":\"1407.95\",\"techinvMoney2021\":\"1866.33\",\"techinvTechAllAmount\":71,\"techinvTechDoctorAmount\":0,\"techinvTechMasterAmount\":5,\"techinvTechResearcherAmount\":42,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"1、2022年中国软件行业协会“2022年度优秀软件产品奖”；2、2018中国IT服务运营大会（ITSOC）——神州灵云NetSensor网络性能管理平台一举斩获“IT服务十大优秀产品”大奖（中国电子工业标准化技术协会、信息技术服务分会）\",\"techprodAicomOtherCity\":\"神州灵云登榜“中国网络安全创业公司HOT51”：《中国网络安全创业公司HOT51》代表着中国网络安全市场的“创势力”和风向标，是网络安全投资者、企业CISO用户、网络安全人才和网络安全企业需要共同关注的热榜。\\n中国网络安全产业联盟 | 2021年中国网安产业潜力之星\\n中国网络安全产业联盟 | 2021 & 2022年度优秀会员单位\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"0\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"1、神州灵云网络全流量分析系统——在第七届“创客中国”北京市中小企业创新创业大赛暨“创客北京2022”创新创业大赛——获得企业组TOP150奖\\n2、神州灵云网络全流量分析系统——在第七届“创客中国”北京市中小企业创新创业大赛暨创客北京2022”创新创业大赛中——获得软件与信息技术三等奖\",\"techprodPaperAmount\":1,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":16,\"techprodPatentEffectiveAmount\":5,\"techprodPatentInfluence\":\"1.75\",\"updateBy\":\"qiye_admin\",\"updateTime\":1678181988000}"
    }
  }, {
    "id": "上海艾麒信息科技股份有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166135443459",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "上海艾麒信息科技股份有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"李志锋\",\"basicContractPhone\":\"13816179158\",\"basicEnglishTitle\":\"Shanghai Aiqi Information Technology Co.,Ltd\",\"basicInfo\":\"上海艾麒信息科技股份有限公司是一家基于移动互联网的智能影像工具软件与营销推广服务提供商。 艾麒于2009年成立，先后开发了艾玛人工智能影像处理、音视频编解码和影像渲染等三大核心引擎，获得发明专利授权10个，100项软著。 公司是上海市科技“小巨人”企业、 “专精特新”企业，还是闵行区首批数字化转型服务提供商。 公司立志成为移动端的中国Adobe，在全球领域贡献中国标准。“乐秀-视频编辑软件”等视频产品矩阵面向全球用户，为用户提供智能化的影音处理解决方案，全球下载量已经超过9.5亿。公司2021年度在移动端视频处理工具市场位居市场前三，在data.ai发布的2022年度中国非游戏厂商出海收入榜30强位居第18位。 在创新发展方面，公司获得了第八届中国创新创业大赛电子信息行业全国总决赛三等奖，“上海市软件和信息技术服务业高成长百家”、“创业在上海”2019年度投资价值奖“以及“闵行区最具创新活力企业奖”、”华为耀星领航计划-乘风破浪奖“等奖项。\",\"basicTitle\":\"上海艾麒信息科技股份有限公司\",\"compreMarket\":\"IPO企业\",\"compreQuatification\":\"小微企业\",\"compreQulification\":\"省市级专精特新,国高新,创新型中小企业\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"1、CNAS：质量管理体系认证（ISO9001）——智能影像处理软件开发；基于大数据的营销信息推广服务\\n2、其他认证：软件产品证书：（1）艾麒QuickArt-一键P图手机软件（2）艾麒自律酱手机软件（3）艾麒角虫导师手机软件（4）艾麒广告分发管理平台软件\",\"createBy\":\"energysh\",\"createTime\":1677058533000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"1、闵行区科委补助“基于乐秀软件的面向一带一路国家的应用推广平台”项目；2、闵行区科技小巨人 项目\",\"govsuppCarryProvin\":\"公司先后承担了市级科研项目 10 项，高新技术成果转化项 目 5 项。近几年承接的重点项目包括，1、上海市经信委补助 “基于乐秀软件的 面向一带一路国家 的应用推广平台” 项目；2、上海市经济和信息化委员会的上海市软件和集成电路产业发展专项项目“基于人工智能技术的图像处理软件产业化项目\\\";3 上海市文化创意产业推进领导小组办公室的上海市促进文化创意产业发展财政扶持项目“基于人工智能的图像修复技术研究及开发”等。\",\"id\":\"1628327623800717313\",\"investFinancing\":\"7600\",\"investInstitution\":\"上海数字产业集团、上海科创投、小橡创投\",\"investRound\":\"已上市\",\"marksaleFamouse\":\"Google  Apple、拼多多、圆通速递、中国银联、招商银行等客户的重要合作伙伴\",\"marksaleMain2019\":\"2022年\\n1 上海寻梦信息技术有限公司\\t短信息服务\\t165,744,660.88\\n2 Google 集团\\tAPP 订阅、APP广告展示\\t60,533,584.27\\n3 保利物业管理（北京）有限公司\\t用户营销推广服务\\t15,712,526.96\\n4 圆通速递有限公司\\t短信息服务\\t12,258,236.50\\n5 Apple Inc\\tAPP 订阅\\t11,936,027.05\",\"marksaleMain2020\":\"2020年\\n1 Google 集团   APP订阅、APP广告展示  48,822,950.35 元\\n2上海寻梦信息技术有限公司  短信息服务  销售金额32,367,681.98元\\n3 圆通速递有限公司  短信息服务  销售金额  19,508,588.26元\\n4 江苏乾璟通网络科技有限公司  短信息服务  13,753,389.03 元\\n5 淮安新冠博信息科技有限公司  短信息服务 13,641,338.73元\",\"marksaleMain2021\":\"2021年\\n1  Google 集团  APP订阅、APP广告展示  66,639,403.23元\\n2  上海寻梦信息技术有限公司 短信息服务、用户营销推广服务  66,447,856.21元\\n3  圆通速递有限公司  短信息服务 34,762,460.57元 \\n4  Apple Inc  APP 订阅 11,220,265.71 元\\n5  中国银联股份有限公司 用户营销推广服务 9,408,032.94 元\",\"marksaleRevenue2019\":\"36271.95\",\"marksaleRevenue2020\":\"25751.29\",\"marksaleRevenue2021\":\"26571.09\",\"marksaleService\":\"2020年公司主要产品及业务的销售情况\\n1. 移动营销推广与服务  销售金额 183,393,720.32 元 占比71.22%\\n2. 影像处理工具  销售金额 73,807,677.58  占比28.66%\\n\\n2021年公司主要产品及业务的销售情况\\n1. 移动营销推广与服务  销售金额 175,932,229.08 元 占比66.21%\\n2. 影像处理工具  销售金额 88,503,565.03  占比33.31%\",\"scholarCooperation\":\"上海交通大学，合作开发项目名称：降质图像的超分、修复与上色算法研究，金额100万元，已经申请2项发明专利\",\"status\":\"评级完成\",\"techcontDistribution\":\"上海\",\"techcontIsStable\":\"否\",\"techcontIsStock\":\"是\",\"techcontIsStockPool\":\"是\",\"techcontPaperRatio\":\"0\",\"techcontPatentRatio\":\"4\",\"techdevAdvantage\":\"产品技术综合实力及优势\\n核心技术1 音视频编辑引擎及图形图像渲染引擎\\n公司研发的音视频编辑引擎及图形图像渲染引擎基于高度优化的核心算法，提高了影像的渲染速度，尤其在高分辨率场景下效果更加明显。在高达 60fps 的渲染速度下，画面表现\\n流畅自然，用户体验好。\\n此引擎充分基于移动终端特性，通过针对性优化算法，极大减少编辑过程中的资源消耗，大\\n大提高了用户制作视频的效率与成功率。\\n此引擎支持主流建模工具和 UI 制作工具生成的特效素材实时渲染，提高了视频编辑效率，丰富的素材内容保证了用户制作视频的效果。\\n核心技术2 音视频编解码引擎 此引擎可以兼容不同型号移动终端，针对不同硬件编解码器，实时分析视频内容、帧率、码\\n率等信息，智能调度硬编解码系统及软编解码系统，实现快速、高清、高效的视频导出。\\n此引擎高性能的调度算法，可以消除音视频编码过程产生的延时问题，保证视频预览效果及\\n导出效果的高度一致性，误差控制在 10ms 以内，相较行业普遍 30ms 以上误差，具有十分明显的优势；\\n此引擎针对视频导出过程而开发的并行流水线框架技术，可以充分利用各项系统资源，减少\\n视频导出时间并提高视频导出的稳定性，大大提高视频导出成功率，保证良好的用户体验。\\n核心技术3音视频播放引擎\\n此系统基于高效的自研多播放器管理引擎，保证移动终端系统资源合理分配、合理使用，最\\n大化为用户提升播放体验。此系统支持多种音频、视频格式的播放，通过算法优化，达到 10ms 以内误差的视频时间戳寻址操作，与视频编辑功能紧密结合后，可以大大提高视频编辑精准度，为高要求用户制作高质量视频保驾护航。 核心技术4 人脸识别技术\\n基于自主研发的人脸识别算法和深度学习引擎，实现了人脸检测、人脸关键点、人脸属性\\n分析、人脸匹配等功能。能够在低光照、复杂背景等各类复杂情况下进行实时、稳定、准确\\n的分析。 核心技术5 图像与视频分割技术\\n基于深度神经网络的图像分割法，通过分析轮廓、遮挡关系、颜色、纹理和形状等信息把图\\n像划分成若干互不交迭的区域，从而完成对人像、皮肤、头发、五官等的分割，创新性的将\\n物体的轮廓信息加入模型的计算中，强化了物体的边缘细节，实现了发丝级抠像效果。\\n在图像分割的基础上，将物体分割技术拓展到了视频领域，实现了移动端实时的高精度人像\\n分割。 核心技术6 图像与视频修复技术 通过创新的对抗神经网络技术，采用分阶段生成物体轮廓、颜色、纹理的方案，建立图像修\\n补模型，实现了高复原率，高响应速度的图像修复功能；在相同的测试数据集上，SSMI 指标比主流算法提升了近 5 个百分点；在视频去物体方面，创新性的引入基于卷积神经网络的光流计算模型来获取视频中缺失部分前后帧的信息，再结合图像修改技术实现基于内容感知的视频修补，修补效果比传统方式有了大的提升。 核心技术7 图像增强技术\\n能够准确判断图像的质量问题及成因，并针对不同情况对图像进行增强、去噪、去模糊、超\\n分辨率等处理，一键解决低画质问题。 核心技术8  图像识别与场景识别技术\\n通过自研的深度学习算法，对图片进行识别，对图像中不同环境下的物体进行识别、分析、\\n优化。\\n核心技术9  跃火广告分发软件系统\\n适配客户不同的 API 协议，将其标准化，实现不同的 API 聚合，实现与渠道商的一次性对\\n接，简化了对接的复杂度及工作量。通过数据动态解析等功能，无需额外的开发工作就能实\\n现新客户接入。\\n核心技术10 数据管理与分析系统\\n基于数据库、消息队列等技术，支持多任务管理并能实时同步数据，支持 PB 级万亿条数据\\n存储；通过优化数据管理算法及冷热数据同步，实现大数据量情况下海量数据的聚合查询\\n和多维度分析。 核心技术11  跃火云短信网关核心框架 支持三大运营商的主流短信网关协议以及快速对接新网关协议；对短信通道的连接情况定时\\n自动检测并对断路重连；支持高并发低延迟的数据连接通信功能。\\n核心技术12\\n实时收集系统数据信息，多维度统计通道发送数，到达率等指标，通过预设信息触发阈值及\\n通道策略自动切换短信通道，自动选择价格最低质量最稳定的短信通道，并提供各种系统预\\n警通知。提高业务运营过程的可管理性、可监控性、可优化性。通过域名备案查询，白名\\n单，阴阳链接检测，落地页检测，AI 语义分析等手段实时快速分析短信内容并加以拦截及预警。 产品获得政府项目支持\\n2018年以来，公司先后承担的政府科研主要项目支持如下：\\n项目1  2018年上海市经信委软集项目，面向“一带一路”沿线国家及地区的手机APP应用推广平台；\\n项目2  2018年闵行区文创项目\\t基于Draw show软件的动漫人才培养及社区建设\\n项目3  2019年上海市经信委软集项目\\t面向“一带一路”沿线国家及地区的手机APP应用推广平台\\n项目4  2021年上海市文创办文创项目\\t基于人工智能的图像修复技术研究及开发\\n上述项目均获得了上海浦东软件平台有限公司的软件项目验收测试。\",\"techdevFormHard\":\"\",\"techdevFormSoft\":\"算法模型,SDK,软件平台包含前中后台\",\"techdevMaturity\":\"实际产品已完成销售并部署到用户端\",\"techinvLeader1Achievement\":\"林立是上海艾麒信息科技股份有限公司的三位联合创始人之一，在2009年3月参与创立了上海艾麒信息科技有限公司。目前他担任上海艾麒信息科技股份有限公司的公司董事、高级副总经理；同时担任全资子公司上海影卓信息信息科技有限公司的法人代表、董事长。\\n林立是公司主管研发的副总经理，他负责了公司视频类、图像类产品APP的规划、产品立项和开发以及后续的产品推广等全过程，取得了卓越的成绩。他先后负责了公司乐秀（VideoShow）、角虫绘图(DrawShow)、大神P图(Magicut)的产品立项规划、产品研发和运营，他最突出的优势是善于发现市场潜在的需求点，可以将市场需求转化为产品的发展方向，同时根据产品的开发规划组织精干的产品开发团队，之后为新产品的研发和运营建立完善的研发、运营管理体系，保障团队稳定成长。\\n林立作为发明人之一共申请了4个发明专利，其中1项发明专利获得授权，发明专利名称为“基于移动平台的视频换脸方法及系统”，其余3项均进入了公开和实质审查阶段。\",\"techinvLeader1Education\":\"硕士研究生\",\"techinvLeader1Experience\":\"2004年10月至2008年7月,任花旗软件技术服务(上海)有限公司高级软件工程师;\\n2008年8月至2009年3月,任上海艾麒无线科技有限公司软件工程师;\\n2009年4月至2010年7月,任艾麒有限副总经理;\\n2010年8月至2015年6月,任艾麒有限监事;\\n2015年7月至2020年8月,任艾麒有限董事兼副总经理;\\n2020年8月至今,任艾麒信息董事兼副高级副总经理。\",\"techinvLeader1Graduate\":\"上海交通大学\",\"techinvLeader1Is\":\"\",\"techinvLeader1IsOther\":\"中级出版专业技术人员\",\"techinvLeader1Name\":\"林立\",\"techinvLeader2Achievement\":\"吴航，毕业于同济大学模式识别与智能系统专业，在人工智能领域的开发具有多年的经验和成功案例。他的研究方向包括机器学习、计算机视觉、语义分割的研究。\\n他负责了公司智能广告平台的架构设计和算法设计以及人工智能图像技术处理的主要算法设计，作为发明专利的主要发明人申请了7项发明专利，获得3项授权，分别是“基于超像素分割的交互式抠图系统、方法及装置”、“一种自动抠图系统、方法以及装置”和“基于移动平台的视频换脸方法及系统”。\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"2005年—2007年 上海龙旗科技股份有限公司 软件开发工程师\\n2007年—2012年 上海传骋信息技术有限公司  软件开发部经理\\n2012年—至今     上海艾麒信息科技股份有限公司  软件开发高级工程师  公司专家\\n \",\"techinvLeader2Graduate\":\"上海同济大学\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"吴航\",\"techinvMoney2019\":\"3368.44\",\"techinvMoney2020\":\"2388.76\",\"techinvMoney2021\":\"3795.25\",\"techinvTechAllAmount\":100,\"techinvTechDoctorAmount\":0,\"techinvTechMasterAmount\":10,\"techinvTechResearcherAmount\":47,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"2020年华为耀星计划乘风破浪奖；\\n2020年度莘庄工业区最佳成长奖\\n2021年闵行区数字化专项工作领导小组办公室授予的“闵行区数字化转型服务商”\\n\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"2021年度上海张江国家自主创新示范区“张江之星”企业\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"2019-第八届中国创新创业大赛-电子信息行业三等奖\",\"techprodBusinessOther\":\"2019年创业在上海投资价值奖\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":25,\"techprodPatentEffectiveAmount\":10,\"techprodPatentInfluence\":\"2.29\",\"updateBy\":\"qiye_admin\",\"updateTime\":1678171380000}"
    }
  }, {
    "id": "山东云天安全技术有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166135443460",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "山东云天安全技术有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"李玉萍\",\"basicContractPhone\":\"15066686398\",\"basicEnglishTitle\":\"Cloudsky SEC\",\"basicInfo\":\"云天安全成立于2016年，专注网络信息安全产品的研发、生产及销售，大力推进网络安全技术创新和产品服务创新，为政府企事业用户提供体系化的独立第三方网络空间安全运营服务。2020年已完成由360领投，山东省财金、济南市金控跟投的PreA轮融资，2022年完成A轮融资，计划在2023年完成B轮融资，2024年完成C轮融资，2025年完成Pre-IPO轮并启动股改、申报科创板上市。\\n云天安全通过了高新技术企业、软件企业、大数据企业多项认定，信息系统安全集成、安全运维、风险评估服务资质认证，以及ISO9001、ISO14001、ISO45001、ISO20000、ISO27001体系认证。公司董事长被评为泉城产业领军人才，公司被评为山东省瞪羚企业、济南市瞪羚企业、山东省“专精特新”企业、济南市“专精特新”企业、山东省重点上市后备企业、山东省大数据50强企业、山东省软件百强企业、济南市企业技术中心、济南市工业企业“一企一技术”研发中心；国家信息安全漏洞共享平台CNVD原创漏洞报送贡献单位、首批工业互联网安全“领航”计划成员单位、国家信息安全漏洞库（CNNVD）技术支撑三级单位、国家工业信息安全漏洞库（CICSVD）技术支持组成员单位、工业信息安全产业发展联盟（NISIA）工业信息安全应急服务支撑单位。同时还是山东省，以及济南、淄博、枣庄、聊城、泰安等各地市网络安全应急服务支撑单位。自主研发的安全产品获得18项发明专利证书、62项软件著作权、以及多项公安部销售许可证等。公司以基于平台+流程+工具+人的体系化产品模式，专注于产品的技术创新，以产品应用场景创新，产品数据自我进化创新，创造更高品质的产品。通过军团纵队营销模式，始终以客户需求为导向,致力于为全国客户提供优质产品和服务。\",\"basicTitle\":\"山东云天安全技术有限公司\",\"compreMarket\":\"其他\",\"compreQuatification\":\"1、ISO9001质量管理体系认证；\\n2、ISO14001环境管理体系认证；\\n3、ISO45001职业健康安全管理体系认证；\\n4、ISO20000信息技术服务管理体系认证；\\n5、ISO27001信息安全管理体系认证；\\n6、国家信息安全漏洞共享平台CNVD原创漏洞报送贡献单位；\\n7、首批工业互联网安全“领航”计划成员单位；\\n8、国家信息安全漏洞库（CNNVD）技术支撑三级单位；\\n9、国家工业信息安全漏洞库（CICSVD）技术组成员单位；\\n10、工业信息安全产业发展联盟（NISIA）工业信息安全应急服务支撑单位；\\n11、2021年山东省电子信息行业优秀企业名单-最具发展潜力企业；\\n12、工业信息安全应急服务支撑单位；\\n13、山东省网络安全应急服务支撑单位证书；\\n14、济南、淄博、聊城、泰安、菏泽、烟台、临沂、日照、德州等多地市网络安全应急技术支撑单位；\\n15、山东省教育系统网络安全应急服务支撑单位；\\n16、企业信用等级证书（AAA）；\\n17、易派客信用评价证书-A级；\\n18、易派客知识创新能力评价证书-A级；\\n19、注册信息安全开发人员CISD官方授权培训机构授权证书；\\n20、CISP-DSG培训机构授权。\",\"compreQulification\":\"国高新,省市级专精特新,省高新\",\"compreQulificationOther\":\"瞪羚企业、科技型中小企业\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"2022年——参与编制团体标准《大数据平台安全评价指标及方法》——T/SDBDA 36—2022\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"CNAS：1、信息安全管理体系认证；2、质量管理体系；3、中国职业健康安全管理体系认证；4、环境管理体系认证\\nCCRC：1、信息安全服务资质认证—信息系统安全集成服务(二级)；2、信息安全服务资质认证—信息系统安全运维服务(二级)；3、信息安全服务资质认证—信息安全风险评估服务(二级)；4、信息安全服务资质认证—信息安全应急处理服务(二级)\\nANAB：信息技术服务管理体系认证—信息系统的运维服务\\n其他认证：软件产品证书30项—昊天工业网络全流量安全分析系统、昊天视频安全准入控制系统、轩辕安全运营管理系统等\",\"createBy\":\"yuntian2023\",\"createTime\":1677459097000,\"govsuppCarryNation\":\"“基于可信计算的档案数据资源安全摆渡技术研究”-2020年国家档案局科技项目计划\\n参与多项国家重大工控安全课题研究，通过拓展研究成果应用，输出解决方案,提高IT关键信息基础设施防御能力，打造国家一流工控安全服务商。\",\"govsuppCarryOffice\":\"1、2021年：“基于主动诱捕技术的工业互联网监测与防护项目”-山东省技术创新项目；\\n2、2022年：“基于多源超融合技术的财政系统网络安全运营项目”-山东省技术创新项目；\\n3、2022年：“昊天工业网络全流量分析系统” -山东省技术创新项目。\",\"govsuppCarryProvin\":\"1、“面向石油行业的安全可信云与动态态势感知系统建设及应用示范”-山东省重点研发计划；\\n2、“基于数字孪生的网络攻防演练平台”-山东省科技型中小企业创新能力提升工程项目；\\n3、“数字城市安全大脑”-山东省2022年度数字经济重点项目。\",\"id\":\"1630007711504072706\",\"investFinancing\":\"18200\",\"investInstitution\":\"2020年——山东财金，济南金控集团，360集团\\n2023年——领投机构： 山东发展投资集团；跟投机构： 泰安开发区泰山创业投资有限公司，乐知基金，西藏苍鹰创业投资管理有限公司\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"中国石化集团共享服务有限公司、神州数码（中国）有限公司、公安部第一研究所、中国联合网络通信有限公司、恒丰银行股份有限公司、中国邮政集团有限公司、浪潮软件集团有限公司、兖州煤业股份有限公司、上海浪潮云计算服务有限公司、中泰证券股份有限公司、山东省交通运输厅、淄博矿业集团有限公司、齐鲁制药集团有限公司、山东省市场监督管理局、中国科协信息中心等。\",\"marksaleMain2019\":\"客户1：神州数码（中国）有限公司\\n客户2：兖州煤业股份有限公司\\n客户3：浪潮云信息技术股份公司\\n客户4：中国石化集团共享服务有限公司东营分公司\\n客户5：新特能源股份有限公司\",\"marksaleMain2020\":\"客户1：公安部第一研究所\\n客户2：济南市卫生健康委员会\\n客户3：东营瑞驰新能源有限公司\\n客户4：北京椒图科技有限公司\\n客户5：山东省农村信用社联合社\",\"marksaleMain2021\":\"客户1：中国石油化工股份有限公司九江分公司\\n客户2：浪潮云信息技术股份公司\\n客户3：兖州煤业股份有限公司\\n客户4：山东管理学院\\n客户5：公安部第一研究所\",\"marksaleRevenue2019\":\"10120.76\",\"marksaleRevenue2020\":\"6040.14\",\"marksaleRevenue2021\":\"8451.26\",\"marksaleService\":\"2022年产品及服务销售单：137个；\\n2022年产品及服务销售额：10120.76万元。\",\"scholarCooperation\":\"云天安全开展全方位深度合作，共同打造多元网络安全生态圈，目前与北京航空航天大学在泰安共同创建占地近百亩的北航云奇学院；与中石化集团联合成立石化共享网络安全联合实验室；与沈昌祥院士在可信领域开展合作，成立山东省首个可信安全创新工作站；与公安部一所合作成立山东省唯一的网络安全服务中心；与北京航空航天大学、北京邮电大学、北京理工大学、山东大学、山东科技大学、齐鲁工业大学、泰山学院等高校建立长期的产学研合作关系；同时公司拥有济南和泰安两个城市级网络空间安全运营服务中心，一个行业级网络安全运营服务中心。\\n云天安全拥有北京和山东两所研究院，在北京设有高端技术研发中心，在济南设有开发中心，并与重点行业客户联合成立了“化工联合实验室”、“煤炭联合实验室”、“钢铁联合实验室”、“工控机床联合实验室”。\",\"status\":\"评级完成\",\"techcontDistribution\":\"山东省\",\"techcontIsStable\":\"否\",\"techcontIsStock\":\"是\",\"techcontIsStockPool\":\"是\",\"techcontPaperRatio\":\"2(A Survey on Adversarial Attack in the Age of Artificial Intelligence——Citations：11)\",\"techcontPatentRatio\":\"5\",\"techdevAdvantage\":\"云天安全始终坚持自主创新并且掌握核心技术，自主研发了“昊天系列”、“轩辕系列”、“昆仑系列”、“盘古系列”、“东岳系列”等几十款安全产品。其中“昊天UHC安全审计防护系统”列入了国家档案局课题(国家级)；“基于蜜罐的工业互联网主动防御系统”、“昊天UHC安全审计防护系统”均获得科技进步奖(省级)，应用于中原油田，胜利油田；“昊天工业交换机”应用于复兴号列车；“基于蜜罐的工业互联网主动防御系统”以优异成绩荣获了由山东省工信厅等主办的山东省工业软件开发技术大赛三等奖；公司项目“面向石油行业的安全可信云与动态态势感知系统建设及应用示范”，通过了由山东省科学技术厅主管的山东省重点研发计划。\",\"techdevFormChip\":\"软件栈包括驱动或编译器或函数库等,集成了芯片的硬件产品,IP,芯片 or 传感器\",\"techdevFormHard\":\"版卡,集成软硬件的系统,纯硬件系统不含软件\",\"techdevFormSoft\":\"系统集成,软件平台包含前中后台,算法模型,前台,后台,SDK,中台\",\"techdevMaturity\":\"实际产品已完成销售并部署到用户端\",\"techinvLeader1Achievement\":\"1、所获荣誉奖项：\\n2020年7月，山东省优秀首席数据官CDO；\\n2020年11月，山东省电子信息行业优秀企业家；\\n2020年11月，山东电子学会科学技术奖二等奖；\\n2020年12月，泉城产业领军人才；\\n2021年3月，济南市高层次人才分类认定D类人才；\\n2021年3月，山东省助残就业联盟副主席；\\n2021年5月，济南市历下区重点企业先进个人；\\n2021年12月，山东管理学院第一届理事会常务理事；\\n2021年12月，中国电子企业协会优秀企业家；\\n2022年1月，山东省电子信息行业优秀科技工作者；\\n2022年9月，济南市网信领域论文征集二等奖；\\n2023年2月，2022年度山东省大数据产业领军人物。\\n2、已发表论文2篇：\\n①论文《基于全流量分析的工业网络安全分析及OT可视化系统研究》；\\n②论文《一款基于主动防御机制的伪装诱捕与威胁感知产品》-发表期刊《信息安全研究》。\\n3、知识产权：\\n已授权专利19项，其中发明专利16项，实用新型专利3项。\",\"techinvLeader1Education\":\"硕士，博士在读\",\"techinvLeader1Experience\":\"1997.9-2001.9年   东软集团  研发部  研发工程师\\n2001.9 创立山东新中天信息技术股份有限公司\\n2016.8 创立山东云天安全技术有限公司\",\"techinvLeader1Graduate\":\"北京大学\",\"techinvLeader1Is\":\"\",\"techinvLeader1IsOther\":\"泉城产业领军人才（创业人才）；济南市高层次人才。\",\"techinvLeader1Name\":\"李峰\",\"techinvLeader2Achievement\":\"主持开发并输出了多款工控安全类产品，如工控蜜罐，工业资产探查系统，视频安全管控系统，工业全流量威胁感知系统；参与设计开发的“基于蜜罐的工业互联网主动防御系统”获得科技进步奖(省级)；“基于蜜罐的工业互联网主动防御系统”项目以第四名的优异成绩荣获了由山东省工信厅等主办的山东省工业软件开发技术大赛三等奖；昊天工控蜜罐系统获得中国信通院2021年工控安全方向唯一能力认证；参与开发的多款产品获得发明专利和实用新型专利证书；发表过多项信息安全领域相关论文。\",\"techinvLeader2Education\":\"本科\",\"techinvLeader2Experience\":\"2001.4-2003.9  神州数码思科事业部 售前工程师\\n2003.9-2005.11 UT斯达康 核心网工程师\\n2008.8-2014.9  阿尔卡特朗讯 通信核心网高级工程师\\n2014.10-2018.03 爱渠西来艾颂 通信核心网高级工程师\\n2018年至今 山东云天安全技术有限公司\",\"techinvLeader2Graduate\":\"中国传媒大学\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"孙晓鹏\",\"techinvMoney2019\":\"1582.66\",\"techinvMoney2020\":\"989.25\",\"techinvMoney2021\":\"1444.08\",\"techinvTechAllAmount\":197,\"techinvTechDoctorAmount\":0,\"techinvTechMasterAmount\":8,\"techinvTechResearcherAmount\":94,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"1、2018年10月，云天安全荣获中国科协信息系统安全检测及可靠性测试比赛第一名；\\n2、荣获2020年度第五届中国网络安全与信息产业“金智奖”年度创新企业奖\",\"techprodAicomOtherCity\":\"1、2020.11—济南市卫健委—首届“健康济南.共建共享”杯网络安全与信息化技能大赛优秀贡献奖；\\n2、2021年10月中国工业互联网安全大赛（上海区选拔赛）暨第一届上海工业互联网安全大赛（上海市通信管理局）—优胜奖\",\"techprodAicomOtherNation\":\"1、国家信息安全漏洞库（CNNVD）技术支撑三级单位等级证书；\\n2、中国电子企业协会优秀企业；\\n3、中国网络安全产业联盟2021年度先进会员单位；\\n4、中国网络安全产业联盟2022年度先进会员单位；\\n5、中国网络安全产业联盟2022年度最佳协作单位。\",\"techprodAicomOtherPro\":\"1、山东省工业软件开发技术部大赛（大赛由山东省工业和信息化厅、山东省总工会、山东省新旧动能转换综合试验区建设领导小组办公室、山东省人力资源和社会保障厅共同主办。）—基于蜜罐的工业互联网主动防御系统—三等奖；2、2020“云天·泰山杯”山东省网络安全大赛—突出贡献奖（大赛由省委网信办联合团省委、省发展改革委、省教育厅、省工业和信息化厅、省公安厅、省财政厅、省人力资源社会保障厅、省大数据局、省国家保密局、省密码管理局、省国家安全厅、省通信管理局等省直部门举办，国家计算机网络与信息安全管理中心山东分中心、山东信息协会承办，山东云天安全技术有限公司独家冠名，杭州安恒信息技术股份有限公司、泰山信息科技有限公司提供技术支持。）\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"1、2020年—山东省电子信息行业技术创新科学技术进步奖——二等奖——基于蜜罐的工业互联网主动防御系统；\\n2、2021年—山东省电子信息行业科技创新科技进步奖——二等奖——USB移动存储介质管理系统UHC；\\n3、2022年—山东省大数据协会大数据科学技术奖——一等奖——基于蜜罐的工业互联网主动防御系统。\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"2020年度（第五届）中国网络安全与信息产业“金智奖”年度创新企业奖；\\n2021年11月 获得工业信息安全产业发展联盟颁发的工业信息安全优秀应用案例奖。\",\"techprodBusiness\":\"2018年“创客中国”创新创业大赛优胜奖；\\n青岛高新区蓝贝国际创新创业大赛-信息安全赛-三等奖。\",\"techprodBusinessOther\":\"1、云天安全荣获2021年青岛高新区蓝贝国际创新创业大赛信息安全专业赛三等奖：云天安全参赛项目“昊天工控蜜罐系统”，荣获信息安全专业赛三等奖。本次大赛由青岛高新技术产业开发区管理委员会主办，青岛中关村信息谷科技服务有限责任公司、中国信息通信研究院安全研究所、青岛高投集团蓝贝创新园科技发展有限公司联合承办。\",\"techprodBusinessProvince\":\"1、2018年9月，云天安全入选2019年“创客中国”中小企业创新创业大赛200强\\n2、2018年9月20日，基于大数据的智慧反欺诈云服务平台项目在2019年“创客中国”电子信息与信息安全创新创业大赛中荣获企业组优胜奖（大赛由工业和信息化部信息中心和玉溪市人民政府举办）\\n2、2018年8月23日，参加“唐冶院士谷杯”2019“创客中国”山东省中小企业创新创业大赛决赛，荣获二等奖（“创客中国”创新创业大赛山东区组委会）\\n3、2017年9月，参加“创客中国”电子信息与信息安全创新创业大赛全国总决赛\",\"techprodPaperAmount\":2,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":27,\"techprodPatentEffectiveAmount\":18,\"techprodPatentInfluence\":\"0.22\",\"updateBy\":\"qiye_admin\",\"updateTime\":1678171400000}"
    }
  }, {
    "id": "友道科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166135443461",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "友道科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"马嘉琪\",\"basicContractPhone\":\"18511717734\",\"basicEnglishTitle\":\"Youdao Technology Co., Ltd\",\"basicInfo\":\"友道科技有限公司是注册在北京大兴区的国家高新企业、中关村高新企业、双软认证企业、专精特新企业、北京市AAA信用等级企业、中关村瞪羚企业。友道科技有限公司是京投、国铁、建信、基石等国企重要参股的国有资本股权比例近半数的企业，同时也是国内最大的轨道交通虚拟仿真实训装备领域的提供商。\\n公司拥有近50项专利，其中发明专利15项，其他自主知识产权100余项。主要业务领域为轨道交通和通用航空的相关产品的智能化设计研发及销售。公司经过近7年的发展实现了100余款轨道交通和通用航空领域的产品研发，其中近30款产品在实现较好的经济效益，并在行业及院校1000多家客户得到广泛应用。轨道交通类产品采用智能化技术设计和研发了轨道交通通信信号、运营管理、车辆技术相关领域产品达80项。通用航空领域模拟机、航空电子、航空通信相关产品近30项。\\n公司依托众多的股东资源，和全国轨道交通产教联盟成员企业资源，经过自身多年积累，汇聚了包括中国地方铁路协会、金砖国家工商理事会、中国交通教育研究会、中国工业经济联合会、中国城市轨道交通协会、教育部高等学校交通运输类专业教学指导委员会、全国交通运输职业教育教学指导委员会、全国航空工业职业教育教学指导委员会、中国中车、中国通号、中国航空工业集团公司、北京交通大学产业教学研究院及部分地方铁路局集团公司、部分地方地铁公司、铁道出版社等企业在内的众多轨道交通产业、企业与行业资源。智联友道做为涵盖全国交通运输领域的大部分高等院校、职业院校及行业企业参与的国家级大赛的技术支持单位及协办单位，支持了数百场包括教育部、人社部、交通运输部等多个部委主办或联合主办的全国院校交通运输专业类国际级、国家级技能大赛，涵盖了交通运输领域的铁道信号、铁路综合维修、动车组制修师、通信与控制、轨道交通运营管理综合应用、城市轨道车辆技术、城市轨道交通信号工、城市轨道交通调度员，以及通用航空类的飞机维修、航空电气安装调试等十多种岗位技术工种及专业领域的产品和资源。形成了产教融合的新商业模式,从而实现把行业、企业及教育资源汇集在一起，即加强了与客户的关系粘度同时，也打通了交通运输行业、企业、教育上下游资源实现了互联互通、同频同振，做到了交通运输领域的“产教融合、协同育人”。\\n\",\"basicTitle\":\"友道科技有限公司\",\"compreMarket\":\"其他\",\"compreQuatification\":\"北京市AAA信用等级企业\\n金砖国家职业技能大赛铁路信号设备维护技能赛项合作企业、全国职业院校技能大赛合作企业（国赛资质）、全国轨道交通产教联盟秘书长单位、教育产学合作协同育人项目合作企业、中国成人教育协会副会长单位、中国成人教育协会交通运输教育专业委员会主任单位、中国高校创新创业孵化器联盟副理事长单位、第三届中国互联网+大学生创新创业大赛支持单位、中国通信工业协会轨道交通产教联盟秘书长单位\",\"compreQulification\":\"国高新,省市级专精特新\",\"compreQulificationOther\":\"中关村瞪羚企业、中关村高新企业\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"教育部1+X证书制度试点“轨道交通车辆机械维护\\\"项目的评价组织机构\",\"comprehensiveAuthority\":\"其他：获得软件产品证书12项，包括：1、智联友道轨道交通运营管理综合实训演练平台设备嵌入式软件[简称：运营管理综合实训演练平台]；2、智联友道轨道交通列车车轮计轴器设备嵌入式软件[简称：计轴器]；3、智联友道轨道交通锂电池仿真工具嵌入式软件[简称：锂电池仿真工具]；4、微机联锁逻辑软件[简称：联锁逻辑软件]；5、微机联锁操作表示机软件[简称：操作表示机软件]；6、智联友道可视化智能控制系统；7、智联友道可视化智能控制系统下位机软件；8、联友道轨道交通信号控制系统基于发送器设备嵌入式软件[简称：发送器]；9、轨道交通信号控制系统实训平台操作终端软件[简称：列控操作终端]；10、轨道交通信号控制系统实训平台软件[简称：列控中心]；11、智联友道轨道交通信号控制系统基于接收器设备嵌入式软件[简称：接收器]；12、智联友道轨道交通运营管理综合实训演练平台设备三维仿真软件[简称：运营管理仿真软件]\",\"createBy\":\"ZLYD999\",\"createTime\":1677574750000,\"govsuppCarryNation\":\"参与国家级智慧新朔项目\\n（一）\\t指导思想\\n以习近平新时代中国特色社会主义思想为指导，以“创新、协调、绿色、开放、共享”的发展理念，践行交通强国建设重大战略。按照国家能源集团集团“一个目标、三型五化、七个一流”发展战略要求，以实现运输智能化为导向，以引领行业进步为目标，以管理模式创新和激励机制为动力，以高科技组织平台建设为依托，以核心技术研发和重点技术创新为突破，坚持高质量发展，着力推动新兴技术和重载铁路业务的高效融合，将云计算、大数据、物联网、区块链、人工智能、5G等前沿技术，深度应用到铁路运输组织、安全生产、经营决策等各环节，打造安全、智慧、高效、绿色的世界一流铁路运输企业，实现重载铁路由高速度发展向高质量发展的跨越，助推交通强国的崛起。\\n（二）\\t基本原则\\n（1)\\t坚持统筹规划、标准先行。建立动态、开放、共享、创新的智慧重载铁路标准体系，标准先行、规范引领，以需求为导向，统筹规划、顶层设计、分步实施，以技术创新和管理创新的双轮驱动，有序推进智慧重载铁路建设稳步进行。\\n（2)\\t坚持需求导向、重点突破。以国家能源集团运输产业高质量发展需求为导向，突破运输计划智能编制、智能调车、重载列车智能驾驶、设备设施全生命周期管理等技术瓶颈，实现铁路运输生产全链条智能化，遴选典型生产环节开展示范项目建设，以点带面推动智慧化建设。\\n（3)\\t坚持数据驱动、资源共享。以数据为关键要素，统一数据标准、接口规范，构建数据治理体系，赋能铁路运输及关联领域，促进专业融合与管理协同，实现数据资源共享，推动管理模式创新，提升数据资产价值。\\n（4)\\t坚持创新发展、安全效益。树立创新理念，坚持自主创新与开放合作相结合，通过原始创新、集成创新、引进消化吸收再创新等方式，提升智慧化创新能力、保障可持续发展，形成安全可控的技术体系和产业链。有效控制智能系统建设成本和运行成本，加大智慧化创新成果转化力度，向智慧化要效益。\\n（三）\\t建设目标\\n（1）技术创新水平大幅提升。人工智能、区块链、5G通信等现代新技术在公司广泛应用，运输生产管理全链条智能化水平大幅提升，形成完备的智慧铁路技术及标准体系，树立智慧铁路技术发展新标杆。 \\n（2）安全保障能力持续提升。安全生产水平、安全预防及管控能力、应急处置及救援能力全面提升，实现“零故障、零伤亡”的最终目标。\\n（3）运输效率、资源配置效率、资本运营效率大幅提高。通过数据驱动管理，实现企业高效的管理运行、人员机构精简，重构核心竞争力，主要运输经济指标和经营效益指标实现国内领先。\\n（4）清洁能源广泛应用。守牢能源安全的底线，“网源储车”一体化和多能互补发展，跨区能源输送通道利用率不断提高，实现能源应用高度数字化、智能化，源网荷储协同互动、电力多能互补，清洁能源资源科学配置，调度运营扁平化，助力碳达峰、碳中和目标的实现。\\n（四）\\t总体架构\\n“智慧新朔”将按照“一云 两网 三个平台 五大智能”的“1235”架构蓝图开展建设。其中“一云”指新朔铁路智能大脑，“两网”指全息感知网与数据通信网，“三个平台”指北斗高精服务平台、地理信息服务平台、融合通信服务平台，“五大智能”指智能装备、智能运营、智能运维、智能安全、智能综合管理。通过“智慧新朔”的全面实施实现一站全息感知、一网融合通信、一库集成治理、一图智能联动、一屏数字运营等“五大能力”，形成融合、标准、开放的智能应用新格局。\\n（1）以“一云”建设为核心。从满足未来公司智慧化发展需求出发，以标准化、高可用、高性能、绿色节能为原则，规划主机、存储、网络、安全设备等基础设施配置，构建新朔铁路智能大脑，提供资源、数据、算法、服务、辅助决策、分类展示等综合能力。\\n（2）以“两网”建设为基础。数据通信网，进行公司数据承载网增速、扩容，做好公司全线4G网络覆盖，实施重点区域5G网络覆盖，建成高速、安全的网络传输大动脉。全息感知网，推广实施供电6C、车辆5T、机车6A、环境监测、雨量监测、无人机巡检等监测检测系统，建设以站场全景视频为重点的综合视频监控系统，形成基于物联网技术的人、物、车、时空状态数据全息感知体系。\\n（3）以“三个平台”建设为支撑。从基础应用体系标准、先进、共享考虑，统筹建设地理信息服务、北斗高精服务、融合通信服务等三大服务平台，提供基于GIS信息、位置信息、视频信息、多媒体信息的标准化数据采集与融合服务，为智能化应用提供支撑。\\n（4）以“五大智能”建设为方向。从公司实际情况出发，在智能运营、智能装备、智能运维、智能安全、智能综合管理等五个方面积极探索，通过标准建立、项目实施，逐步实现决策智慧化、运营数字化、管理协同化、设备智能化、低碳清洁化。\\n（五）\\t友道负责部分\\n友道主要负责“一云 两网 三个平台 五大智能”中“智能运营” 子模块卧厂车站智能管理系统虚拟实体中GIS层及模型建设部分。\\n智能运营基于“云物移大智、声光电感知”等先进技术，突破运输计划编制、车站作业等关键业务智能化瓶颈，连通运输计划编制、调度指挥执行各信息系统，联通各部门与单位，提升运产计划编制与执行的智能化水平，推进应用重载铁路运输计划一体化编制、智能调度及智能车站等系统，构建面向运输生产全过程的运输组织与调度指挥体系。\\n（1）智能运输\\n部署应用重载铁路智能运输组织方案编制系统，构建将人工智能、大数据、云计算和大规模超算等新兴技术同控制反馈等优化理论融合的智能运输组织新模式，形成多专业工种相互协同，包括线网基础数据管理系统、货流分析系统、通过能力分析与瓶颈识别系统、运输计划编制和调整系统、列车开行方案和运行图一体化智能编制系统等。在集团铁路调度信息系统深度应用的基础上，进一步研究应用铁路运输综合智能调度系统，实现调度数据共享交互、数据价值挖掘以及数据的综合利用，开展调度计划云端智能编制、智能调整以及计划质量评估，提升调度工作智能化水平。\\n（2）智能车站\\n以提升车站运营效率、降低运营成本、提高作业安全性、降低劳动强度为目标，依托数字化、传感、高精定位、网络等技术，研究 BIM、GIS、传感、定位、物联网、人工智能等先进技术在铁路车站的综合应用，建设重载铁路车站智能化管理系统，结合卧厂站2万吨改造项目，实现车站智能感知、智能决策、智能交互与智能控制，最终达到车站运营与管理的智能化。\\n（3）智慧示范线\\n根据准池线运营环境、设备状况等便利条件，先期将准池线打造为智慧铁路示范线，以业务管理全面智能化为目标，将车务、机务、工务、电务、供电等专业智慧成果融合应用到准池线，构建具备CTC系统中心化管理、咽喉智能列检、站场动态物管理、智能调车、道岔监测、车站行车设备动态分析、行车设备综合健康管理、车站运营数据分析及可视化等功能的智慧铁路示范线，逐步实现车站管理智能化和少人化。\\n\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1630492795105509378\",\"investFinancing\":\"16239\",\"investInstitution\":\"中桥资本 , 太和东方投资，基石基金 , 中创红星，北文投 , 京投科技(北京)有限公司 , 建信信托，京投众甫科技有限公司 \",\"investRound\":\"C轮\",\"marksaleFamouse\":\"通号城市轨道交通技术有限公司\\n株洲中车特种装备科技有限公司\\n中铁电气化局上海工程有限公司\\n中铁十二局铁路养护工程有限公司\\n中铁四局集团第八工程分公司\\n中铁一局集团新运工程有限公司\\n北京交通大学\\n山西通用航空职业技术学院\\n河北交通职业技术学院\\n深圳职业技术学院\\n福建船政交通职业学院\",\"marksaleMain2019\":\"1、四川铁道职业学院：合同金额累计5742000元，购买铁路信号设备维护技能考核实训平台-标准版、轨道交通线路维修仿真考核平台、车辆转向架检修综合实训平台、城市轨道交通列车模拟驾驶系统；\\n2、北京交通运输职业学院，合同金额累计5077720元，购买航向姿态系统测试实训装置、飞行电子仪器仪表一体化实训装置、自动飞行控制系统实训装置、通信导航系统实训装置；\\n3、吉林交通职业技术学院，合同金额累计4037500元，购买\\\"铁路信号设备虚拟场景考核系统、铁路信号设备综合实训平台、城市轨道交通运营设计与应急处理实训平台、城市轨道列车模拟驾驶系统、铁路信号设备竞赛考核管理系统；\\n4、北京轨道产教科技服务有限公司，合同金额累计3372500元，购买城市轨道交通运营设计与应急处理赛项技术平台-实训室版、铁路信号设备维护技能考核实训平台-实训室版；\\n5、淮北工业与艺术学校，合同金额累计3299500元，购买通信与控制技术应用实训平台、通信数据智能分析竞赛演练平台、电子产品测试与维护硬件平台、通信数据技能竞赛演练模块\",\"marksaleMain2020\":\"1、四川铁道职业学院，合同金额累计5742000元，购买铁路信号设备维护技能考核实训平台-标准版、轨道交通线路维修仿真考核平台、车辆转向架检修综合实训平台、城市轨道交通列车模拟驾驶系统；\\n2、北京交通运输职业学院，合同金额累计5077720元，购买航向姿态系统测试实训装置、飞行电子仪器仪表一体化实训装置、自动飞行控制系统实训装置、通信导航系统实训装置；\\n3、吉林交通职业技术学院，合同金额4037500元，购买\\\"铁路信号设备虚拟场景考核系统、铁路信号设备综合实训平台、城市轨道交通运营设计与应急处理实训平台、城市轨道列车模拟驾驶系统、铁路信号设备竞赛考核管理系统；\\n4、北京轨道产教科技服务有限公司，合同金额累计3372500元，购买城市轨道交通运营设计与应急处理赛项技术平台-实训室版、铁路信号设备维护技能考核实训平台-实训室版；\\n5、淮北工业与艺术学校，合同金额累计3299500元，购买通信与控制技术应用实训平台、通信数据智能分析竞赛演练平台、电子产品测试与维护硬件平台、通信数据技能竞赛演练模块\",\"marksaleMain2021\":\"1、山西铁道职业技术学院，合同金额累计4851230元，购买轨道交通运营管理综合实训演练平台、和谐3D仿真转向架、ZPW-2000A型无绝缘移频自动闭塞系统、云计算平台运维与开发课程资源包软件（中级）；\\n2、广西交通职业技术学院 ，合同金额累计3953400元，购买城市轨道交通列车模拟驾驶系统、故障轨道模拟盘；\\n3、北京交通运输职业学院，合同金额累计3820000元，购买城市轨道交通模拟驾驶系统、虚拟维修模拟机教师端、虚拟维修模拟学生端、B737NG航线绕机检查；\\n4、山西师范大学现代文理学院 ，合同金额累计3500000，购买数控加工流程VR实训系统、虚拟现实内容创作软件、虚拟柔性制造系统2.0、机器人智能技术开发平台；\\n5、河北交通职业技术学院 ，合同金额累计2747660元，购买车辆地面控制系统、基于电子沙盘的CBTC系统、转向架、计算机联锁（实物道岔）设备实训系统\",\"marksaleRevenue2019\":\"7238\",\"marksaleRevenue2020\":\"7103\",\"marksaleRevenue2021\":\"10169\",\"marksaleService\":\"公司产品及服务落地以项目交付形式为主，2022年总订单数237笔，累计销售额7238万\",\"scholarCooperation\":\"一、与北京交通大学合作共建轨道交通产业教育研究院\\n2020年友道科技有限公司与北京交通大学联合设立“北京交通大学轨道交通产业教育研究院”，友道为研究院秘书长单位。研究院作为创新产学研合作的新载体、新模式，本着共建共管、优势互补、互利互赢的原则，充分发挥北京交通大学的学科优势、人力资源优势和友道科技的产业优势、开发资源、项目实施经验等优势，实现轨道交通产、学、研、用四位一体的协同创新。未来计划设立4家北京交通大学轨道交通产业教育研究院分院、建立10家北京交通大学轨道交通产业教育研究院产教融合型基地、建立6家北京交通大学轨道交通产业教育研究院轨道交通虚拟仿真实训基地。\\n二、参与国家级智慧新朔项目\\n（一）\\t指导思想\\n以习近平新时代中国特色社会主义思想为指导，以“创新、协调、绿色、开放、共享”的发展理念，践行交通强国建设重大战略。按照国家能源集团集团“一个目标、三型五化、七个一流”发展战略要求，以实现运输智能化为导向，以引领行业进步为目标，以管理模式创新和激励机制为动力，以高科技组织平台建设为依托，以核心技术研发和重点技术创新为突破，坚持高质量发展，着力推动新兴技术和重载铁路业务的高效融合，将云计算、大数据、物联网、区块链、人工智能、5G等前沿技术，深度应用到铁路运输组织、安全生产、经营决策等各环节，打造安全、智慧、高效、绿色的世界一流铁路运输企业，实现重载铁路由高速度发展向高质量发展的跨越，助推交通强国的崛起。\\n（二）\\t基本原则\\n（1)\\t坚持统筹规划、标准先行。建立动态、开放、共享、创新的智慧重载铁路标准体系，标准先行、规范引领，以需求为导向，统筹规划、顶层设计、分步实施，以技术创新和管理创新的双轮驱动，有序推进智慧重载铁路建设稳步进行。\\n（2)\\t坚持需求导向、重点突破。以国家能源集团运输产业高质量发展需求为导向，突破运输计划智能编制、智能调车、重载列车智能驾驶、设备设施全生命周期管理等技术瓶颈，实现铁路运输生产全链条智能化，遴选典型生产环节开展示范项目建设，以点带面推动智慧化建设。\\n（3)\\t坚持数据驱动、资源共享。以数据为关键要素，统一数据标准、接口规范，构建数据治理体系，赋能铁路运输及关联领域，促进专业融合与管理协同，实现数据资源共享，推动管理模式创新，提升数据资产价值。\\n（4)\\t坚持创新发展、安全效益。树立创新理念，坚持自主创新与开放合作相结合，通过原始创新、集成创新、引进消化吸收再创新等方式，提升智慧化创新能力、保障可持续发展，形成安全可控的技术体系和产业链。有效控制智能系统建设成本和运行成本，加大智慧化创新成果转化力度，向智慧化要效益。\\n（三）\\t建设目标\\n（1）技术创新水平大幅提升。人工智能、区块链、5G通信等现代新技术在公司广泛应用，运输生产管理全链条智能化水平大幅提升，形成完备的智慧铁路技术及标准体系，树立智慧铁路技术发展新标杆。 \\n（2）安全保障能力持续提升。安全生产水平、安全预防及管控能力、应急处置及救援能力全面提升，实现“零故障、零伤亡”的最终目标。\\n（3）运输效率、资源配置效率、资本运营效率大幅提高。通过数据驱动管理，实现企业高效的管理运行、人员机构精简，重构核心竞争力，主要运输经济指标和经营效益指标实现国内领先。\\n（4）清洁能源广泛应用。守牢能源安全的底线，“网源储车”一体化和多能互补发展，跨区能源输送通道利用率不断提高，实现能源应用高度数字化、智能化，源网荷储协同互动、电力多能互补，清洁能源资源科学配置，调度运营扁平化，助力碳达峰、碳中和目标的实现。\\n（四）\\t总体架构\\n“智慧新朔”将按照“一云 两网 三个平台 五大智能”的“1235”架构蓝图开展建设。其中“一云”指新朔铁路智能大脑，“两网”指全息感知网与数据通信网，“三个平台”指北斗高精服务平台、地理信息服务平台、融合通信服务平台，“五大智能”指智能装备、智能运营、智能运维、智能安全、智能综合管理。通过“智慧新朔”的全面实施实现一站全息感知、一网融合通信、一库集成治理、一图智能联动、一屏数字运营等“五大能力”，形成融合、标准、开放的智能应用新格局。\\n（1）以“一云”建设为核心。从满足未来公司智慧化发展需求出发，以标准化、高可用、高性能、绿色节能为原则，规划主机、存储、网络、安全设备等基础设施配置，构建新朔铁路智能大脑，提供资源、数据、算法、服务、辅助决策、分类展示等综合能力。\\n（2）以“两网”建设为基础。数据通信网，进行公司数据承载网增速、扩容，做好公司全线4G网络覆盖，实施重点区域5G网络覆盖，建成高速、安全的网络传输大动脉。全息感知网，推广实施供电6C、车辆5T、机车6A、环境监测、雨量监测、无人机巡检等监测检测系统，建设以站场全景视频为重点的综合视频监控系统，形成基于物联网技术的人、物、车、时空状态数据全息感知体系。\\n（3）以“三个平台”建设为支撑。从基础应用体系标准、先进、共享考虑，统筹建设地理信息服务、北斗高精服务、融合通信服务等三大服务平台，提供基于GIS信息、位置信息、视频信息、多媒体信息的标准化数据采集与融合服务，为智能化应用提供支撑。\\n（4）以“五大智能”建设为方向。从公司实际情况出发，在智能运营、智能装备、智能运维、智能安全、智能综合管理等五个方面积极探索，通过标准建立、项目实施，逐步实现决策智慧化、运营数字化、管理协同化、设备智能化、低碳清洁化。\\n（五）友道负责部分\\n友道主要负责“一云 两网 三个平台 五大智能”中“智能运营” 子模块卧厂车站智能管理系统虚拟实体中GIS层及模型建设部分。\\n智能运营基于“云物移大智、声光电感知”等先进技术，突破运输计划编制、车站作业等关键业务智能化瓶颈，连通运输计划编制、调度指挥执行各信息系统，联通各部门与单位，提升运产计划编制与执行的智能化水平，推进应用重载铁路运输计划一体化编制、智能调度及智能车站等系统，构建面向运输生产全过程的运输组织与调度指挥体系。\\n（1）智能运输\\n部署应用重载铁路智能运输组织方案编制系统，构建将人工智能、大数据、云计算和大规模超算等新兴技术同控制反馈等优化理论融合的智能运输组织新模式，形成多专业工种相互协同，包括线网基础数据管理系统、货流分析系统、通过能力分析与瓶颈识别系统、运输计划编制和调整系统、列车开行方案和运行图一体化智能编制系统等。在集团铁路调度信息系统深度应用的基础上，进一步研究应用铁路运输综合智能调度系统，实现调度数据共享交互、数据价值挖掘以及数据的综合利用，开展调度计划云端智能编制、智能调整以及计划质量评估，提升调度工作智能化水平。\\n（2）智能车站\\n以提升车站运营效率、降低运营成本、提高作业安全性、降低劳动强度为目标，依托数字化、传感、高精定位、网络等技术，研究 BIM、GIS、传感、定位、物联网、人工智能等先进技术在铁路车站的综合应用，建设重载铁路车站智能化管理系统，结合卧厂站2万吨改造项目，实现车站智能感知、智能决策、智能交互与智能控制，最终达到车站运营与管理的智能化。\\n（3）智慧示范线\\n根据准池线运营环境、设备状况等便利条件，先期将准池线打造为智慧铁路示范线，以业务管理全面智能化为目标，将车务、机务、工务、电务、供电等专业智慧成果融合应用到准池线，构建具备CTC系统中心化管理、咽喉智能列检、站场动态物管理、智能调车、道岔监测、车站行车设备动态分析、行车设备综合健康管理、车站运营数据分析及可视化等功能的智慧铁路示范线，逐步实现车站管理智能化和少人化。\\n三、2022年大兴区首批区级科普基地\\n中国交通运输工程教育实践科普基地由友道科技有限公司建立，总占地面积7800平米，展厅面积约3000平米。以轨道交通和通用航空为支撑，运用虚拟仿真技术，以智慧地铁，智慧机场等场景，发展一系列交通运输数字化教育基地建设，馆内依据虚实结合，展开最新的交通运输工程知识课程，动手实操的地铁，高铁，737飞机驾驶模拟器、行车调度、地铁车辆关键技术，配合专业讲解与智能展示相结合，“线上+线下”相互补充的交通运输工程教育实践科普生态链体系，推动打造以轨道交通专业和通用航空专业为支撑引领作用的科普基地，服务公众科学素质提升。\\n四、友道科技与中车联合设计研发可移动地铁教学列车项目\\n可移动地铁教学列车在我国城市轨道交通标准B型车基础上发展而来，实现单车双端操作方式，在提高集成化程度的同时降低了总体成本，并可节约线路铺设资源。车辆在最大程度上还原真实地铁车辆的结构与原理，可独立在教学实验线路上运行。\\n五、国家级1+X证书制度试点工作职业技能评价组织\\n1+X证书是由教育部、国家发展改革委、财政部、市场监管总局联合印发的试点方案，其中“1”指学历证书，“X”指若干若干执业技能等级证书。友道联合行业龙头企业及多所院校共同起草开发的《轨道交通车辆机械维护职业技能等级标准》入围参与1+X证书制度的第四批职业教育培训评价组织及职业技能等级证书名单。\",\"status\":\"正在评级\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"否\",\"techcontIsStock\":\"是\",\"techcontIsStockPool\":\"是\",\"techcontPaperRatio\":\"0\",\"techcontPatentRatio\":\"4\",\"techdevAdvantage\":\"一、产品的综合技术优势\\n友道科技自成立以来，围绕着打造集教学、实训、培训、科研、竞赛、科普等功能于 一体的轨道交通专业综合性实训装备，为全国范围内的高校、行业企业单位解决实训教学 过程中高投入、高损耗、高风险及难实施、难观摩、难再现的 “三高三难”痛点和难点；服务新时代复合型技术技能人才培 养、服务“双师型”教师队伍建设、服务企业员工和各类人员就 业培训、服务区域经济转型升级和乡村振兴、服务行业企业技术 创新、服务“一带一路”沿线国家和地区发展；发挥示范、引 领、辐射、带动作用,为推动交通运输领域现代职业教育高质量发展增效赋能。\\n（一）丰富的行业资源和硬件研发能力\\n友道在硬件开发上与中国通号、中国中车、北京交通大学、北京理工大学等单位密切合作，并与北京交通大学共同成立北京交通大学产业教育研究院，推出了若干行业应用创新成果。拥有自主知识产权近200项，专利40余项。\\n（二）快速开发虚拟系统软件，服务流程标准化\\n友道已经形成交通运输类的虚拟仿真模型库，平台架构模板库，UI库、互动式操作、动画库等。标准化了虚拟系统设计技术方式:切换视角、情景化、弹幕、 拟物手法、数据传输可视化、慢动作、电竞化等有效解决项目实工及实训过程中的难实施、难观摩、难再现痛点和难点。\\n（三）数字化互动实训平台的设计运营能力\\n友道具有丰富的实训平台设计交互能力。例如，已开发的虚实互动数字化技能实训考核系统，支持与现场设备实时交互，实时捕捉学生学习动态数据，准确诊断学习弱点。同时支持题型全，组卷快，智能排考，断电续考，自动判分、多维度竞赛分析等功能自主开发的项目式教学过程管理平台，能够把老师的教学整个过程设计思路记录下来。课程设 计可以不断打磨迭代，逐渐完善，实现课程实施的标准化。智联友道集团《友道在线课程资源平台》已通过教育部专家组的审核和筛选，并在教育部项目平台公布。\\n（四）产品结构升级，安全、节能、快速、高效\\n现实中轨道交通类设备（整车车辆、机车、接触网、受电弓、轨道等）种类繁多、构造复杂、占地面积较大、价格昂贵、难维修维护，因此人才培养对实训场地和实训装备都有更高的要求。友道将产品结构升级创新，以真实的城轨铁路设备为核心，搭配虚拟仿真设备和软件，形成实景化的综合实训区。保证各个岗位独立实训功能基础上，实现各岗位之间的配合实训。例如自主研发的运营管理综合实训演练平台：主要由值班站长操作台、综控员操作台、票务员操作台、安全员操作台组成 ，将运营管理过程可能出现的虚拟紧急情况通过四个电子平台真实呈现，随着平台界面的场景变化与其他各岗位实现联动，满足突发预案演练，还可更深入了解轨道交通运营管理各岗位职责及工作流程。友道在产品结构设计研发过程中，一方面降低不必要的硬件成本，同时也保证高度还原装备内部运行逻辑。通过对产品结构和性能的创新升级，解决了轨道交通实训装备造价高、占地大、难复现的问题，实现模拟真实、造价低、免维护、降低操作安全风险、不受时间和空间限制、可拆解复杂甚至不可见机械的内部构造，提示重要教学要点及常见故障处理，无限的增加了教育资源。具有安全、节能、快速、高效的特点。\\n二、上述优势的支持证明材料\\n（一）国家部委主办国际国内赛事技术支持单位\\n友道自成立以来，已成功支持了数百场由交通运输部、人社部、教育部、国家铁路总公司等国家级部委，以及中国地方铁路协会、中国交通教育研究会、中国工业经济联合会、中国城市轨道交通协会、教育部行职委、教指委主办或联合主办的国际、国内轨道交通领域职业技能竞赛，友道作为赛事的合作单位和技术支持，为赛事提供运营设备和技术指导等服务，至今零失误零投诉。\\n1、\\t全国职业院校技能大赛轨道交通信号控制系统设计与应用赛项（高职组）、通信与控制系统集成与维护赛项（中职组），本赛项由教育部、赛项承办地的省级人民政府、科学技术部、工业和信息化部、国家民族事务委员会、民政部、财政部、人力资源和社会保障部、国土资源部、环境保护部、住房和城乡建设部、交通运输部、水利部、农业部、商务部、等部门主办。友道获得2018年全国职业院校技能大赛突出贡献奖。\\n2、\\t2021年全国行业职业技能大赛城市轨道交通列车司机赛项（学生组），本赛项由交通运输部、人力资源和社会保障部、中华全国总工会、共青团中央联合主办。友道获得2021年全国行业职业技能竞赛-第十三届全国交通运输行业职业技能大赛特殊贡献奖。\\n3、\\t2022 年一带一路暨金砖国家技能发展与技术创新大赛城市轨道交通运营设计与应急处理赛项，本赛项由金砖国家工商理事会 、一带一路暨金砖国家技能发展国际联盟、中国科协一带一路暨金砖国家技能发展与技术创新培训中心、中国交通教育研究会联合主办。友道获得2022一带一路暨金砖国家技能发展与技术创新大赛突出贡献奖。\\n4、\\t2022年金砖国家职业技能大赛铁路信号设备维护赛项，本赛项由教育部、人社部、金砖国家工商理事会、厦门市人民政府联合主办。\\n5、\\t2021年全国行业职业技能竞赛—全国工业经济应用创新职业技能竞赛人工智能训练师赛项，本赛项由人社部、中国工业经济联合会联合主办。\\n6、\\t全国轨道交通安全应急职业技能竞赛“城市轨道交通线路工” 赛项（职工组），本赛项由人社部、中国地方铁路协会、中国应急管理学会联合主办。\\n7、\\t“友道杯”交通运输行业城市轨道交通学生组技能竞赛城市轨道交通车辆技术赛项、城市轨道交通服务员赛项，由交通运输部职业资格中心主办。\\n8、\\t“友道杯”全国交通运输职业院校城市轨道交通行车调度员技能大赛，由中国通信工业协会轨道交通产教联盟北京交通大学轨道交通产业教育研究院主办。\\n二、产品销售情况\\n友道目前采用智能化技术设计和研发了轨道交通通信信号、运营管理、车辆技术相关领域产品达80项，其中近30款产品在实现较好的经济效益，并在行业及院校1000多家客户得到广泛应用。2020年审计（天职国际）收入7103万，利润2455万；2021年审计（天职国际）收入10169万，利润3526万；2022年收入近1亿，利润3000万。\\n三、第三方权威测评\\n友道成立以来获得众多荣誉资质，目前是国家高新、国家双软、专精特新、瞪羚企业、北京市3A、中关村高新等；公司拥有近50项专利，其中发明专利15项，其他自主知识产权100余项；ISO环境管理体系认证、ISO健康安全管理体系认证、ISO质量管理体系认证；CMMI3认证。\\n另外公司主导的核心产品，如动车组模拟驾驶竞赛管理系统、动车组模拟驾驶考核与实训仿真系统、轨道交通信号控制系统实训平台、城市轨道交通列车模拟驾驶系统等，均委托中国通信工业协会、机械工业仪器仪表综合技术经济研究所、测量控制设备及系统实验室、机械工业测量控制设备及网络质量检测中心完成专业检测，出具了第三方测试报告。\",\"techdevFormChip\":\"集成了芯片的硬件产品,芯片 or 传感器\",\"techdevFormHard\":\"集成软硬件的系统,其他,版卡\",\"techdevFormSoft\":\"其他,软件平台包含前中后台,系统集成,算法模型\",\"techdevMaturity\":\"实际产品已完成销售并部署到用户端\",\"techinvLeader1Achievement\":\"刘延涛自2016年3月作为友道科技有限公司创始人以及重要核心技术负责人，负责公司的产品定制研发，自2016年 成立以来带领团队研发了40余种新型技术平台及教学实用系统，实现核心产品的自主知识产权近150项，其中专利40余项(发明专利15项)满足新一代教学系统的使用，所研发的产品累计为企业创收近3亿。其中2021年实现营收10025.5万，利润3806.1万，2022年预计实现营收1亿元左右。主要成果列举如下:\\n一、 成功申报并顺利实施国家级1+x证书标准\\n2020年带领团队获得了教育部1+X证书制度试点“轨道交通车辆机械维护\\\"项目的评价组织机构。并在2021年，2022年为2000人次，进行了培训和考核发证。得到了教育部相关部门的工作肯定。\\n二、作为核心人员成功支持国家级-类、二类大赛\\n所研发的产品成功支持了教育部、科技部、发改委等35个部委联合主办的全国职业院校技能大赛“轨道交通信号控制系统设计与应用\\\"通信与控制系统集成与维护”两项目。促使城市轨道交通相关专业建立了第一个国家级赛项。并在2018年被评为2018年全国职业院校技能大赛突出贡献奖单位，奠定了公司在职业教育领域的地位。2022年成功支持了人社部和交通运输部主办的国家一类赛事城轨列车司机，同事带领团队研发的轨道交通信号控制系统实训平台、轨道交通运营管理综合实训演练平台、可视化智能控制系统实训平台等产品，先后支持全国职业院校技能大赛、行业特色赛的国赛及省、 市赛数百余次，至今保持零故障的记录，服务对象覆盖包括中职院校高职院校等国内多所院校。\\n三、主持部分重大项目\\n2016年至今，带领团队完成计算机联锁(实物道岔)设备实训系统、进站信号机点灯综合实训平台、列车自动控制综合实训平台、城轨车站通风与空调工程实训系统平台、城轨车站低压配电及照明系统平台、城轨车站给排水实训系统平台、城市轨道交通运营管理V|R系统-站务员平台(屏蔽门)、 轨道交通运营管理屏蔽i门桌面实训平台、城市轨道交通屏蔽i ]虚拟拆分实训系统等40多款教学平台。并带来了可观的营收。\\n1、2016年创新研发物联网实验模块程序快速还原方法，并获得发明专利。此技术应用到北京智联友道科技有限公司的大部分产品中，使产品在市场上更具有竞争力。\\n2、2016年成功研发轨道交通高铁ZPW2000轨道电路、列控系统等多款产品。\\n3、2018年成功研发计算机联锁(实物道岔)系统实训平台。\\n4、2019年初， 成功研发轨道交通运营管理综合演练实训平台。\\n5、 2020年成功研发地铁列车模拟驾驶系统。并成功入选人社部、交通运输部等主办的国家- 类赛事指定竞赛平台。\\n6、2021-2022年成功研发城市轨道线路工实训平台，铁路信号设备维护实训技术平台等。并成功入选国家级二类赛事和金砖国家职业技能竞赛赛事的指定竞赛平台。\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Experience\":\"2004年7月-2006年3月，青岛交运第一-汽车运输有限公司，研发主管\\n2009年12月-2012年3月，青岛吉纳电机有限公司，研发经理\\n2014年6月-2016年3月，北京中软国际教育科技有限公司，技术总监\\n2016年4月-至今，友道科技有限公司，高级副总裁\",\"techinvLeader1Graduate\":\"北京理工大学\",\"techinvLeader1IsOther\":\"中国通信工业协会轨道交通产教联盟项目评审一等奖\",\"techinvLeader1Name\":\"刘延涛\",\"techinvLeader2Achievement\":\" 自2016年4月作为核心技术负责人，负责公司的产品设计研发，带领团队研发“通信与控制系统（高铁）集成与维护实训平台”，该平台作为2017、2018年、2019年、2020年、2021年全国职业院校技能大赛中职组赛项技术平台；“轨道交通信号控制系统设计与应用平台软件”，该平台作为2018年、2019年的全国职业院校技能大赛高职组赛项技术平台；教育部授予公司全国职业院校技能大赛突出贡献奖。\\n设计和研发了轨道交通信号、运营管理、车辆技术相关领域产品达80项，专利3项、软件著作权近30余项、参与编写轨道交通车辆机械维护、城市轨道交通车辆构造、城市轨道交通信号5门教材。满足新一代教学系统的使用，所研发的产品累计为企业创收近3亿。 \\n1、实用新型专利：\\n一种火灾自动报警模拟系统；\\n一种与轨道交通行业相关的教学用继电器组合柜；\\n一种与物联网通信与控制相关的教学用信息采集控制平台；\\n2、教材：\\n副主编：《通信与控制系统典型应用》、《通信与控制系统集成与维护》\\n参编：《轨道交通车辆机械维护》、《城市轨道交通车辆构造》、《城市轨道交通信号》\\n\",\"techinvLeader2Education\":\"本科\",\"techinvLeader2Experience\":\"1. 2013年7月-2016年3月；北京中软国际教育科技有限公司；互联网、轨道交通行业软件系统设计；研发经理。\\n2. 2016年4月-2018年2月；北京智联友道科技有限公司；互联网、轨道交通行业软件系统设计；研发经理。\\n3.2018年3月-2021年2月；北京智联友道科技有限公司；轨道交通行业软件硬件设计；产品研发部副总经理。\\n4. 2021年3月 - 2022年2月；\\t北京智联友道科技有限公司；轨道交通行业软件硬件设计；轨道交通事业部副总经理。\\n5. 2022年3月 - 至今；友道科技有限公司；轨道交通行业软件硬件设计；轨道交通产品中心总经理。\\n\",\"techinvLeader2Graduate\":\"长春工业大学\",\"techinvLeader2IsOther\":\"2022年大兴区优秀青年人才\",\"techinvLeader2Name\":\"汪利新\",\"techinvMoney2019\":\"1567\",\"techinvMoney2020\":\"572\",\"techinvMoney2021\":\"999\",\"techinvTechAllAmount\":149,\"techinvTechDoctorAmount\":1,\"techinvTechMasterAmount\":9,\"techinvTechResearcherAmount\":57,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"中国成人教育协会副会长单位全国轨道交通产教联盟秘书长单位\\n中国城市轨道交通协会理事单位证书\\n中国通信工业协会轨道交通产教联盟秘书处单位\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"2017年度中国互联网+IT教育实践教学最具影响力企业奖\\n2017年度中国互联网+创新创业最佳解决方案奖\\n2018年全国职业技能大赛突出贡献奖\\n2019年全国职业技能大赛突出贡献奖\\n\",\"techprodAicomOtherPro\":\"2017年广东省职业技术教育学会会员单位\\n2018年云南省教育厅校企合作师范企业\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"全国职业院校技能大赛突出贡献奖、产学合作协同育人项目合作伙伴奖、中国互联网+IT教育实践教学最具影响力企业奖\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":22,\"techprodPatentEffectiveAmount\":6,\"techprodPatentInfluence\":\"0.67\",\"updateBy\":\"qiye_admin\",\"updateTime\":1678343451000}"
    }
  }, {
    "id": "lihui",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166139637762",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "lihui",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"2\",\"basicContractPhone\":\"3\",\"basicEnglishTitle\":\"1\",\"basicInfo\":\"4\",\"basicTitle\":\"lihui\",\"compreMarket\":\"其他\",\"compreQuatification\":\"66\",\"compreQulification\":\"国家级专精特新小巨人,创新型中小企业\",\"compreQulificationOther\":\"65\",\"compreStandardIndustry\":\"63\",\"compreStandardInternation\":\"61\",\"compreStandardLocal\":\"64\",\"compreStandardNation\":\"62\",\"comprehensiveAuthority\":\"60\",\"createBy\":\"lihui\",\"createTime\":1677657002000,\"govsuppCarryNation\":\"67\",\"govsuppCarryOffice\":\"69\",\"govsuppCarryProvin\":\"68\",\"id\":\"1630837786583564290\",\"investFinancing\":\"24\",\"investInstitution\":\"70\",\"investRound\":\"天使轮\",\"marksaleFamouse\":\"15\",\"marksaleMain2019\":\"19\",\"marksaleMain2020\":\"17\",\"marksaleMain2021\":\"18\",\"marksaleRevenue2019\":\"22\",\"marksaleRevenue2020\":\"20\",\"marksaleRevenue2021\":\"21\",\"marksaleService\":\"16\",\"scholarCooperation\":\"23\",\"status\":\"评级完成\",\"techcontDistribution\":\"59\",\"techcontIsStable\":\"否\",\"techcontIsStock\":\"否\",\"techcontIsStockPool\":\"是\",\"techcontPaperRatio\":\"58\",\"techcontPatentRatio\":\"57\",\"techdevAdvantage\":\"14\",\"techdevFormChip\":\"芯片 or 传感器\",\"techdevFormHard\":\"集成软硬件的系统\",\"techdevFormSoft\":\"算法模型\",\"techdevMaturity\":\"已完成原始技术原型且尚未形成产品,实际产品已完成销售并部署到用户端\",\"techinvLeader1Achievement\":\"29\",\"techinvLeader1Education\":\"25\",\"techinvLeader1Experience\":\"27\",\"techinvLeader1Graduate\":\"26\",\"techinvLeader1Is\":\"两院院士\",\"techinvLeader1IsOther\":\"28\",\"techinvLeader1Name\":\"8\",\"techinvLeader2Achievement\":\"34\",\"techinvLeader2Education\":\"30\",\"techinvLeader2Experience\":\"32\",\"techinvLeader2Graduate\":\"31\",\"techinvLeader2Is\":\"长江学者\",\"techinvLeader2IsOther\":\"33\",\"techinvLeader2Name\":\"9\",\"techinvMoney2019\":\"7\",\"techinvMoney2020\":\"5\",\"techinvMoney2021\":\"6\",\"techinvTechAllAmount\":11,\"techinvTechDoctorAmount\":12,\"techinvTechMasterAmount\":13,\"techinvTechResearcherAmount\":10,\"techprodAicomCcf\":\"51\",\"techprodAicomCcfBest\":\"52\",\"techprodAicomNormal\":\"50\",\"techprodAicomOtherAsso\":\"56\",\"techprodAicomOtherCity\":\"55\",\"techprodAicomOtherNation\":\"53\",\"techprodAicomOtherPro\":\"54\",\"techprodAicomTop\":\"49\",\"techprodAwardNation\":\"40\",\"techprodAwardPatent\":\"41\",\"techprodAwardProadv\":\"44\",\"techprodAwardProv\":\"42\",\"techprodAwardWuwenjun\":\"45\",\"techprodAwardXuehui\":\"43\",\"techprodBusiness\":\"46\",\"techprodBusinessOther\":\"48\",\"techprodBusinessProvince\":\"47\",\"techprodPaperAmount\":37,\"techprodPaperQualityAmount\":\"38\",\"techprodPatentAmount\":35,\"techprodPatentEffectiveAmount\":36,\"techprodPatentInfluence\":\"39\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680507852000}"
    }
  }, {
    "id": "北京至臻云智能科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166139637763",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京至臻云智能科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"王开向\",\"basicContractPhone\":\"15505327933\",\"basicEnglishTitle\":\"Beijing Zhizhenyun Intelligent Technology Co., Ltd.\",\"basicInfo\":\"        北京至臻云智能科技有限公司（以下简称“至臻云”）秉承“至臻匠心·智领未来”的企业理念，是智慧能源领域国内领先的数智化产品和服务提供商。\\n        公司总部位于北京，旗下拥有两家全资子公司：北京至臻云企业管理咨询有限公司和丰千数化科技有限责任公司；在上海、广东、天津、山东、浙江等地设有10家分公司，服务能力辐射全国，为客户提供优质的本地化服务。\\n        至臻云以自主研发的数字员工（RPA），数据处理(DP),自然语言处理（NLP），知识图谱（KG）,图文识别（OCR）五大核心技术引擎为抓手，打造至臻云AI交互平台，将平台价值落地公司五大业务板块，快速打通多领域多行业各个垂直场景的应用，通过领先的数字化和智能化应用，赋能企业数智力，构筑企业业务+数据+AI的数智化生态圈。\\n至臻云先后获得了国家高新技术企业、北京市“专精特新”中小企业、北京市软件企业认证、中关村高新技术企业、北京软件和信息服务业协会理事单位、中国内部审计协会会员单位、ISO管理体系、CMMI3等多项殊荣。“数字化审计管理系统”和“自然语言应用系统”获得北京市新技术新产品（服务）证书和软件产品认证，并拥有60余项软著及知识产权。在相关领域取得众多领先的创新研发成果。\\n        至臻云现有员工400+人，技术研发团队聚集百度、阿里、苹果、TD等多家公司在大数据、人工智能、云计算等技术领域的核心人才，团队在数字化工具及AI解决方案等领域深耕力拓，匠心打造。通过自主研发的五大核心技术，打造领先的数字化和智能化TOB级企业产品应用，赋能企业数智力，帮助客户企业构筑“业务+数据+AI”的数智化生态圈，助力数字中国建设。\\n在数字化审计领域，公司深耕审计专业二十余年，打造了“1个审计数智中台+4个审计服务中心”的全国领先的数字化审计审计产品体系，包括审计管理系统、工程审计系统、整改管理系统、离线作业系统、数字化审计平台、审计移动作业平台、审计单兵作业装备、审计数字员工、审计技术中台等核心系统，覆盖企业内部审计全链条业务；产品体系均可插拔式部署、模块化应用，根据客户需求来选择实施，充分满足不同客户的数字化应用需求。其中，审计管理系统、数字化审计数据分析平台与中创中间件、南大通用生态合作伙伴完成兼容互认证，国产数据库、中间件、CPU及操作系统的兼容测评完全适配国产设备以及系统平台，可全面满足国产化安全可控的要求；在中国信通院“企业内部审计数字化产品技术能力测评”中荣获产品技术能力“先进级”鉴定。\\n        公司成立了解决方案中心，核心团队主要来自全球四大，拥有着多年咨询及售前解决方案经验，在前端为客户提供前期规划咨询、解决方案设计等服务，服务支撑公司各个事业部、业务单元。与公司AI研究院一起，构建起“1+N+1”的业务运作模式，为客户提供咨询规划、解决方案、产品实施落地、AI技术支撑的全业务链优质、高效无缝的数字化服务。\\n公司深耕电力信息化行业多年，对电力行业生产运营特点、当前阶段的数字化建设需求有深刻理解，多年电力信息化项目开发和实施，锻炼了一批专家级的项目开发团队和实施团队，兼具行业经验与技术水平，积累了一批稳定的行业大客户，形成了较为显著的行业经验优势。\\n公司经营团队稳定且行业经验丰富。公司管理团队现有50余人，在长达20余年信息化建设过程中，公司管理团队积累了丰富的行业知识，对电力行业深度熟悉。核心团队成员中，有若干人为电力专业出身，具有深厚的电力教育背景，在电力行业深耕多年，对电力系统有深刻的理解和认识。依托深厚的专业背景、长期的知识积累及近20年的相关行业从业经验，为团队全面承担大型项目的策划、设计、开发、实施及推广工作提供了强有力的保障。\\n        公司核心团队大部分有着电力信息化十五年以上的建设经验，对电力行业相关企业的技术体系、项目体系及管理规范非常熟悉，参与和承担电力客户多个大型信息系统的建设，在数字化审计、法治平台、省管产业单位工程管理、新型负荷管理平台、财务共享平台等领域属于国家电网的核心供应商。在长期参与国家电网项目建设过程中，公司掌握了国家电网的技术体系和规范，为公司持续地承接国家电网信息化项目奠定了基础。目前，国家电网、南方电网等电力大客户处于数字化转型变革时期，需要对电力信息化建设历程、现状、业务特点有清晰的了解，才能更好地在当前时期下做数字化转型的支撑，加上电力行业信息化对技术规范、安全规范有着自身的要求，信息化项目呈现核心技术门槛高、业务内容繁杂、客户对数字化理解深的。因此，在选择合格供应商或招标时，会对准入供应商的业绩、行业经验、对电力行业熟悉程度等条件设置较高的审核标准。如果供应商没有相关的行业经验，缺乏对技术体系和规范的了解，国家电网不会轻易与其合作。通过长期电力行业服务的经验，公司在数字化审计、工程管理、新型电力系统等方面形成了公司核心的产品和解决方案体系。\",\"basicTitle\":\"北京至臻云智能科技有限公司\",\"compreMarket\":\"其他\",\"compreQuatification\":\"2022北京软件核心竞争力企业（创新型）、获中国投标企业信用AAA认证证书、企业信用等级AAA认证证书、北京软件和信息服务业协会理事单位\",\"compreQulification\":\"省市级专精特新,国高新\",\"compreQulificationOther\":\"中关村高新技术企业（园区级）\",\"compreStandardIndustry\":\"0\",\"compreStandardInternation\":\"0\",\"compreStandardLocal\":\"0\",\"compreStandardNation\":\"0\",\"comprehensiveAuthority\":\"CNAS：1、中国职业健康安全管理体系认证-NOA2213562；2、环境管理体系认证—NOA2213561；3、信息安全管理体系认证；\\t4、信息技术服务管理体系认证；\\t5、质量管理体系认证（ISO9001）\\nCNCA：企业知识产权管理体系认证\\n其他：1、软件产品证书5项——1）至臻云数字化审计管理系统；2）至臻云自然语言理解应用系统；3）北京至臻云智能科技有限公司；4）至臻云工程全链条管理系统；5）至臻云智慧后勤系统【简称：智慧后勤系统】。2、CMMI3级认证证书\",\"createBy\":\"91110108MA01LCT77Y\",\"createTime\":1677665193000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1630872139950784514\",\"investFinancing\":\"3000\",\"investInstitution\":\"青岛星鼎科技合伙企业(有限合伙)\\n青岛玛尔斯投资中心(有限合伙)\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"国家电网有限公司、中国南方电网有限责任公司、国家石油天然气管网集团有限公司、中国建设科技集团股份有限公司、中国中铁股份有限公司、中国建筑股份有限公司、中国电力建设集团有限公司、中国铁道建筑集团有限公司、中国烟草总公司、中华人民共和国海关总署\",\"marksaleMain2019\":\"国家电网有限公司：主要数字化审计业务咨询、项目实施、系统运维的数智赋能服务\\n中国南方电网有限责任公司：主要数字化审计业务咨询、项目实施、系统运维的数智赋能服务\\n中国铁道建筑集团有限公司：主要数字化审计业务咨询、项目实施、系统运维的数智赋能服务\\n中国电力建设集团有限公司：主要数字化审计业务咨询、项目实施、系统运维的数智赋能服务\\n中华人民共和国海关总署：主要数字化审计业务咨询、项目实施、系统运维的数智赋能服务\",\"marksaleMain2020\":\"国家电网有限公司：主要数字化审计业务咨询、项目实施、系统运维的系列生态服务\\n中国南方电网有限责任公司：主要数字化审计业务咨询、项目实施、系统运维的系列生态服务\\n中国建设科技集团股份：主要数字化审计业务咨询、项目实施、系统运维的系列生态服务\\n中国建筑股份有限公司：主要数字化审计业务咨询、项目实施、系统运维的系列生态服务\\n中华人民共和国海关总署：主要数字化审计业务咨询、项目实施、系统运维的系列生态服务\\n\",\"marksaleMain2021\":\"国家电网有限公司：主要数字化审计业务咨询、项目实施、系统运维的深化提升服务\\n国家石油天然气管网集团有限公司：主要数字化审计业务咨询、项目实施、系统运维的深化提升服务\\n中国南方电网有限责任公司：主要数字化审计业务咨询、项目实施、系统运维的深化提升服务\\n中国建筑股份有限公司：主要数字化审计业务咨询、项目实施、系统运维的深化提升服务\\n中华人民共和国海关总署：主要数字化审计业务咨询、项目实施、系统运维的深化提升服务\",\"marksaleRevenue2019\":\"8289.344531\",\"marksaleRevenue2020\":\"378.842323\",\"marksaleRevenue2021\":\"1644.2449\",\"marksaleService\":\"2022年度总订单数：100单，总销售额：8289.3445万元。\",\"scholarCooperation\":\"无\",\"status\":\"正在评级\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"否\",\"techcontIsStock\":\"是\",\"techcontIsStockPool\":\"是\",\"techcontPaperRatio\":\"0\",\"techcontPatentRatio\":\"4\",\"techdevAdvantage\":\"至臻云新一代数智化审计平台所用服务端技术架构高度兼容国产化数据库及中间件，同时在X86或ARM芯片架构的国产操作系统上可以实现兼容部署安装。该平台依托公司自研的NLP、数字员工、图文识别、知识图谱、数据处理等核心技术，构建了“1个审计数智中台+4个审计服务中心”的AI审计产品体系，包括审计管理系统、工程审计系统、整改管理系统、离线作业系统、数字化审计平台、审计移动作业平台、审计单兵作业装备、审计数字员工、审计技术中台等核心系统，支撑能源、金融、政府、制造业等领域的各类型审计应用，覆盖企业内部审计全链条业务；产品体系均可插拔式部署、模块化应用，根据客户需求来选择实施，充分满足不同客户的数字化应用需求。\\n至臻云的软件产品经过了中国信息通信研究院、南大通用、麒麟软件、中创中间件的测试认证。其中至臻云“数字化审计平台”、“数字化审计管理系统”两款产品鉴定为企业内部审计数字化产品技术能力“先进级”，通过通过中国信通院\\\"企业内部审计数字化产品技术能力测评\\\"。\",\"techdevFormHard\":\"\",\"techdevFormSoft\":\"算法模型,软件平台包含前中后台,中台,系统集成\",\"techdevMaturity\":\"实际产品已完成销售并部署到用户端\",\"techinvLeader1Achievement\":\"李天星女士是至臻云智能科技有限公司的副总经理，曾在四大会计师事务所任职合伙人，拥有超过18年的为大型跨国企业、央企、大型民营企业提供公司治理、对标管理、风险与内控管理、审计管理等服务的经验。\\n熟悉中美及其他主要资本市场风险管理与内部控制合规要求，曾领导了多项风险管理咨询、内控、合规及内部审计项目；\\n\\n专精于细分领域对标，提炼管理案例，设计对标管理实践可行性分析模型，推动管理实践在企业落地运行。参与编写《日本电力企业精益管理发展与启示》、《中国企业海外资产运营管理实践与探索》，于2019年及2021年出版发行。\\n\\n具有丰富的中国企业投后管理咨询经验，曾作为项目管理负责人协助众多大型集团公司开展投后管理等工作。\\n李女士曾为众多大型集团公司开发集团风险与内部审计管理系统，推进数字化工具应用，包括全局数据中心审计应用、数字化内部审计等。\\n\\n李女士曾在某香港上市高科技清洁能源企业任职战略部门负责人，负责主导亚太市场团队组建，创新事业部战略规划以及海外企业并购等工作，其中一项并购曾列为MIT当年最聪明的50笔并购。\\n\\n注册内部审计师 (CIA)\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Experience\":\"安永（中国）企业咨询有限公司\",\"techinvLeader1Graduate\":\"英国伦敦大学\",\"techinvLeader1Is\":\"\",\"techinvLeader1IsOther\":\"注册内部审计师 (CIA)\",\"techinvLeader1Name\":\"李天星\",\"techinvLeader2Achievement\":\"时间：2018.11-2019.5\\n项目名称：龙湖集团经营分析\\n责任描述：传统房企数字化转型项目，每月各航道使用线下 PPT 汇报给集团领导层，多部门汇报，故事线混乱，指标定义不统一，导致汇报指标数据的不一致。项目统一使用数据湖，梳理经分会使用的指标，统一指标计算逻辑，实现经分会 线上汇报，设计报表系统架构，集成数据填报系统、微软SharePoint平台，根据部门+角色设置功能模块及数据权限，实现人人看板\\n\\n时间：2012.4-2012.10\\n项目名称：亚马逊(中国)供应链仓储数据标准化项目\\n责任描述：库房原有报表系统的准确性不高，制定中国区货架统一测量标准和规范，各库房按照新的测量口径重新采集货位数据，设计并研发了库房可视化系统及库容指标报表系统，实现网络内部资源调配，提升库房整体的管理效率\\n\\n时间：2005.7-2006.1\\n项目名称：中国建设银行总行OCRM知识库项目\\n责任描述：支持多关键字的全文检索，用Java开发了一套对主数据自动维护系统，用户按命名规范在数据库里建好表, 系统可自动生成对该表的添加，修改、删除，支持所有字段的组合查询界面，无需额外开发，可配置多级关联菜单。所有对主数据的更改都有双人复核机制，支持批量复核，所有变更都有审计日志\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"2013.5-2016.9  北京搜狐新动力信息技术有限公司\\n2008.9-2010.8  塔塔信息技术（中国）股份有限公司\",\"techinvLeader2Graduate\":\"北京航空航天大学\",\"techinvLeader2Is\":\"\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"陈洁\",\"techinvMoney2019\":\"648.710625\",\"techinvMoney2020\":\"701.84911\",\"techinvMoney2021\":\"131.23195\",\"techinvTechAllAmount\":340,\"techinvTechDoctorAmount\":0,\"techinvTechMasterAmount\":9,\"techinvTechResearcherAmount\":304,\"techprodAicomCcf\":\"0\",\"techprodAicomCcfBest\":\"0\",\"techprodAicomNormal\":\"0\",\"techprodAicomOtherAsso\":\"0\",\"techprodAicomOtherCity\":\"参加中国信通院牵头组织的“2022年GOLF+IT新治理领导力论坛”并获评“企业内部审计数字化产品技术要求”先进级荣誉\",\"techprodAicomOtherNation\":\"0\",\"techprodAicomOtherPro\":\"0\",\"techprodAicomTop\":\"0\",\"techprodAwardNation\":\"0\",\"techprodAwardPatent\":\"0\",\"techprodAwardProadv\":\"0\",\"techprodAwardProv\":\"0\",\"techprodAwardWuwenjun\":\"0\",\"techprodAwardXuehui\":\"0\",\"techprodBusiness\":\"0\",\"techprodBusinessOther\":\"0\",\"techprodBusinessProvince\":\"0\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":10,\"techprodPatentEffectiveAmount\":0,\"techprodPatentInfluence\":\"0\",\"updateBy\":\"qiye_admin\",\"updateTime\":1678244334000}"
    }
  }, {
    "id": "北京外号信息技术有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166139637764",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京外号信息技术有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"谢志存\",\"basicContractPhone\":\"13621147340\",\"basicEnglishTitle\":\"Whyhow Tech\",\"basicTitle\":\"北京外号信息技术有限公司\",\"compreQuatification\":\"2020年，由中关村管委会授予“中关村金种子企业”\\n2020年，由北京市知识产权局授予“北京市知识产权试点单位”；\\n2021年，由北京市经信局授予“专精特新中小企业”；\\n2021年，由北京市科委授予“北京市新技术新产品”。\",\"compreQulification\":\"国高新,省市级专精特新,省高新\",\"compreQulificationOther\":\"北京市级企业科技研究开发机构，北京市市级企业技术中心\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745622000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"与中国公安大学合作开展的“社区立体化治安防控”项目，已通过公安部立项评审。\",\"id\":\"1643792397191675906\",\"investFinancing\":\"5000\",\"investInstitution\":\"中科创星\",\"investRound\":\"天使轮\",\"marksaleFamouse\":\"中国移动、九寨沟景区、人福制药、北京朝阳大悦城\",\"marksaleMain2020\":\"光时代科技\",\"marksaleMain2021\":\"客户A/北京移动/客户B/客户C\",\"marksaleRevenue2019\":\"0\",\"marksaleRevenue2020\":\"0\",\"marksaleRevenue2021\":\"397\",\"scholarCooperation\":\"北京大学 基于光场的场景交互\\n中国公安大学 社区立体治安防控\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"西北工业大学\",\"techinvLeader1IsOther\":\"西安市菁英创业人才\",\"techinvLeader1Name\":\"方俊\",\"techinvLeader2Achievement\":\"主持国家青年自然科学基金项目；拥有一作论文19篇，学术专著1本， PCT专利165项、国内专利216项（179项发明专利）。\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"阿姆斯特丹人工智能实验室博士后，专注AI及模式识别方向；曾任西北工业大学自动化学院副教授。\",\"techinvLeader2Graduate\":\"浙江大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"周硙\",\"techinvMoney2019\":\"1300.00\",\"techinvMoney2020\":\"800.00\",\"techinvMoney2021\":\"600.00\",\"techinvTechAllAmount\":33,\"techinvTechDoctorAmount\":2,\"techinvTechMasterAmount\":15,\"techinvTechResearcherAmount\":19,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"2020世界人工智能创新大赛产业场景赛冠军\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"2020数字中国创新大赛-数字政府赛道季军\",\"techprodBusinessOther\":\"第三届“绽放杯”5G应用征集大赛智慧商业专题赛  三等奖+专项奖\\n2020年北京文化创意大赛 全国一等奖\\n2020世界人工智能创新大赛产业场景赛冠军\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":245,\"techprodPatentEffectiveAmount\":75,\"techprodPatentInfluence\":\"3.1\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681107680000}"
    }
  }, {
    "id": "时趣互动（北京）科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166139637765",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "时趣互动（北京）科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"李秀艳\",\"basicContractPhone\":\"13910387735\",\"basicEnglishTitle\":\"Social Touch\",\"basicTitle\":\"时趣互动（北京）科技有限公司\",\"compreQuatification\":\"2019年，由北京市科学技术委员会授予《高新技术企业》；\\n2019年，由北京市科学技术委员会授予《北京市级企业科技研究开发机构》；\\n2020年，由北京市知识产权局授予《知识产权试点单位》；\\n2021年，由中关村科技园区管理委员会授予《中关村高新技术企业》；\\n2021年，由北京市经济和信息化局授予《北京市市级企业技术中心》；\\n2021年，由北京市经济和信息化局授予《北京市“专精特新”中小企业》。\",\"compreQulification\":\"国高新,省高新,省市级专精特新\",\"compreQulificationOther\":\"北京市级企业科技研究开发机构，北京市市级企业技术中心\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745622000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792397317505026\",\"investFinancing\":\"52249\",\"investInstitution\":\"君联资本，GGV纪源资本，TCL，联想控股，尚心投资，熠美等\",\"investRound\":\"D轮\",\"marksaleFamouse\":\"宝洁，京东，联想，英特尔，美赞臣，伊利，腾讯，科大讯飞等\",\"marksaleMain2020\":\"欧莱雅，宝洁，京东，美赞臣，上汽通用\",\"marksaleMain2021\":\"京东，宝洁，联想，英特尔，美赞成\",\"marksaleRevenue2019\":\"28507\",\"marksaleRevenue2020\":\"36347\",\"marksaleRevenue2021\":\"55137\",\"scholarCooperation\":\"北方工业大学文法学院，AI洞察引擎和数字营销协作平台\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"N\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"软件平台包含前中后台,算法模型,中台,前台,后台\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"北京交通大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"赵伟\",\"techinvLeader2Achievement\":\"1.\\t一种在移动应用中分享广告内容到社交网络的方法及系统\\n2.\\t一种基于移动应用的广告播放方法及系统\\n3.\\t一种基于Weex的移动应用内版本更新的方法、系统\\n4.\\t新关键词挖掘方法、装置及电子设备\\n5.\\t移动APP数据抓取方法、装置及系统\\n6.\\t品牌知识图谱构建方法、装置及终端\\n7.\\t营销热点趋势预测方法及装置\\n8.\\t长文本的舆情分类优化方法\\n9.\\t大数据量和高并发场景下提升GPU显卡计算效率的系统\\n10.\\t社交媒体内容的行业品牌分类判别系统\\n11.\\t一种美妆品牌图像中标志的识别方法及装置\\n12.\\t一种营销话题传播数据的处理方法及装置\\n13.\\t一种社交平台上传播数据的处理方法及装置\\n14.\\t一种自动化商机邀标方法、装置、电子设备及存储介质\\n15.\\t一种场景图像文本生成方法、装置、电子设备及存储介质\\n16.\\t文本内容分类方法、装置、电子设备及存储介质\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"2007.1-2011.4担任百度技术主管，参苓团队参与百度大客户广告、百度精准广告等商业产品和数据产品研发工作；2011.5-2015.6担任360/聚效广告技术总监，负责聚效广告（2014年被360收购）北京研发中心的组建和管理；2015.7-至今担任时趣CTO，负责时趣营销技术体系团队组建和管理工作，以及时趣洞察引擎和时趣TCN（Talent Cooperation Network ）等所有产品研发运营工作。\",\"techinvLeader2Graduate\":\"北京邮电大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"曹特磊\",\"techinvMoney2019\":\"1785\",\"techinvMoney2020\":\"3041\",\"techinvMoney2021\":\"3249\",\"techinvTechAllAmount\":178,\"techinvTechDoctorAmount\":0,\"techinvTechMasterAmount\":9,\"techinvTechResearcherAmount\":36,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":24,\"techprodPatentEffectiveAmount\":6,\"techprodPatentInfluence\":\"5.83\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108559000}"
    }
  }, {
    "id": "北京未末卓然科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166139637766",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京未末卓然科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicTitle\":\"北京未末卓然科技有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"无\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"2022年作为参编单位，参与中国低速无人驾驶（LSAD）产业联盟主导的《低速无人车移动底盘通用技术条件》团体标准项目内容的讨论及制定；\\n2022年作为参编单位，参与上海电器科学研究所负责起草、中国电器工业协会发布的《智能化无人载物设备通用技术条件》团体标准的制定，预计最快在2022年内正式发布实施；\\n2022年作为参编单位，参与威凯检测技术有限公司起草、中国消费品质量安全促进会发布的《国际健康驿站产品 消杀机器人》团体标准的制定，预计2023年正式发布实施\\n2022年作为参编单位，参与威凯检测技术有限公司起草、中国消费品质量安全促进会发布的《国际健康驿站产品 送餐服务机器人》团体标准的制定，预计2023年正式发布实施；\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"Technical Report for Functional Safety, 认证机构 ：SGS, 证书编号 SHES210100037901；\\nTechnical Report for Functional Safety, 认证机构 ：SGS, 证书编号 SHFS210100000301；\\nTechnical Report for Functional Safety, 认证机构 ：SGS, 证书编号 SHFS210100000372；\\nTechnical Report for Functional Safety, 认证机构 ：SGS, 证书编号 SHFS210100000301；\\nTechnical Report for Functional Safety, 认证机构 ：SGS, 证书编号 SHFS210100000372；\\nEssential Health and Safety requirements relating to the design and construction of machinery，SGS，证书编号 SHES201202527001\\nSafety of household and similar electrical appliances，SGS，SHES210100156001\\nSafety of household and similar electrical appliances，SGS，SHES210100156002\\nSafety of household and similar electrical appliances，SGS，SHES210100156401\\nSafety of household and similar electrical appliances，SGS，SHES210100156402\\nVerification of MD compliance，SGS，SHES2012025270MDC\\nVerification of MD compliance，SGS，SHES2101001560HS\\nVerification of MD compliance，SGS，SHES210100156001HSC\\nVerification of MD compliance，SGS，SHES2101001564HS\\nVerification of MD compliance，SGS，SHES210100156401HSC\\nCE-EMC TEST REPORT （EN IEC 61000-6-4:2019，EN IEC 61000-6-2:2019），SGS，SHEM200800675001\\nCE-EMC TEST REPORT （EN IEC 61000-6-4:2019，EN IEC 61000-6-2:2019），SGS，SHEM210100053601\\nCE-EMC TEST REPORT （EN IEC 61000-6-4:2019，EN IEC 61000-6-2:2019），SGS，SHEM210100065101\\nCE-LVD（Photobiological safety of lamps and lamp systems），SGS，SHES210100187171\\nCE-LVD（Audio/video, information and communication technology equipment  ，Part 1: Safety requirements），SGS，KSES210300006601\\nCE-LVD（Audio/video, information and communication technology equipment  ，Part 1: Safety requirements），SGS，KSES210300006701\\nCE-LVD（Audio/video, information and communication technology equipment  ，Part 1: Safety requirements），SGS，KSES210300006501\\nCE-RED（Verification of compliance），SGS，SHEM200800674901CRC\\nCE-RED（Verification of compliance），SGS，SHEM210100059701CRC\\nCE-RED（Verification of compliance），SGS，SHEM210100065201CRC\\nCE-RED（Emission Part & Immunity Part），SGS，SHEM200800674901\\nCE-RED（Emission Part & Immunity Part），SGS，SHEM210100059701\\nCE-RED（Emission Part & Immunity Part），SGS，SHEM210100065201\\nCE-RED（Radio Spectrum Matter Part ⅰ， Part ⅱ， Part ⅱi， Part v），SGS，SHEM200800674902，SHEM200800674903，SHEM210100058604，SHEM200800674905\\nCE-RED（RF Exposure Evaluation Report），SGS，SHEM200800674906、SHEM210100059702、SHEM210100065202\",\"createBy\":\"qiye_admin\",\"createTime\":1680745622000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"迪拜世博会 Dubai Expo2020\",\"id\":\"1643792397405585410\",\"investInstitution\":\"无\",\"marksaleFamouse\":\"DELIVERY HERO TALABAT DB LLC、Dubai EXPO 2020、光大银行、中信银行、中国科技馆、北京公安局、北京少年宫、北京中赫集团、中国新闻社、西安博物馆、沙迦图书馆、迪拜警察局、北京中关村\\n\",\"marksaleMain2020\":\"老板电器、中信银行、北京公安局、沙迦图书馆、迪拜警察局\",\"marksaleMain2021\":\"Dubai EXPO 2020、DELIVERY HERO TALABAT DB LLC、WIC、WRC、同煤集团、中国科技院\",\"marksaleRevenue2019\":\"3312\",\"marksaleRevenue2020\":\"4940\",\"marksaleRevenue2021\":\"18300\",\"scholarCooperation\":\"无\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"算法模型,SDK,系统集成,软件平台包含前中后台\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"国防科技大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"张恒\",\"techinvLeader2Achievement\":\"1、\\t实现全栈感知系统设计与开发，包括车端感知、路侧感知、人/动物行为感知。\\n2、\\t已获得发明专利4项，申请中5项。\\n•\\t老鼠步态分析中的足底压力分布获取方法、装置及系统，专利号：201510776100.8\\n•\\t一种老鼠步态分析中的步迹识别方法、装置及系统，专利号：201510770312.5\\n•\\t动物步行参数获取装置，专利号：201510369270.4\\n•\\t一种老鼠步态分析中的体转角度指标识别方法、装置及系统，专利号：201510770287.0\\n•\\t带有触觉感知反馈的手势实时交互系统，专利号：201510353298.9\\n•\\t一种动物负重游泳行为的监测装置，专利号：201621164169.1 \\n•\\t一种动物负重游泳实验监控方法及系统，专利号： 201610939844.1\\n申请中：\\n•\\t基于融合感知的路侧停车车辆行为智能分析技术\\n•\\t一种多路视频全天候泊位状态实时识别方法\\n•\\t一种基于多传感器感知的路侧停车车辆3D轨迹识别方法\\n•\\t一种基于长时多目标跟踪的路测停车出入场事件实时分析方法\\n•\\t一种泊位状态变化事件快速准确识别方法\\n3、\\t获得吴文俊人工智能科学技术奖。\\n4、\\t多次参与神舟任务，获得三等功一次，嘉奖一次。\\n5、\\t作为课题负责人，完成两项总装预研基金项目\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"特斯联科技集团有限公司，机器人事业部；\\n智慧互通科技股份有限公司 ，Aipark研究院\\n米文动力科技有限公司；\\n中国航天员科研训练中心 ，人因国防科技重点实验室\",\"techinvLeader2Graduate\":\"北京航空航天大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"衡进\",\"techinvMoney2019\":\"1950\",\"techinvMoney2020\":\"2538\",\"techinvMoney2021\":\"6414\",\"techinvTechAllAmount\":97,\"techinvTechDoctorAmount\":3,\"techinvTechMasterAmount\":11,\"techinvTechResearcherAmount\":54,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":70,\"techprodPatentEffectiveAmount\":3,\"techprodPatentInfluence\":\"??\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108573000}"
    }
  }, {
    "id": "杉数科技（北京）有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166143832065",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "杉数科技（北京）有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"张超勃\",\"basicContractPhone\":\"15210958534\",\"basicEnglishTitle\":\"Cardinal Operations\",\"basicTitle\":\"杉数科技（北京）有限公司\",\"compreQuatification\":\"2020年，由CNAS/IAF机构，授予《GB/T 19001-2016/ISO 9001:2015质量管理体系认证》\\n2020年，由中标华信（北京）认证中心，授予《GB/T 22080-2016 idt ISO/IEC 27001:2013信息安全管理体系认证》\\n2021年，由CNAS/IAF机构，授予《GB/T 24001-2016/ISO 14001:2015环境管理体系认证》\\n2021年，由CNAS机构，授予《ISO/IEC 20000-1:2018信息技术服务管理体系认证》\",\"compreQulification\":\"国高新,国家级专精特新,省市级专精特新\",\"compreQulificationOther\":\"北京市朝阳区“凤鸣计划”企业，中关村高新技术企业\",\"compreStandardIndustry\":\"2022年，作为牵头单位，制定有色金属行业工业制造标准\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"GB/T 19001-2016/ISO 9001:2015质量管理体系认证，中标华信（北京）认证中心，CNAS/IAF认证\\nGB/T 22080-2016 idt ISO/IEC 27001:2013信息安全管理体系认证，中标华信（北京）认证中心，CNAS认证\\nGB/T 24001-2016/ISO 14001:2015环境管理体系认证，中标华信（北京）认证中心，CNAS/IAF认证\\nISO/IEC 20000-1:2018信息技术服务管理体系认证，北京泰瑞特认证有限责任公司，CNAS/IAF认证\",\"createBy\":\"qiye_admin\",\"createTime\":1680745622000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"中关村科技园区委员会，北京市中关村前沿技术企业\",\"govsuppCarryProvin\":\"上海市技术创新中心，上海市数学优化算法技术创新中心\\n上海市技术创新中心，上海市求解器自主研发与产业应用协同创新中心建设\",\"id\":\"1643792397497860098\",\"investFinancing\":\"75500\",\"investInstitution\":\"中银国际，天任投资\",\"investRound\":\"C轮\",\"marksaleFamouse\":\"华为，富士康，海尔，小米，京港地铁，上海地铁，舜宇光电，东方日升，上汽通用，一汽大众，上汽乘用车，中国商飞，六国化工，中升钢铁，雀巢，百威英博，好丽友，亿滋，顺丰，中外运，京东，德邦，永辉超市，国家电网，南方电网，南方航空\",\"marksaleMain2020\":\"小米/好丽友/南方航空/海尔/耐克\",\"marksaleMain2021\":\"雀巢/舜宇光电/亿滋/国电南瑞/中国邮政\",\"marksaleRevenue2019\":\"2452\",\"marksaleRevenue2020\":\"3410\",\"marksaleRevenue2021\":\"4866\",\"scholarCooperation\":\"与上海财经大学，上海市求解器自主研发与产业应用协同创新中心建设\\n与上海财经大学，大规模优化算法的理论与应用\\n与上海财经大学，运筹与管理\\n杉数科技独自承建，上海市数学优化算法技术创新中心\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"算法模型,中台,软件平台包含前中后台,系统集成\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"斯坦福大学\",\"techinvLeader1IsOther\":\"北京市特聘专家，北京市海外高层次人才，北京市优秀人才青年骨干，朝阳区“凤凰计划”海外高层次人才，\",\"techinvLeader1Name\":\"王曦\",\"techinvLeader2Achievement\":\"2018 北京市优秀人才青年骨干个人项目、\\n论文：Safety Analysis of the Advanced Airspace Concept using Monte Carlo Simulation,Aiaa Guidance Navigation & Control Conference,AIAA 2010、Crisis Decision Analysis: How to Save More Lives?licensed under a Creative Commons Attribution- Noncommercial 3.0 United States License,2013、中医证候的多元统计分析及方法研究,2008,北京大学学报、\\n专利：确定车辆开行距离的方法及装置（ZL201910258764.3）、生产计划生成方法以及装置、一种安全库存的配置方法及装置、用于确定商品补货量的方法及装置\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"2016年7月至今，杉数科技联合创始人 & CPO\\n2013/9 - 2016/10，谷歌（Google）公司，全球商业运营高级经理、Google Fi创始团队成员\\n2012年6月至9月：RMS（美国），总部实习生\\n2011年6月至9月：联合国维和行动部（美国），总部实习生、决策科学顾问\",\"techinvLeader2Graduate\":\"斯坦福大学\",\"techinvLeader2Is\":\"千人计划\",\"techinvLeader2IsOther\":\"国家海外高层次人才，深圳市“孔雀计划”海外高层次人才，北京市“海聚计划”海外高层次人才，北京市朝阳区“凤凰计划”海外高层次人才，香港中文大学（深圳）数据科学学院副教授\",\"techinvLeader2Name\":\"王子卓\",\"techinvMoney2019\":\"2560\",\"techinvMoney2020\":\"1011\",\"techinvMoney2021\":\"2839\",\"techinvTechAllAmount\":179,\"techinvTechDoctorAmount\":11,\"techinvTechMasterAmount\":47,\"techinvTechResearcherAmount\":94,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"AWS智能之星创业大赛，2018，第二名，杉数科技（北京）有限公司\\n品途面向未来2018NBI Awards星耀眼计划科创大赛，2018，第二名，杉数科技（北京）有限公司\\n百度（宁波）云智基地创新创业大赛，2019，优秀奖，杉数科技（北京）有限公司\\n沃尔玛食品安全创新平台大赛，2019，成本节约奖，杉数科技（北京）有限公司\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"之江杯全球人工智能大赛创业赛，2021，第一名，杉数科技（北京）有限公司\",\"techprodBusinessOther\":\"中关村国际前沿科技创新大赛，2019，大数据组冠军、总决赛季军，杉数科技（北京）有限公司\\n之江杯全球人工智能大赛创业赛，2021，第一名，杉数科技（北京）有限公司\\nAWS智能之星创业大赛，2018，第二名，杉数科技（北京）有限公司\\n品途面向未来2018NBI Awards星耀眼计划科创大赛，2018，第二名，杉数科技（北京）有限公司\\n百度（宁波）云智基地创新创业大赛，2019，优秀奖，杉数科技（北京）有限公司\\n沃尔玛食品安全创新平台大赛，2019，成本节约奖，杉数科技（北京）有限公司\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":87,\"techprodPaperQualityAmount\":\"7\",\"techprodPatentAmount\":60,\"techprodPatentEffectiveAmount\":10,\"techprodPatentInfluence\":\"1.4\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108587000}"
    }
  }, {
    "id": "北京数美时代科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166143832066",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京数美时代科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"张雪翌\",\"basicContractPhone\":\"13621387465\",\"basicEnglishTitle\":\"Beijing Shumei Times Technology Co., Ltd.\",\"basicTitle\":\"北京数美时代科技有限公司\",\"compreQuatification\":\"2021年，朝阳区颁发高成长20强\\n2021年，北京市工商联颁发科技企业第74名\",\"compreQulification\":\"省市级专精特新,国高新\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"2021年，作为参编单位，参与《内容审核体系成熟度要求和评估规范》项目的编写；\\n2021年，作为参编单位，参与《大数据从业人员能力要求》项目的编写\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"信息技术服务管理体系认证；\\n信息安全管理体系认证；\\n质量管理体系认证；\\n云服务信息安全管理体系认证；\\n公有云中个人可识别信息保护管理体系认证；\\n隐私信息管理体系认证。\",\"createBy\":\"qiye_admin\",\"createTime\":1680745622000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792397585940481\",\"investFinancing\":\"200000\",\"investInstitution\":\"CPE、经纬中国、厚朴投资、腾讯、襄禾资本\",\"investRound\":\"D轮\",\"marksaleFamouse\":\"工商银行、银联、小红书、爱奇艺、麦当劳、欧莱雅，\",\"marksaleMain2020\":\"银行类：工商银行、中国银联\\n社交类：小红书、脉脉、SOUL、微博\\n电商类：美团、叮咚买菜\\n零售类：丝芙兰、欧莱雅、沃尔沃\\n游戏类：funplus、游族\",\"marksaleMain2021\":\"银行类：工商银行、中国银联\\n社交类：小红书、脉脉、SOUL、微博\\n电商类：美团、叮咚买菜\\n零售类：丝芙兰、欧莱雅、沃尔沃\\n游戏类：funplus、游族\",\"marksaleRevenue2019\":\"6137\",\"marksaleRevenue2020\":\"8556\",\"marksaleRevenue2021\":\"8843\",\"scholarCooperation\":\"无\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"算法模型,软件平台包含前中后台\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"北京大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"梁堃\",\"techinvLeader2Achievement\":\"无\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"曾任百度、小米，高级工程师、架构师，拥有多年机器学习和人工智能领域经验\\n两次获得百度 MVP（最具价值员工）\\n2015 年 8 月作为数美科技联合创始人并担任数美科技 CTO 职务\",\"techinvLeader2Graduate\":\"上海交通大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"刘拴林\",\"techinvMoney2019\":\"4076\",\"techinvMoney2020\":\"2823\",\"techinvMoney2021\":\"3569\",\"techinvTechAllAmount\":352,\"techinvTechDoctorAmount\":0,\"techinvTechMasterAmount\":98,\"techinvTechResearcherAmount\":270,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"第三届中国人工智能大赛-B级证书\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"中关村前沿科技大赛-人工智能领域 top10\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":22,\"techprodPatentEffectiveAmount\":7,\"techprodPatentInfluence\":\"0\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108601000}"
    }
  }, {
    "id": "北京深演智能科技股份有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166143832067",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京深演智能科技股份有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"王欢\",\"basicContractPhone\":\"13701387374\",\"basicEnglishTitle\":\"Beijing DeepZero Technology Co. Ltd\",\"basicTitle\":\"北京深演智能科技股份有限公司\",\"compreQuatification\":\"（1） 亿欧智库在其《2018中国人工智能商业落地研究报告》中，深演智能被作为成功的人工智能商业案例被提及，“10年的营销技术积累各行业大数据库，运用数据挖掘实现全链条的智能商业决策，依托大数据与AI技术，赋能营销、金融与政务决策”。\\n（2) 艾瑞咨询从2013年到2018年的多份报告见证了深演智能从程序化广告到AI营销的技术应用进化和创新。在艾瑞《2018年中国AI+营销市场研究报告》，深演智能被作为营销市场典型企业提及，“通过大量优质的数据、强大的计算能力和不断优化的算法将自己打造成行业内领先的企 业。随着AI营销时代的来临，深演智能将自身传统优势项目与人工智能技术相结合，实现服务升级，成功打造DMP/MIP (Marketing Intelligence Platform)人工智能营销决策平台，充分实现与B端广告主的对接，从受众洞察、产品研发、 创意生成等5大方面赋予广告主自主AI营销的能力，实现产品与客户的100%契合，摆脱排异，让广告主更从容地使用AI优化自身的营销策略。”\\n（3）36氪研究院在其《AI视频营销行业研究报告》中，以深演智能作为案例，分析视频大数据营销的产业生态，并指出深演智能在媒体资源、数据整合、模型及算法等方面的优势。\\n深演智能凭借算法模型和大数据整合优势，有效触达用户，构建千人千面的视频营销模式。（杜玉，2018）\\n（4） 第三方研究机构Anlysys易观2017发布的专题研究报告显示，深演智能成为唯一一个独立第三方平台入选2017年上半年中国广告技术市场领先者，同时处于领先者的还有阿里巴巴、腾讯、百度以及谷歌等企业。\\n在《人工智能在安徽企业应用实践情况研究》《广东大数据产业发展研究报告》等期刊论文中被作为企业代表引用。\\n3.行业机构科技成果评价与奖项\\n深演智能多次荣获 Google、阿里、腾讯、百度等广告交易平台颁发的最佳程序化营销服务伙伴奖，并多次荣获中国国际广告节、中国广告长城奖、金投赏等多个行业颁发的金奖。\\n奖项\\t颁发机构\\n2021最佳零售行业CDP产品奖\\t非凡创服\\n2021年度Brand Partner 20|50品牌拍档Top50产品榜\\t胖鲸智库\\n2020中国女性创业者30人-黄晓南\\t亿欧\\n2020年人工智能优秀产品和应用解决方案\\t国家工业信息安全发展研究中心（工信部电子一所）\\n2020中国企业服务独角兽TOP50\\ti黑马\\n2020中国企业级SaaS产业图谱\\t艾瑞\\n2020中国互联网TOP雇主\\t拉勾网\\n灵眸奖-十大影响力品牌电商营销案例-妮维雅案例\\tmorketing\\n灵眸奖-“十大创新MarTech产品-深演智能|品友CDP\\tmorketing\\nSmarties China无线营销大奖-优秀奖-亿滋案例\\tMMA中国无线营销联盟\\n2020新基建创新力量榜单\\t创业邦\\n金投赏效果投放优化(KA)类别提名奖（妮维雅）\\t金投赏\\n金投赏AI营销类别用户规划类银奖（亿滋）\\t金投赏\\n最佳营销数字化标杆奖\\tWRE World Retail Elite\\n金成奖：智能内容管理引擎CMP\\t成功营销\\nADMIC金璨奖(年度汽车数字化&营销创新大奖暨年度汽车系列榜单) ：吉利数据管理平台创新驱动车企营销数智化\\tiDigital China\\n非凡奖-典型案例大奖：“吉利汽车CDP创新驱动车企营销数智化转型”\\t非凡资本\\n\\\"\\n 非凡奖-优秀案例大奖：“妮维雅618大促，千万级别拉新引爆销量” \\\"\\t非凡资本\\n金炼奖-助力产业复苏最佳赋能AI解决方案\\t机器之心\\n金炼奖-最强AI企业\\t机器之心\\n第八届TopDigital创新营销奖案例金奖-苏宁易购大促高效引流增长案例\\tTopDigital\\n\\\"第八届TopDigital创新营销奖产品金奖-Alphadata™企业数据管理平台\\n \\\"\\tTopDigital\\n新基建独角兽TOP100\\ti黑马\\n2019大数据产业创新服务产品年度榜单\\t数据猿\\n三十大最具创新AI产品/解决方案- AlphaData™\\t机器之心\\n  2018年北京市朝阳区推动企业上市和并购重组工作专项奖励  \\t 北京市朝阳区发改委 \\n 2018年北京市国家文化产业创新实验区建设发展引导资金支持项目   \\t 北京文创实验区管委会 \\n 《2018中国大数据创新企业TOP100》 \\t 中关村大数据产业联盟 \\n 数据智能管理奖 \\t 2018金投赏 \\n\\\" 《2015百度最佳合作伙伴奖》\\n 《2015最佳移动DSP平台奖》 \\\"\\t 百度 BES 峰会 \\n 2014中国长城奖《程序化购买金伙伴奖》 \\t 中国广告长城奖评委会 \\n 《2015金i奖最佳移动DSP平台奖 》  \\t 中国社会科学院信息化研究中心 \\n 2015年金网奖ROI类金奖 \\t 网络营销工作委员会 \\n 2015年金网奖电子商务和O2O营销类铜奖 \\t 网络营销工作委员会 \\n 2014中小企业首选服务商 \\t 中国中小企业国际合作协会 \\n 2013《最受广告主欢迎的供应商》 \\t 广告主协会 \\n 2013《全国优秀中小企业家金钻奖》 \\t 中国中小企业家年会组委会 \\n 2013《思路电商服务年度风云奖》 \\t 中国网上零售年会组委会 \\n 2013《金网奖最佳营销工具奖 品友大算盘》 \\t 中国互联网协会 \\n 2009《行为定向广告发布系统》 \\t 中华人民共和国国家版税局 \",\"compreQulification\":\"国高新,省高新,省市级专精特新、北京市专精特新小巨人企业、国家高新，中关村高新\",\"compreQulificationOther\":\"北京市企业技术中心、\\nISO9001、14001、20000、27001、45001\\nCMMI三级\\n等保三级\\n双软企业\\n邓白氏编码企业\\n软著60+\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"信息技术服务 数字化营销服务 程序化营销技术要求 GB/T 34941-2017  \\n智能决策能力评估方法 第1部分：系统和工具AIIA/PG0070-2022\\n社区商业设施设置与功能要求GB/T 37915-2019\\n智能营销客户数据平台产品基础能力要求CAT/T 20220006\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"CNAS iso9001\\nCNAS iso14001\\nCNAS iso20000\\nCNAS iso27001\\nCNAS iso45001\\n中国软件协会\",\"createBy\":\"qiye_admin\",\"createTime\":1680745622000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792397678215169\",\"investFinancing\":\"54686.5\",\"investInstitution\":\"北京合音投资中心（有限合伙），中移创新产业基金，深圳市创新投资集团有限公司，北广文资歌华投资基金\",\"investRound\":\"7\",\"marksaleFamouse\":\"服务于汽车、美妆、快消、零售、互联网服务等多个行业，赢得了WPP集团、阳狮集团、宏盟集团等国际4A集团和广汽本田、长安福特、阿里巴巴、蒂芙尼、莱珀妮、亿滋、资生堂等众多大中型企业和品牌的信赖。\",\"marksaleMain2020\":\"阿里巴巴\\t27,842.98\\nWPP集团\\t7,624.33\\n阳狮集团\\t5,245.37\\nFarfetch\\t3,530.25\\n宏盟集团\\t3,352.16\\n\",\"marksaleMain2021\":\"阿里巴巴\\t43,584.59\\nWPP集团\\t9,809.52\\nMIQ Digital Limited\\t4,038.34\\nFarfetch\\t3,349.45\\n阳狮集团\\t3,241.88\\n\",\"marksaleRevenue2019\":\"44626\",\"marksaleRevenue2020\":\"63575\",\"marksaleRevenue2021\":\"86125\",\"scholarCooperation\":\"无\",\"status\":\"录入专员未录入\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"N\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"算法模型,中台\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"北京大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"欧阳辰\",\"techinvLeader2Achievement\":\"欧阳辰拥有多项中美计算广告和大数据技术的专利，并且出版著作《Druid大数据实时分析》、译作《构建高质量的软件》。\\n毕业于北京大学计算机系，获得学士和硕士学位。\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"负责深演智能人工智能技术体系，以及产品技术开发和规划。欧阳辰是人工智能专家，擅长大数据分析、搜索引擎架构，计算广告算法和数据产品解决方案。\\n自2017年加入公司后，推进公司人工智能技术战略升级，全面负责将领先的大数据和算法技术，应用在AI营销、金融科技与智能政务行业，推进智能决策的技术产品落地。\\n欧阳辰曾就职于小米，负责商业产品和大数据平台的研发团队，实现业务收入的数倍增长。他曾在微软公司工作十年，负责搜索引擎索引的核心模块，以及微软全球上下文广告的研发工作，实现架构性能的显著提升以及商业化能力的数倍增长。此外，欧阳辰是甲骨文中国的第一批研发工程师，参与开发和发布Oracle 10g。\",\"techinvLeader2Graduate\":\"清华大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"赵宏伟\",\"techinvMoney2019\":\"3051\",\"techinvMoney2020\":\"2989\",\"techinvMoney2021\":\"4467\",\"techinvTechAllAmount\":348,\"techinvTechDoctorAmount\":3,\"techinvTechMasterAmount\":78,\"techinvTechResearcherAmount\":131,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":91,\"techprodPatentEffectiveAmount\":16,\"techprodPatentInfluence\":\"1.73\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681106358000}"
    }
  }, {
    "id": "北京时代凌宇科技股份有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166143832068",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京时代凌宇科技股份有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"李满\",\"basicContractPhone\":\"13811637978\",\"basicEnglishTitle\":\"Timeloit\",\"basicTitle\":\"北京时代凌宇科技股份有限公司\",\"compreQuatification\":\"2022年  由国家保密局 授予《涉密信息系统集成资质甲级（总体集成/运行维护/安防监控）》\\n2018年  由北京市国家保密局、北京市国防科学技术工业办公室 授予《武器装备科研生产单位二级保密资格证书》\\n2019年  由中华人民共和国住房和城乡建设部 授予《建筑智能化系统设计专项甲级》\\n2021年  由北京市住房和城乡建设委员会、北京市朝阳区住房和城乡建设委员会 授予《建筑业企业资质电子与智能化工程专业承包壹级、公路交通工程（公路机电工程）专业承包贰级、消防设施工程专业承包贰级》\\n2021年  由北京市住房和城乡建设委员会、北京市朝阳区住房和城乡建设委员会 授予《建筑业企业资质建筑机电安装专业承包叁级》\\n2019年  由中国安全防范产品行业协会 授予《安防工程企业设计施工维护能力资质证书壹级》\\n2022年  由中国音像与数字出版协会 授予《音频工程专业委员会\\t音视频集成工程企业资质壹级》\\n2020年  由北京市住房和城乡建设委员会 授予《安全生产许可证》\\n2020年  由中国电子工业标准化技术协会信息技术服务分会 授予《信息技术服务运行维护标准符合性证书（ITSS 贰级）》\\n2020年  由CMMI Institute 授予《CMMI3级》\\n2020年  由北京联合智业认证有限公司 授予《信息技术服务管理体系认证证书》\\n2020年  由北京联合智业认证有限公司 授予《信息安全管理体系认证证书》\\n2019年  由北京军友诚信检测认证有限公司 授予《武器装备质量管理体系认证证书》\\n2020年  由中国电子信息行业联合会、广州赛宝认证中心服务有限公司 授予《信息系统建设和服务能力等级证书（CS4）》\\n2021年  由北京大陆航星质量认证中心股份有限公司 授予《售后服务认证证书》\\n2022年  由中国电子信息行业联合会 授予《数据管理能力成熟度等级证书（DCMM）》\\n2020年  由北京市科学技术委员会、北京市财政局、国家税务总局、北京市税务局 授予《国家高新技术企业》\\n2021年  由中关村科技园区管理委员会 授予《中关村高新技术企业》\\n2016年  由中国电子信息行业联合会 授予《信息系统集成及服务资质壹级》\",\"compreQulification\":\"国高新,省高新,省市级专精特新\",\"compreQulificationOther\":\"北京市科技进步奖，天津市科技进步奖，CICC科技技术奖二等奖\",\"compreStandardIndustry\":\"2015年 参编 参与北京市地方标准《物联网感知设备通用信息安全技术要求》的编写\\n2018年 参编 参与企业标准《软件开发规约》的编写\\n2021年 参编 参与企业标准《硬件产品研发管理规范》的编写\\n2021年 参编 参与企业标准《自研开发工具管理规范》的编写\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"2021年 参编 参与团体标准《城域级物联网运营管理支撑平台接入规范及数据格式要求》的编写\\n2020年 参编 参与团体标准《物联网企业实训基地通用标准规范》的编写\\n2020年 参编 参与团体标准《新一代物联网参考体系架构》的编写\",\"compreStandardNation\":\"\\n2020年 参编 参与国家职业技能标准《物联网安装调试员》的编写\\n2018年 参编 参与国家标准《信息安全技术 物联网感知终端应用安全技术要求》的编写\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745622000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792397783072770\",\"investFinancing\":\"27000\",\"investInstitution\":\"中国建投集团，国家开发银行，中关村发展集团，阿里巴巴集团\",\"investRound\":\"7\",\"marksaleFamouse\":\"中国雄安集团生态建设投资有限公司、北京城市副中心工程建设管理办公室、北京市城市管理综合行政执法局、中国建筑第八工程局有限公司、中共福建省委党校、北京住总第一开发建设有限公司、北京建工集团有限责任公司、北京城建集团有限责任公司、中国建筑第八工程局有限公司、同方股份有限公司、中国人民武装警察部队参谋部信息通信局、中国移动通信集团广西有限公司、阿里云计算有限公司、北京京仪自动化系统工程研究设计院有限公司、北京市应急管理局、乌鲁木齐经济技术开发区国有资产投资经营有限公司、国家电网有限公司\",\"marksaleMain2020\":\"广西柳州市北城投资开发集团有限公司，中国建筑第八工程局有限公司，北京市公安局平谷分局，中共福建省委党校、福建行政学院，北京住总第一开发建设有限公司\",\"marksaleMain2021\":\"北京市公安局朝阳分局，北京建工集团有限责任公司，北京城建集团有限责任公司，中国建筑第八工程局有限公司，北京城市副中心工程建设管理办公室\",\"marksaleRevenue2019\":\"200\",\"marksaleRevenue2020\":\"500\",\"marksaleRevenue2021\":\"800\",\"scholarCooperation\":\"中国地质大学（北京）    电梯人员行为的AI算法分析研究；北京科技大学合作并联合设立北京市博士后工作分站\\n北京科技大学                合作并设立博士后工作分站\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"系统集成,软件平台包含前中后台\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"北京科技大学\",\"techinvLeader1IsOther\":\"国务院政府特殊津贴、科技部科技创新人才\",\"techinvLeader1Name\":\"黄孝斌\",\"techinvLeader2Achievement\":\"发表的专利列表：\\n无线传感器网络中实现发射功率自适应的方法及系统\\tZL200810119772.1\\n空调控制系统及方法\\tZL200910237989.7\\n基于无线传感器网络的应变力测量装置及系统\\tZL200910083759.X\\n一种动态计算传感器物理量的装置和方法\\tZL200910083555.6\\n一种工业检测系统的数据传输方法\\tZL200910084698.9\\n一种众目标实时定位装置和定位方法\\tZL200910241346.X\\n路侧停车位检测方法\\tZL201110427053.8\\n基于异构分簇无线传感网多源监测数据融合的方法及系统\\tZL200910084847.1\\n一种停车位检测方法及系统\\tZL201110460278.3\\n一种车位检测方法及检测装置\\tZL201210572793.5\\n一种基于无线传感器网络的照明节电测控系统\\tZL200910083556.0\\n一种分布式网络化嵌入式系统的多功能网关\\tZL201010620972.2\\n监测液化石油气钢瓶的装置和系统\\tZL201110432330.4\\n一种基于地磁的停车场车辆循迹定位管理系统及方法\\tZL201210560886.6\\n一种车辆管理系统及方法\\tZL201110456591.X\\n管理照明节点的装置和系统\\tZL201110427698.1\\n户外环境监测方法\\tZL201110429343.6\\n停车场车辆循迹定位网关及其进行车辆定位的方法\\tZL201310020424.X\\n一种停车场车辆循迹定位检测方法及装置  \\tZL201210593533.6\\n一种车位检测的方法和系统\\tZL201210567449.7\\n一种基于PKI技术的物联网认证方法及系统\\tZL201010603710.5\\n一种电子标签智能钉枪及其读写方法\\tZL201210554982.X\\n订单管理方法\\tZL201210113459.3\\n基于RFID的货物运输方法及系统\\tZL201210532270.8\\n车位管理方法\\tZL201210567821.4\\n数据上传方法\\tZL201210564429.4\\n一种标准信号采集设备及相应的测试方法与系统\\tZL201210563747.9\\n基于边云协同的边缘计算网关集群运行方法及系统\\tZL202010679660.2\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"中国冶金设备总公司，中钢集团北京佰能电气公司\",\"techinvLeader2Graduate\":\"北京科技大学\",\"techinvLeader2Is\":\"万人计划\",\"techinvLeader2IsOther\":\" 国家科技部专家库专家\",\"techinvLeader2Name\":\"魏剑平\",\"techinvMoney2019\":\"3164\",\"techinvMoney2020\":\"3985\",\"techinvMoney2021\":\"3296\",\"techinvTechAllAmount\":421,\"techinvTechDoctorAmount\":6,\"techinvTechMasterAmount\":57,\"techinvTechResearcherAmount\":81,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"CICC 科技进步奖二等奖\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"北京市科技进步奖，天津市科技进步奖\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":57,\"techprodPatentEffectiveAmount\":35,\"techprodPatentInfluence\":\"8.37\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108631000}"
    }
  }, {
    "id": "北京中科汇联科技股份有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166148026369",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京中科汇联科技股份有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"徐峰\",\"basicContractPhone\":\"18610647928\",\"basicEnglishTitle\":\"Huilan Technology Co., Ltd\",\"basicTitle\":\"北京中科汇联科技股份有限公司\",\"compreQuatification\":\"承担的重大研发项目\\n工信部新一代人工智能产业创新发展重点任务《基于深度神经网络计算机的智能客服系统》\\t2019年\\t工业和信息化部科技司\\n中关村示范区培育专项“重大前沿原创技术成果转化和产业化”项目《基于多模态机器学习的全域智能化服务平台》\\t2018年\\t北京市科学技术委员会\\n中关村园区管委会\\n北京市科委脑认知与类脑计算重点课题《基于递归神经网络的自然会话系统研发及应用》，与北京大学计算语言所联合研发\\t2016年\\t北京市科学技术委员会\\n《基于大数据技术的产业资源对接服务平台》\\t2014年\\t中关村科技园区海淀园管理委员会\\n公司荣誉\\n专精特新小巨人企业\\t2021年\\t工业和信息化部\\n新一代人工智能产业创新重点任务“基于深度神经网络计算的智能客服系统”入围揭榜单位\\t2019年\\t工业和信息化部科技司\\n2020年高成长企业TOP100\\t2021年\\t北京市科委、中关村管委会、中关村科学城委员会\\n中国最佳人工智能企业大奖\\t2020年\\t中国电子商会人工智能委员会\\n中国人工智能100强\\t2019年\\t胡润人工智能排行榜\\n中国人工智能100强\\t2018年\\t前瞻产业研究院\\n人工智能未来企业100强\\t2017年\\t中科院《互联网周刊》\\n最佳自然语言处理技术奖\\t2020年\\t中国电子商会人工智能委员会\\n智慧城市应用奖\\t2020年\\t中国电子商会人工智能委员会\\n智能机器人技术奖\\t2020年\\t中国电子商会人工智能委员会\\n2020新基建人工智能产业TOP50\\t2020年\\t驱动中国研究院\\n2020年智能客服创新排行TOP10\\t2020年\\t中科院《互联网周刊》\\n首届“智慧昌平开放创新大赛”优秀奖\\t2021年\\t北京市经信局、昌平区人民政府\\n2018年度智能客服领域领军企业奖\\t2018年\\t数字中国网、《大数据》杂志、中国国际大数据大会委员会\\n2018年中国新三板未来之星\\t2018年\\t中国生产力新三板企业委员会\\n2017最具投资价值科技创新企业\\t2017年\\t中国未来研究院、中国高科技产业化研究会、中国技术市场协会\\n2016年中国人工智能领军企业奖\\t2016年\\t中国电子信息产业发展研究院\\n中国最佳客户中心（金耳麦奖）\\t2016年\\t中国呼叫中心与电子商务发展研究院\\n政府网站服务创新领先企业\\t2013年\\t中国社会科学院信息化研究中心\\n北京市高新创新企业\\t2013年\\t北京软件和信息服务协会\\n中关村高成长企业Top100\\t2013年\\t北京中关村高新技术企业协会\\n中国软件行业知识产权自助创新十大品牌\\t2010年\\t中国知识产权盛典\\n公司研发产品所获奖项\\n中国AI创新企业奖\\t2021年\\t中国电子商会人工智能委员会\\n中国AI创新应用奖\\t2021年\\t中国电子商会人工智能委员会\\nSAP集成创新方案金奖\\t2021年\\tSAP中国研究院\\n创客北京2021优胜奖\\t2021年\\t北京市经济和信息化局\\n中国软件产品认证\\t2020年\\t北京经信局北京市软件和信息服务协会\\n北京软件企业核心竞争力 \\n创新型\\t2020年\\t北京经信局北京市软件和信息服务协会\\nAI+政务大数据服务平台京津局大数据综合实验区优秀案例\\t2019年\\t中国国际数字经济博览会组委会\\n中国智慧城市创新应用大赛优秀创新奖\\t2015年\\t中国信息经济学会\\n北京自主创新产品\\t2015年\\t北京市科委、市经信委、市发改委、中关村管委会\\n中关村国家自主创新示范区新技术新产品（服务）认定\\t2014年\\t北京市科委、经信委、市发改委、中关村管委\\n政府服务平台建设领先奖\\t2014年\\t中国社会科学院信息化研究中心\\n国家火炬计划创新产品《汇联easySite内容管理系统》\\t2013年\\t中华人民共和国科学技术部\\n中国信息产业创新产品奖\\t2010年\\t中国计算机用户协会\\n科技创新产品奖\\t2009年\\t北京企业评价协会\\n最具增值潜力产品\\t2006年\\t中国国际软件博览会\\n优秀软件产品\\t2004年\\t中国软件行业协会\\n中国信息产业优秀信息化解决方案\\t2005年\\t中国计算机用户协会\\n\",\"compreQulification\":\"国高新,省高新,国家级专精特新小巨人,国家级专精特新,省市级专精特新\",\"compreStandardIndustry\":\"1\\t《电子商务软件构件分类与代码》GB/T 38776-2020\\t2020年\\t国家市场监督管理总局国家标准化管理委员会\\n2\\t《软件工程 软件开发成本度量规范》GB/T36964-2018\\t2018年\\t国家市场监督管理总局\\n中国国家标准化管理委员会\\n3\\t《软件研发成本度量规范》（SJ/T11463-2013）\\t2013年\\t北京市质量技术监督局\\n4\\t《住房保障基础信息数据标准》CJJ/T197-2012\\t2012年\\t中华人民共和国住房和城乡建设部\\n5\\t《住房保障信息系统技术规范》\\nCJJ/T 196-2012\\t2012年\\t中华人民共和国住房和城乡建设部\\n\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745622000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"北京市住房和城乡建设委员会\\n北京市体育局\\n北京市地震局\\n北京是交管局\\n深圳南山区人民政府\\n深圳光明区人民政府\\n\",\"govsuppCarryProvin\":\"海关总署\\n中国人民银行\\n国家外汇管理局\\n中国地震局\\n辽宁省人民政府\\n海南省人民政府\\n\",\"id\":\"1643792397871153153\",\"investFinancing\":\"10000\",\"investInstitution\":\"北京中关村创业投资发展有限公司\",\"investRound\":\"D轮\",\"marksaleFamouse\":\"中国海关总署及各级海关、中国人民银行、中国地震局、河北省政府、海南省政府、辽宁省政府、北京市政府、南山区政府、北京市公安局等，海证券交易所、大连商品交易所、中国建设银行、中国光大银行、中信银行、昆仑银行、南京银行、杭州银行、东莞银行、丝路基金、中国人寿、泰康人寿、中国再保险等，国中铁、中核集团、中电科、中国一汽、南方航空、贵州茅台、浪潮、东华合创、海底捞等\",\"marksaleMain2020\":\"同上\",\"marksaleMain2021\":\"同上\",\"marksaleRevenue2019\":\"12128\",\"marksaleRevenue2020\":\"17240\",\"marksaleRevenue2021\":\"20384\",\"scholarCooperation\":\"北京大学、清华大学、哈尔滨工业大学、武汉工程大学、北京理工大学、中央美院等都有成立人工智能联合实验室\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"清华大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"游世学\",\"techinvLeader2Achievement\":\"成功获选成为信息产业部中国2007年度创新人物，2017年成功获选成为中国中小企业优秀企业家称号。拥有人工智能的国家发明专利几十项，建有北京大学、清华大学和哈尔滨工业大学三个联合实验室，研发出的智能诗词机器人，CCTV专题报道，在CCTV-中国科学院的《机智过人》节目中，代表了中国最领先的人工智能企业而获奖，入选CCTV《机智过人》人工智能2017年终盛典，成为CCTV和中国科学院人工智能的权威认证和获奖的前10名企业。荣获中国第一个通过图灵测试的作诗机器人称号。带领中科汇联成为中国人工智能企业排行第26名（互联网周刊排名）。\\n工作之余，喜爱中国书法。2008年中央美术学院设计学院高研班毕业，2009年清华大学全国艺术理论与绘画研究高级研修班毕业。北京书法家协会会员、中国硬笔书法家协会会员。师从李松老师。2008年作品获《庆祝北京奥运会诗书画联大赛》一等奖。2009年作品入选中国书协《第二届全国青年书法篆刻展》。\\n\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"1996年曾就职于清华大学光盘研究中心，是语音识别、语义理解和多媒体信息处理方面的专家。1998年就任清华同方光盘中心副总经理，是中国最早将语音识别技术应用到英语多媒体教学的第一人。\\n1999年创办中科汇联股份有限公司，并担任董事长兼总裁至今。\",\"techinvLeader2Graduate\":\"北京大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"王炳栋\",\"techinvMoney2019\":\"1690\",\"techinvMoney2020\":\"2257\",\"techinvMoney2021\":\"3549\",\"techinvTechAllAmount\":345,\"techinvTechDoctorAmount\":8,\"techinvTechMasterAmount\":12,\"techinvTechResearcherAmount\":115,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"2022北京科学进步二等奖\\n2\\t新一代人工智能产业创新重点任务“基于深度神经网络计算的智能客服系统”入围揭榜单位\\t2019年\\t工业和信息化部科技司\\n3\\t2020年高成长企业TOP100\\t2021年\\t北京市科委、中关村管委会、中关村科学城委员会\\n4\\t中国最佳人工智能企业大奖\\t2020年\\t中国电子商会人工智能委员会\\n5\\t中国人工智能100强\\t2019年\\t胡润人工智能排行榜\\n6\\t中国人工智能100强\\t2018年\\t前瞻产业研究院\\n7\\t人工智能未来企业100强\\t2017年\\t中科院《互联网周刊》\\n8\\t最佳自然语言处理技术奖\\t2020年\\t中国电子商会人工智能委员会\\n9\\t智慧城市应用奖\\t2020年\\t中国电子商会人工智能委员会\\n10\\t智能机器人技术奖\\t2020年\\t中国电子商会人工智能委员会\\n11\\t2020新基建人工智能产业TOP50\\t2020年\\t驱动中国研究院\\n12\\t2020年智能客服创新排行TOP10\\t2020年\\t中科院《互联网周刊》\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentEffectiveAmount\":44,\"techprodPatentInfluence\":\"11.61\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108617000}"
    }
  }, {
    "id": "阿呆科技（北京）有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166148026370",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "阿呆科技（北京）有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"李文君\",\"basicContractPhone\":\"15652989942\",\"basicEnglishTitle\":\"WonderLab\",\"basicTitle\":\"阿呆科技（北京）有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"国高新\",\"compreQulificationOther\":\"中关村高新证书\\n中关村金种子企业\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"1.ISO9001 质量管理体系认证证书\\n2.ISO14001 环境管理体系认证证书\\n3.ISO45001 职业健康安全管理体系认证证书 \\n4.软件测试报告：基于人工智能和虚拟现实的甲基苯丙胺毒瘾评估系统\\n5.软件测试报告：基于人工智能和虚拟现实的甲基苯丙胺毒瘾评估系统WL_SUD_V2.0\\n6.信息系统安全等级保护备案证明：望里暖阳\\n7.信息系统安全等级保护备案证明：望里智康\\n8.中国医疗器械注册证：认知功能障碍治疗软件\",\"comprehensiveAuthority\":\"软件测试报告：基于人工智能和虚拟现实的甲基苯丙胺毒瘾评估系统WL_SUD_V2.0， 公安三所认证\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"1.应急管理部消防救援局课题：消防员客观心理测评与心理训练系统\\n2.睡眠课题：睡眠数字疗法入选“十四五”国家重点研发专项\",\"id\":\"1643792397971816450\",\"investFinancing\":\"6000\",\"investInstitution\":\"SIG、长岭资本、博远资本、康宁医院\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"医疗机构：\\n中南大学湘雅二医院 \\n上海市精神卫生中心\\n武汉市精神卫生中心\\n温州康宁医院\\n\\n社戒社康：\\n山东潍坊全市社戒社康\\n四川德阳市罗江区禁毒服务\\n\\n社区：\\n上海市黄浦区某街道\\n上海市长宁区某街道\\n成都市武侯区某街道\\n成都市成华区某街道\\n\\n强制戒毒：\\n四川省女子强制隔离戒毒所\\n重庆市西山坪强制隔离戒毒所\\n江西省永桥强制隔离戒毒所\\n山东省济东强制隔离戒毒所\\n云南省第三强制隔离戒毒所\\n\",\"marksaleMain2020\":\"中标项目：\\n1. 2020.04.06 NNZC2019-10428A 南宁市公安局禁毒支队人工智能毒瘾渴求评估系统项目采购 \\n2.2020.05.29 山东省鲁中强制隔离戒毒所VR 智慧戒毒采购项目中标公告\\n3.2020.07.13 山东省本级山东省女子强制隔离戒毒所智慧运动干预戒毒人员脑功能分析研究项目中标公告\\n4.2020.09.24 成都市金牛区人民政府沙河源街道办事处“6.26”服务中心氛围营造项目成交公告\\n\\n\",\"marksaleMain2021\":\"1.2021.07.13 湖南省白泥湖戒毒康复所关于计算机设备租赁服务的网上超市采购项目合同履约验收公告\\n2.2021.10.25 购置VR 虚拟现实毒瘾评估矫治系统(第二次)中标(成交)结果公告\",\"marksaleRevenue2019\":\"880\",\"marksaleRevenue2020\":\"1590\",\"marksaleRevenue2021\":\"1860\",\"scholarCooperation\":\"医院：\\n北京大学第六医院\\n中南大学湘雅二医院\\n上海市精神卫生中心\\n温州康宁医院\\n首都医科大学\\n南方医科大学南方医院\\n\\n高校：\\n北京大学 \\n清华大学\\n中国科学技术大学\\n中国人民大学\\n电子科技大学\\n复旦大学\\n\\n\\n\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"算法模型,系统集成,软件平台包含前中后台\",\"techinvLeader1Education\":\"学士\",\"techinvLeader1Graduate\":\"北京大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"李岱\",\"techinvLeader2Achievement\":\"- 数学竞赛保送北京大学，毕业于北京大学心理与认知科学学院；\\n- 85后创业者\\n-已授权发明专利（第一发明人）：\\n1.基于人工智能和虚拟现实/增强现实的毒瘾渴求靶向干预矫治系统\\n2.基于情绪刺激任务的便携式多通道抑郁倾向评估系统\\n3.一种基于多刺激图片或视频ERP的毒瘾评估系统\\n4.认知偏向矫正系统\\n\\n\",\"techinvLeader2Education\":\"学士\",\"techinvLeader2Experience\":\"- 国际顶尖咨询公司波士顿咨询（BCG）东京办公室；\\n- 乐视控股战略部总监；\\n- 乐视内部创业，创办乐视VR，担任VR CEO两年：两年内发展至120人的全球化团队，吸引包括三星VR内容平台负责人等高管，完成两轮融资、30亿估值；\",\"techinvLeader2Graduate\":\"北京大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"陈璐\",\"techinvMoney2019\":\"480\",\"techinvMoney2020\":\"560\",\"techinvMoney2021\":\"690\",\"techinvTechAllAmount\":100,\"techinvTechDoctorAmount\":4,\"techinvTechMasterAmount\":8,\"techinvTechResearcherAmount\":80,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"1.2019全国医疗人工智能创新奖“创意创新奖” 2019年\\n2.人工智能领域TOP10  中关村科技园区管理委员会   2019年\\n4.VB100数字医疗优秀合作案例 望里港湾 2021年\\n5.AI毒瘾渴求评估与干预系统荣获“2020政法智能化建设智慧警务十大创新产品” \\n6.互联网及移动互联网行业六等奖 深圳市光明区科技创新局 2019年\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":10,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":29,\"techprodPatentEffectiveAmount\":5,\"techprodPatentInfluence\":\"4.4\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108643000}"
    }
  }, {
    "id": "北京灵犀微光科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166148026371",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京灵犀微光科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"陈飞\",\"basicContractPhone\":\"15101169226\",\"basicEnglishTitle\":\"LINGXI-AR\",\"basicTitle\":\"北京灵犀微光科技有限公司\",\"compreQuatification\":\"2022年，由北京市经济和信息化局授予《北京市“专精特新”中小企业》；\\n2020年由北京市科学技术委员会、北京市财政局、国家税务总局北京市水务局授予《高新技术企业》证书；\\n2021年由中关村科技园区管理委员会授予《中关村高新技术企业》；\\n\",\"compreQulification\":\"国高新,省市级专精特新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"2021年，作为参编单位参与《头戴式安防视频采集显示设备通用技术要求（CSPIA）》的编写。\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"凭借业内领先的技术、卓越的产品表现和成熟的行业解决方案，先后摘得中国增强现实产业联盟“AR最佳硬件奖”、“2019硅谷高创会颠覆性创新奖”等近百项国内外奖项和荣誉。拥有海内外专利共130余项，全面覆盖光波导显示技术的设计、工艺、装调等领域，核心技术和产品多次填补国内空白。\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792398059896833\",\"investFinancing\":\"10000\",\"investInstitution\":\"和君资本、东方富海、红杉资本、中关村启航（中发展旗下基金）、舜宇、中银粤财、国投美亚、富士康、美迪凯等\",\"investRound\":\"B轮\",\"marksaleFamouse\":\"产品获得A、M、S等国际知名头部企业订单\",\"marksaleMain2020\":\"客户A、客户B、客户C、客户D、客户E\",\"marksaleMain2021\":\"客户A、客户B、客户C、客户D、客户E\",\"marksaleRevenue2019\":\"265\",\"marksaleRevenue2020\":\"334\",\"marksaleRevenue2021\":\"745\",\"scholarCooperation\":\"无\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"N\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"系统集成\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"北京大学\",\"techinvLeader1IsOther\":\"美国罗切斯特大学光学学院企业家顾问\",\"techinvLeader1Name\":\"郑昱\",\"techinvLeader2Achievement\":\"郑昱是增强显示光学系统、微显示领域资深研究者，在光波导、耦合光栅、全息成像、光场等领域有深厚的理论基础和丰富的产业化经验。郑昱对AR产业链及关键技术有深入研究，2014年设计出国内第一个阵列光波导显示引擎完整方案，2015年研发出国内首台光波导引擎样机，目前已具有近30项国家发明专利。\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"郑昱在2014年创立的北京灵犀微光科技有限公司，是一家专注于AR底层光学显示技术的厂商和服务商，已突破了多项科技与工艺难题，是在全球范围内率先实现低成本量产光波导镜片的创新公司。目前产品已投入医疗、教育、安防、工业维检、军工和特种行业等众多领域使用。\",\"techinvLeader2Graduate\":\"新加坡南洋理工大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"赵鑫\",\"techinvMoney2019\":\"1241\",\"techinvMoney2020\":\"1303\",\"techinvMoney2021\":\"1820\",\"techinvTechAllAmount\":80,\"techinvTechDoctorAmount\":1,\"techinvTechMasterAmount\":14,\"techinvTechResearcherAmount\":32,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":168,\"techprodPatentEffectiveAmount\":0,\"techprodPatentInfluence\":\"1.33\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108655000}"
    }
  }, {
    "id": "北京中科闻歌科技股份有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166148026372",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京中科闻歌科技股份有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"陈思含\",\"basicContractPhone\":\"13717700095\",\"basicEnglishTitle\":\"Wenge\",\"basicTitle\":\"北京中科闻歌科技股份有限公司\",\"compreQuatification\":\"2021年，由北京智云信国际信用评价有限公司授予\\tAAA级质量服务诚信单位\\n2021年，由北京智云信国际信用评价有限公司授予\\tAAA级诚信经营示范单位\\n2021年，由北京智云信国际信用评价有限公司授予\\tAAA企业信用等级证书\\n2021年，由北京智云信国际信用评价有限公司授予\\tAAA级重合同守信用单位\\n2021年，由北京智云信国际信用评价有限公司授予授予AAA级重服务守信用单位\\n2021年，由北京智云信国际信用评价有限公司授予授予AAA级重质量守信用单位\\n2021年，由北京智云信国际信用评价有限公司授予授予AAA级诚信供应商\\n2021年，由江苏恒誉信用管理有限公司信用评审委员会授予2021年度AAA级资信等级证书\\n2021年，由北京思坦达尔认证中心授予ISO27001\\n2021年，由北京思坦达尔认证中心授予ISO9001\\n2021年，由北京思坦达尔认证中心授予ISO20000\\n2021年，由中国诚信信用管理股份有限公司授予海淀区企业信用评级报告\",\"compreQulification\":\"国家级专精特新小巨人,国高新\",\"compreQulificationOther\":\"2021年，由北京市科委、国税总局北京市税务局、北京市财政局授予《国家级高新技术企业》 2021年，由工业和信息化部授予《国家专精特新小巨人企业》 2021年，由北京市经济和信息化局授予《北京市市级企业技术中心》 2021年，由CMMI CERTIFIED HM LEAD APPRAISER授予《CMMI 五级》 2021年，由北京市知识产权局授予《北京市知识产权试点单位》\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"工信部2021年大数据产业发展试点示范项目\\n中科院“弘光专项”\\n科技部国家重点研发计划“科技冬奥”\\n科技部科技创新2030-“新一代人工智能”项目\",\"id\":\"1643792398143782914\",\"investFinancing\":\"2000\",\"investInstitution\":\"深创投、中科院资本、国科嘉和、中科创星、金科君创、中自投资、丰厚资本、友邦资本等\",\"investRound\":\"E轮\",\"marksaleFamouse\":\"政务类服务客户主要包括中华人民共和国工业和信息化部、中华人民共和国海关总署、中华人民共和国公安部、国家互联网应急中心、北京市公安局、国家税务总局深圳市税务局等政府机构。企业类服务客户主要包括北京牡丹电子集团有限责任公司、赛迪工业和信息化研究院（集团）有限公司、东软集团股份有限公司、北京泽桥传媒科技股份有限公司、太极集团有限公司、北京多氪信息科技有限公司、华奥星空科技发展有限公司等多家大型企业。其他类服务客户主要包括中国科学院、新华社、CCTV、中国日报网、中国网等多家事业单位。\",\"marksaleMain2020\":\"新华社，客户A，海关总署\",\"marksaleMain2021\":\"新华社，客户B\",\"marksaleRevenue2019\":\"9909\",\"marksaleRevenue2020\":\"21321\",\"marksaleRevenue2021\":\"23787\",\"scholarCooperation\":\"无\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"算法模型\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"天津大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"王磊\",\"techinvLeader2Achievement\":\"在国际期刊和会议中发表多篇论文，申请多项专利。参与研发的大数据分析系统在我国200余家国家核心部门得到成功应用。曾获得中国自动化学会科技进步奖一等奖（2013年），中国人工智能学会吴文俊人工智能科学技术奖二等奖（2013年），王选新闻科技奖一等奖（2015年），公安部科技进步奖二等奖（2015年）等多项省部级奖励。\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"王磊，天津大学博士学位；发改委国家信息中心在职博士后。多年从安全信息学、国家大数据研究，作为专家参与多个国家级和部委项目顶层规划总体设计，作为负责人或技术负责人承担国家级和省部项目总经费超2亿元。\",\"techinvLeader2Graduate\":\"天津大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"王磊\",\"techinvMoney2019\":\"2951\",\"techinvMoney2020\":\"4807\",\"techinvMoney2021\":\"10579\",\"techinvTechAllAmount\":274,\"techinvTechDoctorAmount\":6,\"techinvTechMasterAmount\":60,\"techinvTechResearcherAmount\":164,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"2021世界人工智能大会AIWIN算法技术赛第一名\",\"techprodAwardNation\":\"2021世界人工智能大会AIWIN算法技术赛第一名\\n2021年工信部大数据产业试点示范\\n2022年数博会“领先科技成果”奖\\n2018年中国创业创新大赛全国总决赛二等奖\\n2019年、2021年“王选新闻科学技术奖”一等奖\\n2021年中科院双创项目灵猴奖\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"吴文俊人工智能科学技术奖，创新奖二等奖，王磊（第四完成人）\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"2018年中国创业创新大赛全国总决赛二等奖\",\"techprodBusinessOther\":\"2021年中科院双创项目灵猴奖\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":600,\"techprodPaperQualityAmount\":\"6\",\"techprodPatentAmount\":92,\"techprodPatentEffectiveAmount\":24,\"techprodPatentInfluence\":\"1\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108673000}"
    }
  }, {
    "id": "北京无疆脑智科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166148026373",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京无疆脑智科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"卢美菁\",\"basicContractPhone\":\"18910244607\",\"basicEnglishTitle\":\"/\",\"basicTitle\":\"北京无疆脑智科技有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"省高新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"1.CMMI3：杭州证客信息科技有限公司；\\n2.NMPA：中国泰尔实验室/中国信息通信研究院。\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792398240251905\",\"investFinancing\":\"15000\",\"investInstitution\":\"源码资本，线性资本，联想之星，和玉资本，Affamed\",\"investRound\":\"pre-A+轮\",\"marksaleFamouse\":\"联想之星、Affamed、北京大学、百度\",\"marksaleMain2020\":\"/\",\"marksaleMain2021\":\"Affamed\",\"marksaleRevenue2019\":\"0\",\"marksaleRevenue2020\":\"0\",\"marksaleRevenue2021\":\"0\",\"scholarCooperation\":\"1.北京大学重庆大数据研究院，脑科学大数据联合实验室；\\n2.北京大学第六医院，精神分裂症数字化认知干预研究；\\n3.四川大学华西医院，儿童多动症数字化执行功能干预研究；\\n4.南京脑科医院，儿童注意缺陷多动障碍数字化执行功能干预研究；\\n5.首都医科大学附属北京天坛医院，卒中后人智障啊数字化干预研究；\\n6.深圳儿童医院，儿童注意缺陷多动障碍数字化执行功能干预研究；\\n7.成都电子科技大学，孤独症儿童表情识别数字化干预的有效性研究；\\n8.首都儿科研究所，幼儿执行功能测评数字化工具研发项目。\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"算法模型,后台\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"北京师范大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"薛贵\",\"techinvLeader2Achievement\":\"1.教育部自然科学奖一等奖；\\n2.教育部长江学者特聘教授；\\n3.新世纪优秀人才计划；\\n4.全国百篇优秀博士论文奖；\\n5.美国FDR-UCLA奖学金。\",\"techinvLeader2Experience\":\"1.全国青联第十二届委员会委员；\\n2.中国教育学会脑与教育分会，副理事长；\\n3.北京师范大学脑与认知科学研究院脑与学习科学研究中心，主任。\",\"techinvLeader2Is\":\"长江学者\",\"techinvMoney2019\":\"0\",\"techinvMoney2020\":\"0\",\"techinvMoney2021\":\"1199\",\"techinvTechAllAmount\":122,\"techinvTechDoctorAmount\":8,\"techinvTechMasterAmount\":26,\"techinvTechResearcherAmount\":76,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"教育自然科学，2019，一等奖，薛贵；\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"神经疾病数字疗法项目全球创业者峰会创业大赛HICOOL，2021，优胜奖，孙巍。\",\"techprodBusinessOther\":\"神经疾病数字疗法项目全球创业者峰会创业大赛HICOOL，2021，优胜奖，孙巍。\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"10\",\"techprodPatentAmount\":16,\"techprodPatentEffectiveAmount\":16,\"techprodPatentInfluence\":\"3\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108688000}"
    }
  }, {
    "id": "图灵通诺（北京）科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166148026374",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "图灵通诺（北京）科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"陈莹\",\"basicContractPhone\":\"13811125334\",\"basicEnglishTitle\":\"SANDSTAR\",\"basicTitle\":\"图灵通诺（北京）科技有限公司\",\"compreQuatification\":\"CE    泰瑞特 2021年\\nFCC   Intertek 2021年\\nUL   美华 2021年\\nPSE   泰瑞特 2021年\\nCCC   泰瑞特 2021年\\nROHS   Intertek 2021年\\nREACH   Interte 2021年\",\"compreQulification\":\"国高新,省市级专精特新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"CE    泰瑞特\\nFCC   Intertek\\nUL   美华\\nPSE   泰瑞特\\nCCC   泰瑞特\\nROHS   Intertek\\nREACH   Intertek\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792398332526593\",\"investFinancing\":\"30000\",\"investInstitution\":\"TDG，百度风投，昆仲等\",\"investRound\":\"B+轮\",\"marksaleFamouse\":\"百事可乐，可口可乐唯一智能零售供应商，其他500强饮料厂商等\",\"marksaleMain2020\":\"百事可乐，可口可乐，客户C500强知名饮料商，客户D知名石油公司，客户E500强连锁超市\",\"marksaleMain2021\":\"百事可乐，可口可乐，客户C500强知名饮料商，客户D知名石油公司，客户E500强连锁超市\",\"marksaleRevenue2019\":\"2600\",\"marksaleRevenue2020\":\"3000\",\"marksaleRevenue2021\":\"7500\",\"scholarCooperation\":\"2019年与清华大学合作，提供数据识别技术支持\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"0\",\"techcontPatentRatio\":\"10000\",\"techinvLeader1Education\":\"学士\",\"techinvLeader1Graduate\":\"清华大学\",\"techinvLeader1IsOther\":\" 科技创业领军人才\",\"techinvLeader1Name\":\"吴一黎\",\"techinvLeader2Achievement\":\"无\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"拥有8年Oracle/IBM管理经验\",\"techinvLeader2Graduate\":\"北京大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"LEO\",\"techinvMoney2019\":\"1200\",\"techinvMoney2020\":\"1700\",\"techinvMoney2021\":\"2800\",\"techinvTechAllAmount\":81,\"techinvTechDoctorAmount\":5,\"techinvTechMasterAmount\":8,\"techinvTechResearcherAmount\":50,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"3\",\"techprodPatentAmount\":17,\"techprodPatentEffectiveAmount\":2,\"techprodPatentInfluence\":\"1.63\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108700000}"
    }
  }, {
    "id": "光子算数(北京)科技有限责任公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166152220674",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "光子算数(北京)科技有限责任公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"周莹\",\"basicContractPhone\":\"18701640107\",\"basicEnglishTitle\":\"Photoncounts Co.,Ltd\",\"basicTitle\":\"光子算数(北京)科技有限责任公司\",\"compreQuatification\":\"2020年10月，由北京市科委、中关村科技园区管理委员会颁发《中关村金种子企业》证书。\\n胚芽企业\",\"compreQulification\":\"国高新\",\"compreQulificationOther\":\"中关村高新\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"北京市科委，北京市科技计划重大项目“硅光图像处理加速芯片及系统研发”项目\\n北京市自然科学基金委，“小规模神经网络芯片研制”项目\\n应急管理部信息研究院，“露天煤矿车辆智能管控平台和移动开发及安装部署实施”项目\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792398416412674\",\"investFinancing\":\"4872\",\"investInstitution\":\"英诺天使、臻云创投、常见创投、中科创星、浦昌基金、南京麒麟创投，以及铭普光磁和南京创熠等\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"中国科学院半导体研究所   应急管理部信息研究院 中国电子科技集团联合微电子中心 中科院微电子技术研究所\",\"marksaleMain2020\":\"苏州智能\",\"marksaleMain2021\":\"应急管理部信息研究院\",\"marksaleRevenue2019\":\"49\",\"marksaleRevenue2020\":\"29\",\"marksaleRevenue2021\":\"210\",\"scholarCooperation\":\"与高校和科研机构合作紧密，与北京交通大学合作完成军委科技委研发项目，与微电子所联合研发北京市自然基金面上项目，与中电科联合研发，以及北大、北工大、北信科等均有横向合作。\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"N\",\"techcontIsStockPool\":\"N\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"北京交通大学\",\"techinvLeader1IsOther\":\"北京市科协青年托举人才工程\",\"techinvLeader1Name\":\"白冰\",\"techinvLeader2Achievement\":\"主持北京市科技计划重大研发项目、比利时国际联合研发项目等，是军委科技委、国自然基金等光计算芯片关键研发项目的核心成员，已授权专利6项，发表9篇论文、国内外学术会议重要报告13篇，获得全国集成电路“创业之芯”大赛总决赛特等奖（工信部主办）等10余项重要奖项。\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"2017年11月-至今 光子算数（北京）科技有限责任公司创始人-总经理\",\"techinvLeader2Graduate\":\"北京交通大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"国家自然科学“杰出青年”基金获得者，获智瑾奖、教育部新世纪优秀人才\",\"techinvLeader2Name\":\"裴丽\",\"techinvMoney2019\":\"462\",\"techinvMoney2020\":\"213\",\"techinvMoney2021\":\"405\",\"techinvTechAllAmount\":32,\"techinvTechDoctorAmount\":10,\"techinvTechMasterAmount\":8,\"techinvTechResearcherAmount\":21,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"2019年8月深兰杯国际人工智能科创大赛一等奖\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"2019/5/1 第二届全国集成电路“创业之芯”大赛全国总决赛 特等奖\\n2018/12/22 第七届中国创新创业大赛国际第三代半导体专业赛全球总决赛 企业组三等奖\\n2018/10/1 第四届中国“互联网+”大学生创新创业大赛 银奖\",\"techprodBusinessOther\":\"2019/1/15 2018年第一届昆山高新区海创杯全国人工智能大赛  三等奖\\n2018/11/1 第三届海峡杯创新创业大赛  优胜奖\\n2017/9/4 2018北京地区高校大学生优秀创业团队 一等奖\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":10,\"techprodPatentEffectiveAmount\":6,\"techprodPatentInfluence\":\"0.8\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108715000}"
    }
  }, {
    "id": "北京羽医甘蓝信息技术有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166152220675",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京羽医甘蓝信息技术有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"丰格尔\",\"basicContractPhone\":\"18310524929\",\"basicEnglishTitle\":\"DeepCare\",\"basicTitle\":\"北京羽医甘蓝信息技术有限公司\",\"compreQuatification\":\"2017年，中关村科技园区管理委员会，授予”中关村高新技术企业“；\\n2019年，中关村科技园区管理委员会，授予”中关村金种子企业“；\\n2021年，北京市科学技术委员会、北京市财政局、国家税务总局北京市税务局，授予”高新技术企业“。\",\"compreQulification\":\"国高新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"口腔X射线图像处理软件，北京市药品监督管理局；\\nFDA510K Exempt；\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"国家重点研发计划-科技冬奥，冻伤及颌面创伤移动式智能化诊疗平台的研发-课题一；\\n国家重点研发计划-科技冬奥，冻伤及颌面创伤综合诊疗救治培训体系的建立与应用示范-课题五；\\n北京市科学技术委员会，人工智能辅助口腔医学影响诊断系统设计开发；\\n北京市科学技术委员会，可摘局部义齿智能设计系统\",\"id\":\"1643792398504493058\",\"investFinancing\":\"15000\",\"investInstitution\":\"安耐德投资/松柏投资/王小川博士\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"泰康拜博口腔集团、北京劲松口腔集团、牙博士口腔连锁集团、恒伦口腔集团、瑞尔口腔\",\"marksaleMain2020\":\"医健通、合乐安、海德堡、牙博士医疗控股集团、\",\"marksaleMain2021\":\"上海美维口腔医疗管理集团、合乐安、恒伦口腔集团、泰康拜博口腔集团、北京劲松口腔集团\",\"marksaleRevenue2019\":\"303\",\"marksaleRevenue2020\":\"186\",\"marksaleRevenue2021\":\"1096\",\"scholarCooperation\":\"北京大学口腔医院，AI辅助的颞下颌关节髁突骨改建的自动定量评价系统及相应软件的开发事宜；\\n南京市口腔医院，口腔临床服务人工智能平台；\\n武汉大学口腔医院，建立基于深度学习的针对曲面断层片的第三磨牙拔除难度、损伤神经风险自动评估及术式建议智能算法及流程。\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"算法模型,软件平台包含前中后台,SDK\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"达特茅斯学院\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"丁鹏\",\"techinvLeader2Achievement\":\"负责或参与2项北京市科委人工智能医疗重大科技专项（2018年、2019年）及科技部国家重点研发计划“科技冬奥”专项（2019年）等国家级、省部级课题；\\n在国际顶级期刊发表了多篇高影响因子的论文；\\n截止2022年8月，共申请25项发明专利专利，其中已授权发明专利为9项；\\n\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"2013年8月~2014年2月，中国银行，投资分析师；\\n2014年3月~2016年6月，北京格灵深瞳信息技术有限公司，资深算法工程师；\",\"techinvLeader2Graduate\":\"马里兰大学\",\"techinvLeader2Is\":\"千人计划\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"白海龙\",\"techinvMoney2019\":\"732\",\"techinvMoney2020\":\"675\",\"techinvMoney2021\":\"1080\",\"techinvTechAllAmount\":51,\"techinvTechDoctorAmount\":2,\"techinvTechMasterAmount\":7,\"techinvTechResearcherAmount\":32,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"中国医疗器械创新创业大赛，2019年9月，二等奖，北京羽医甘蓝信息技术有限公司；\\n\",\"techprodBusinessOther\":\"2017中关村前沿科技创新大赛人工智能领域TOP10，2017年11月，TOP10，北京羽医甘蓝信息技术有限公司；\\n第五届北京亦庄创新创业大赛人工智能分赛行业十强，2019年6月，北京羽医甘蓝信息技术有限公司；\\n2019全国医疗人工智能创新奖-荣获“技术创新奖”，2019年11月，北京羽医甘蓝信息技术有限公司；\\n2018领先科技成果奖-”新产品“，2018年5月，北京羽医甘蓝信息技术有限公司；\\n\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"4\",\"techprodPatentAmount\":35,\"techprodPatentEffectiveAmount\":9,\"techprodPatentInfluence\":\"2.89\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108731000}"
    }
  }, {
    "id": "北京七鑫易维信息技术有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166152220676",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京七鑫易维信息技术有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"邢倩影\",\"basicContractPhone\":\"18501199870\",\"basicEnglishTitle\":\"7invensun\",\"basicTitle\":\"北京七鑫易维信息技术有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"国高新,省市级专精特新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"EMC TEST REPORT，Shenzhen HTT Technology Co., Ltd.\\nLVD REPORT，Shenzhen HTT Technology Co., Ltd.\\n  - RoHS Consolidated Test Report，Shenzhen HTT Technology Co., Ltd.\\n VERIFICATION OF COMPLIANCE，SGS-CSTC Standards Technical Services (Shanghai) Co., Ltd.\\n GB 4943检测报告，深圳市环通检测技术有限公司\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792398588379138\",\"investFinancing\":\"25182\",\"investInstitution\":\"Qualcomm，中小企业发展基金（深圳有限合伙）。\",\"investRound\":\"B轮\",\"marksaleFamouse\":\"一汽轿车股份有限公司，国防科技创新研究院，厦门金龙联合汽车工业有限公司，中国人民解放军军事科学院国防科技创新研究院\",\"marksaleMain2020\":\"北京飞宇星电子科技有限公司\\n国防科技创新研究院\\n小派科技（上海）有限责任公司\\nSIB\\n北京博奥恒瑞科技有限公司\\n\",\"marksaleMain2021\":\"北京正负无限科技有限公司\\n北京飞宇星电子科技有限公司（代理）\\n小派科技（日照）有限公司 小派科技（上海）有限责任公司\\nSIB\\n中国人民解放军军事科学院国防科技创新研究院\\n\",\"marksaleRevenue2019\":\"759\",\"marksaleRevenue2020\":\"779\",\"marksaleRevenue2021\":\"1157\",\"scholarCooperation\":\"哥伦比亚大学Siegler实验室儿童 认知心理教育合作\\n与加州大学伯克利分校视觉与光学创新中心（CIVO )达成战略合作\\n\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"N\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techinvLeader1Education\":\"学士\",\"techinvLeader1Graduate\":\"沈阳航空航天大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"黄通兵\",\"techinvLeader2Achievement\":\"无\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"沈阳航空航天大学任教\",\"techinvLeader2Graduate\":\"武汉大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"费文波\",\"techinvMoney2019\":\"1972\",\"techinvMoney2020\":\"1048\",\"techinvMoney2021\":\"1237\",\"techinvTechAllAmount\":52,\"techinvTechDoctorAmount\":1,\"techinvTechMasterAmount\":8,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":317,\"techprodPatentEffectiveAmount\":190,\"techprodPatentInfluence\":\"4.2\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108755000}"
    }
  }, {
    "id": "北京全景声信息科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166152220677",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京全景声信息科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"张小磊\",\"basicContractPhone\":\"15102281493\",\"basicEnglishTitle\":\"WANOS全景声\",\"basicTitle\":\"北京全景声信息科技有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"无\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"IEEE Standard for Second Generation Audio Coding   IEEE Std 1857.8-2020  国际标准\\n信息技术 高效多媒体编码  第3部分:音频\\tGB/T33475.3\\t 国家标准\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792398684848129\",\"investFinancing\":\"11200\",\"investInstitution\":\"百度   腾讯  晨晖\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"峰米  漫步者  百度  \",\"marksaleMain2020\":\"由AI业务刚刚研发起步，暂无收入及客户。\",\"marksaleMain2021\":\"由AI业务刚刚研发起步，暂无收入及客户。\",\"marksaleRevenue2019\":\"314\",\"marksaleRevenue2020\":\"421\",\"marksaleRevenue2021\":\"691\",\"scholarCooperation\":\"无\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"算法模型,SDK,系统集成\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"北京邮电大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"潘兴德\",\"techinvLeader2Achievement\":\"潘兴德博士毕业于北京邮电大学，在中国和德国从事20年音频技术研究、应用开发、标准化和产业化工作，申请了80余项技术中国或国际发明专利，发表论文及提案数十篇。\\n和德国MP3、AAC发明团队合作多年，在音频技术创新、标准化、产业化等领域有超过20年的成功经验，在音频编解码、三维声场、音频人工智能等领域，拥有国际领先的技术水平。\\n潘兴德博士是声音对象技术和三维全景声技术最早的探索者之一，也是相关技术创新、标准化和产业化的领导者。主持开发出WANOS中国全景声技术，精度和效率优于Dolby Atmos技术，达到了国际领先水平，并在数字电影、网络视频、虚拟现实、网络音频、消费电子领域获得应用。\\n一、主要业绩\\n   （一）2000年起主持或参与IEC、EVD、AVS、IEEE、AES、MPEG等音频标准的制定工作，并贡献了50余项发明专利；\\n   （二）IEEE VR（虚拟现实）音频技术标准化组的召集人；\\n （三）三维全景声技术的探索者、标准制定者和推广者。\\n  二、创业经历\\n    （一）阜国数字：2000年-2003年，首席科学&副总裁，阜国数字提供全球第一套高清音视频解决方案（EVD）：标准、芯片和系统解决方案；\\n   （二）MediaWorks：2003年-2007年，创始人&CEO，MediaWorks专注于音频技术创新、标准化和技术授权，2007年MediaWorks随德国母公司Coding Technologies被美国杜比公司以2.5亿美金收购；\\n   （三）天籁K歌：2007年-2015年，创始人& CEO、CTO，中国最大电视KalaOK平台，用户2亿人。\\n三、担任社会职位\\n    目前，潘兴德博士兼任国家少年儿童数字阅读产品安全实验室主任、中国音视频标准（AVS）音频创始组长、IEEE1857音频视频标准工作组创始成员。现任AVS音频联合组长，测试联合组长，IEEE、AES、电子学会和声学学会员等社会职位。\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"1.技术副总裁 2000年5月-2006年7月 中国 北京阜国数字技术有限公司\\n2.音频组长/联合组长 2002年5月-2006年12月 中国  中国音视频标准化工作组（AVS）\\n3.首席科学家 2003年8月-2006年12月 德国  MediaWorks Audio Lab\\n4.创始人&CEO    2004年1月-2006年12月 中国  北京宫羽数字技术有限公司（MediaWorks Co., Ltd.)\\n5.创始人&CEO    2007年1月-2014年12月 中国   天籁K歌（集团）\\n6.IEEE VR音频召集人 2015年12月-2016年6月 美国 国际电气与电子工程师协议（IEEE）\\n7.创始人&CEO    2014年4月-至今       中国  北京全景声信息科技有限公司       \",\"techinvLeader2Graduate\":\"北京邮电大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"谭敏强\",\"techinvMoney2019\":\"470\",\"techinvMoney2020\":\"533\",\"techinvMoney2021\":\"844\",\"techinvTechAllAmount\":41,\"techinvTechDoctorAmount\":6,\"techinvTechMasterAmount\":8,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":22,\"techprodPatentEffectiveAmount\":22,\"techprodPatentInfluence\":\"2.25\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108773000}"
    }
  }, {
    "id": "北京聚力维度科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166152220678",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京聚力维度科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"康天姝\",\"basicContractPhone\":\"18801172030\",\"basicEnglishTitle\":\"DreamWld Tech\",\"basicTitle\":\"北京聚力维度科技有限公司\",\"compreQuatification\":\"中关村高新技术企业\",\"compreQulification\":\"国高新,省市级专精特新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792398772928513\",\"investFinancing\":\"3000\",\"investInstitution\":\"凤凰元创（平潭）产业投资合伙企业、深圳南山东方富海中小微创业投资基金\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"无\",\"marksaleMain2020\":\"咪咕动漫有限公司、平行云科技（北京）科技有限公司、北京世悦星承科技有限公司、完美世界（北京）软件科技发展有限公司、欧莱雅（中国）有限公司\",\"marksaleMain2021\":\"咪咕视讯科技有限公司、航天宏图信息技术股份有限公司、咪咕动漫有限公司、华为技术有限公司、欧莱雅（中国）有限公司\",\"marksaleRevenue2019\":\"100\",\"marksaleRevenue2020\":\"210\",\"marksaleRevenue2021\":\"330\",\"scholarCooperation\":\"无\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"软件平台包含前中后台\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"北京邮电大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"赵天奇\",\"techinvLeader2Achievement\":\"北京邮电大学博士、清华大学博士后；英特尔、高通AI荣誉技术大使；中国电子协会VRAR分会副秘书长；2011—2015年师从徐大雄院士；2015—2019年师从戴琼海院士；带领聚力维度斩获“互联网+”创新创业大赛全国总决赛亚军、入选人工智能未来企业TOP100排行榜、获得中关村文化产业创新人物称号等荣誉。\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"无\",\"techinvLeader2Graduate\":\"日本东京都市大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"渠源\",\"techinvMoney2019\":\"377\",\"techinvMoney2020\":\"398\",\"techinvMoney2021\":\"644\",\"techinvTechAllAmount\":75,\"techinvTechDoctorAmount\":1,\"techinvTechMasterAmount\":14,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"高通人工智能白金奖\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"待定\",\"techprodPatentAmount\":4,\"techprodPatentEffectiveAmount\":4,\"techprodPatentInfluence\":\"0.8\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108786000}"
    }
  }, {
    "id": "北京卓视智通科技有限责任公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166152220679",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京卓视智通科技有限责任公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"刘晓月\",\"basicContractPhone\":\"15811217728\",\"basicEnglishTitle\":\"sinoits\",\"basicTitle\":\"北京卓视智通科技有限责任公司\",\"compreQuatification\":\"国家高新技术企业、中关村高新技术企业、北京市“专精特新”中小企业、通过了 ISO9001、ISO27001、ISO20000、ISO14001、ISO45001、CMMI3等级认证等。\",\"compreQulification\":\"国高新,省市级专精特新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"参与《T/ITS 0144-2021 普通国省干线智慧公路建设框架》团体标准制定\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"2019年10月，北京市科委资助的“基于消化内镜动态大数据的人工智能病变识别系统研究”课题\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792398865203201\",\"investFinancing\":\"4500\",\"investInstitution\":\"腾讯云战投、海贝资本、高通创投、耀途资本等\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"公司目前已与数十家大型央企、上市公司、云计算厂商以及区域性的大型系统集成公司达成了深度业务合作，包括中国信科、中国普天、大唐高鸿、华为、易华录、招商公路、东华软件、华设集团、广西交科院、中星微、千方科技、金溢科技、精英智通等客户\",\"marksaleMain2020\":\"山西圣世佳信息技术股份有限公司、北京大唐高鸿数据网络技术有限公司、山东艾因智能科技有限公司、广州拓尔思大数据有限公司、中数兴盛科技有限责任公司\",\"marksaleMain2021\":\"富盛科技股份有限公司、南京宁锐捷视讯科技有限公司、北京航天长峰科技工业集团有限公司、河南升云智能科技有限公司、陕西嘉石信拓网络技术有限公司\",\"marksaleRevenue2019\":\"2027\",\"marksaleRevenue2020\":\"2847\",\"marksaleRevenue2021\":\"5089\",\"scholarCooperation\":\"与北京邮电大学合作共建了“人工智能创新应用联合实验室”；与中科大数据研究院合作共建了“数字孪生技术应用联合实验室”；作为北方工业大学创新创业实训基地\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"N\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"电信科学技术研究院\",\"techinvLeader1IsOther\":\"2016南京市高层次引进人才、2016秦淮区高层次引进人才、荣获2018江苏省“双创”人才\",\"techinvLeader1Name\":\"吴柯维\",\"techinvLeader2Achievement\":\"曾主持带队研发了各类人工智能产品20余项，主持完成北京市科委资助科研项目2项，获中国交通运输协会科技进步奖1项，累计申请获国家发明专利授权40余项。\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"曾在大唐移动通信设备有限公司工作，历任算法研究工程师、算法项目经理等职，提交了相关领域发明专利30余项并获授权，为TD-SCDMA产业化落地作出了贡献。\",\"techinvLeader2Graduate\":\"北京邮电大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"何晓罡\",\"techinvMoney2019\":\"687\",\"techinvMoney2020\":\"1009\",\"techinvMoney2021\":\"1648\",\"techinvTechAllAmount\":98,\"techinvTechDoctorAmount\":1,\"techinvTechMasterAmount\":19,\"techinvTechResearcherAmount\":64,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"2019年中国（小谷围）“互联网+交通运输”智慧公路主题赛，2019年11月，一等奖，北京卓视智通科技有限责任公司；\\n2019年度中国（小谷围）“互联网+交通运输”创新大赛，2019年11月，二等奖，北京卓视智通科技有限责任公司；\\n2020年度中国交通运输协会“科技进步奖”，2020年，三等奖；北京卓视智通科技有限责任公司；\\n中关村5G创新应用大赛，2021年，一等奖；北京卓视智通科技有限责任公司；\\n中国电信“天翼之星”创新创业大赛，2022年，二等奖，北京卓视智通科技有限责任公司；\\n首届“北京智慧交通开放创新大赛”，2022年7月，三等奖，北京卓视智通科技有限责任公司；\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"2019年度中国（小谷围）“互联网+交通运输”创新大赛，2019年11月，二等奖\\n中关村5G创新应用大赛，2021年，一等奖\\n2020年度中国交通运输协会“科技进步奖”，2020年，三等奖；\\n中国电信“天翼之星”创新创业大赛，2022年，二等奖\\n首届“北京智慧交通开放创新大赛”，2022年7月，三等奖；\\n2019年中国（小谷围）“互联网+交通运输”智慧公路主题赛，2019年11月，一等奖；\\n\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":14,\"techprodPatentEffectiveAmount\":14,\"techprodPatentInfluence\":\"4.37\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108800000}"
    }
  }, {
    "id": "北京奇虎科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166152220680",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京奇虎科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"邓韵晗\",\"basicContractPhone\":\"13408539807\",\"basicEnglishTitle\":\"Qihoo360\",\"basicTitle\":\"北京奇虎科技有限公司\",\"compreQuatification\":\"自成立以来，集团体系内各主体一直积极承担科技项目，2019、2020 年，共承担国家及本市科技项目 29 个，涉及总经费共 9.8 亿元；其中“基于数字孪生的物联网安全攻防平台”入选工信部 2021 年物联网示范项目。2022 年，三六零数字安全科技集团有限公司将作为重点主体负责建设 360网络空间安全研发中心及 360 新一代人工智能创新研发中心项目。\",\"compreQulification\":\"国高新\",\"compreQulificationOther\":\"中关村高新技术企业\",\"compreStandardIndustry\":\"360 牵头的行业标准\\n《面向高级持续威胁分析的知识图谱构建技术要求》通过中国通信标准化协会（CCSA）立项，并完成一次工作组征求意见讨论；\\n牵头的行业标准《电话号码标记应用技术要求》通过 CCSA 报批公示，即将发布。\\n360 牵头 TAF 标准 T/TAF 077.11-2021《APP 收集使用个人信息最小必要评估规范通话记录》及参与 109 项标准，获得工业和信息化部 2021 年团体标准应用示范项目。\\n360 牵头 YD/T 3737-2020《基于公众电信网的联网汽车信息安全技术要求》发布，也明确了 360 公司汽车安全技术在我国行业的领先地位。\",\"compreStandardInternation\":\"360 公司牵头的国际标准 X.1376《联网汽车信息安全异常行为检测机制》发布，为中国主导的第一个汽车安全国际标准，推广了安全大脑在汽车领域的落地。该标准将填补汽车网络新领域在异常检测的空白，为车企提供一份安全参考指南，提升网络安全能力。\\n2021 年，360 牵头制定的国际电联标准 ITU-T X.1376《基于大数据的联网汽车安全异常行为检测机制》，以联合国 6 种语言全球发布（英、阿、中、西、法、俄），贯彻国家“引进来、走出去”的整体战略。\",\"compreStandardLocal\":\"\\n在个人信息保护和 IoT 领域，360 公司牵头和参与了电信终端产业协会 20 余项团体标准制订，其中《移动智能终端应用软件行为规范》、\\n《智能网关设备安全技术要求》获得协会优秀标准，同时入围 2020 年工信部团体标准示范项目。\\n\\n\\n\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792398949089282\",\"investFinancing\":\"12054\",\"investInstitution\":\"无\",\"marksaleFamouse\":\"360公司作为网络安全行业领军企业具有敏锐的市场感知力，瞄准国家需求，同时着眼长远，发现制约网络安全行业发展的关键共性技术瓶颈，通过各大创新技术实验室，着力重大关键技术研究与突破。持续发挥数字安全领军企业作用，专注为国家、城市、行业、企事业单位提供网络安全技术、产品和服务，目前已与 90%部委、72%央企、100%大型银行以及上百万中小企业开展了网络安全合作。仅 2019 年，360 政企安全集团接连服务于重庆、天津、青岛、上海、郑州、珠海、鹤壁、苏州等城市的安全基础设施建设和运营，树立了标志性的国家级安全服务典范，构建起以安全大脑为核心的协同防御体系，整体提升我国应对数字时代高级威胁的安全能力。除此之外，360也是国家网络安全保障的核心力量，在两会、十九大、九三阅兵、“一带一路”峰会、G20、金砖会议、APEC、七十周年庆典等活动的重保工作，以及国家安全和国防安全相关工作中发挥了重要保障作用。\",\"marksaleRevenue2019\":\"650000\",\"marksaleRevenue2020\":\"800000\",\"marksaleRevenue2021\":\"1081600\",\"scholarCooperation\":\"与清华大学在网络空间测绘领域开展深入合作，联合成立清华大学（网络研究院）-360 网络空间测绘联合研究中心；\\n与北京工业大学建立优质创业就业基地；\\n与北京航空航天大学签署网络空间安全人才联合培养协议。\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"Y\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"西安科技大学\",\"techinvLeader1IsOther\":\"中关村高聚人才领军企业家\",\"techinvLeader1Name\":\"周鸿祎\",\"techinvLeader2Achievement\":\"首创“免费安全”模式提升中国互联网安全的整体水平，360 也发展成为中国最大、全球领先的互联网安全企业。目前，360 集团员工近 8000 人，覆盖网络安全、人工智能及智能硬件产品等业务；2020 年营收达 116.15 亿。公司拥有“360 安全大脑”国家人工智能开放创新平台和四个国家工程实验室，专利申请量共 12755 项。入选全国工商联2021民营企业专利 500 强第九名。长期带队钻研人工智能、参与构建我国网安知识体系，带队发现全球首个 4G 高危漏洞，承担多个重大科技项目并获得北京市科学技术奖。360 挖掘漏洞数量在每年发现主力厂商 CVE ~400+中排名均在世界第一。在网络空间安全领域的持续投入一直是 360的关注重点。2019 年，我带领公司全面升级政企安全战略，基于 360 安全大脑服务体系为党政军企提供大安全解决方案，先后发布国家、城市、家庭三级安全大脑，目前，360 已经成为国家网络安全保障的核心力量，在两会、十九大等重大安保活动，以及国家安全和国防安全相关工作中发挥了重要作用。\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"1995.7-1998.9 方正集团 研发中心事业部经理\\n1998.9-2004.2 国风因特软件（北京）有限公司 董事长\\n2004.2-2005.8 雅虎中国 总裁\\n2005.8-2006.8 IDGVC国际数据集团风险投资基金 投资合伙人\\n2007.8-至今     360 公司 创始人兼CEO\",\"techinvLeader2Graduate\":\"哈尔滨工业大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"新世纪百千万人才工程国家级人选\",\"techinvLeader2Name\":\"杜跃进\",\"techinvMoney2019\":\"247900\",\"techinvMoney2020\":\"285200\",\"techinvMoney2021\":\"312900\",\"techinvTechAllAmount\":7520,\"techinvTechDoctorAmount\":38,\"techinvTechMasterAmount\":1317,\"techinvTechResearcherAmount\":1367,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"360安全大脑人工智能开放创新平台、大数据协同安全技术国家工程实验室、北京市科学技术奖\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"360 网络空间安全教育平台  行业内国家级奖项  工业和信息化部网络安全产业发展中心  2022-07-01\\n2018 中国民办教育创新示范单位行业内省部级奖项  中国管理科学研究院  2018-05-01\\n360 网络安全系列课程入选“学习强国”平台  行业内国家级奖项  中共中央宣传部 2021-09-01\\n国家重大活动网络安全保卫技术支持单位  行业内国家级奖项  公安部 2019-01-01\\n大数据协同安全技术国家工程实验室  科技类国家级奖项  国家发展和改革委员会  2017-02-23\\n360 安全大脑获评国家新一代人工智能开放创新平台  科技类国家级奖项  中华人民共和国科学技术部  2019-08-29\\nCCF 职业教育大会金牌合作伙伴  行业内国家级奖项  中国计算机学会 2019-12-02\\n第一批工业和信息化重点领域产业人才基地联合建设机构  行业内国家级奖项  工业和信息化部 2022-04-29\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":10704,\"techprodPatentEffectiveAmount\":10704,\"techprodPatentInfluence\":\"7.07\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108814000}"
    }
  }, {
    "id": "北京优锘科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166156414978",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京优锘科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"钟老师\",\"basicContractPhone\":\"18600513555\",\"basicEnglishTitle\":\"UINO\",\"basicTitle\":\"北京优锘科技有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"国高新,国家级专精特新,省市级专精特新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"数字孪生行业标准  包括  数据中心  园区 等\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792399070724098\",\"investFinancing\":\"80000\",\"investInstitution\":\"无\",\"investRound\":\"C轮\",\"marksaleFamouse\":\"国内500强企业 \",\"marksaleRevenue2019\":\"8200\",\"marksaleRevenue2020\":\"13400\",\"marksaleRevenue2021\":\"27800\",\"scholarCooperation\":\"无\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techinvLeader1Education\":\"学士\",\"techinvLeader1Graduate\":\"北航\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"李鉴\",\"techinvLeader2Achievement\":\"获得 10多项发明专利  由其技术给公司带来近十亿的营收。\",\"techinvLeader2Experience\":\"2003创业  专注 游戏核心引擎 和数字孪生渲染引擎技术。\",\"techinvLeader2Is\":\"否\",\"techinvMoney2019\":\"5460\",\"techinvMoney2020\":\"5680\",\"techinvMoney2021\":\"9560\",\"techinvTechAllAmount\":1300,\"techinvTechMasterAmount\":65,\"techinvTechResearcherAmount\":860,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":72,\"techprodPatentEffectiveAmount\":25,\"techprodPatentInfluence\":\"0.54\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108828000}"
    }
  }, {
    "id": "上海燧原科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166156414979",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "上海燧原科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"何威\",\"basicContractPhone\":\"13910663393\",\"basicEnglishTitle\":\"Shanghai Enflame Technology Co.,Ltd\",\"basicTitle\":\"上海燧原科技有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"国高新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"AI Rank; AI Perf;基于深度学习芯片的分布式训练通用规范\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"燧原科技连续两年（2020-2021）蝉联由国家工信部发起、中国电子信息产业发展研究院主办的“中国芯”年度重大创新突破产品最高奖项-金奖,也是国内第一家凭借人工智能芯片产品连续两年荣获这一最高奖项的企业\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792399158804481\",\"investFinancing\":\"400000\",\"investInstitution\":\"国家集成电路产业投资基金、中信产业基金、中金资本、真格基金、腾讯投资等\",\"investRound\":\"C轮\",\"marksaleFamouse\":\"腾讯、浪潮、新华三、之江实验室\",\"marksaleMain2020\":\"无\",\"marksaleMain2021\":\"腾讯、浪潮、新华三\",\"marksaleRevenue2019\":\"0\",\"marksaleRevenue2020\":\"0\",\"marksaleRevenue2021\":\"10000\",\"scholarCooperation\":\"之江实验室-人工智能芯片联合研究中心\\n西安交通大学-联合实验室\\n上海交通大学-云端AI加速系统联合研发中心\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"上海\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"SDK,前台,中台,后台,软件平台包含前中后台,系统集成,算法模型\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"北京航空航天大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"李翔\",\"techinvLeader2Achievement\":\"博士期间曾作为核心贡献者多次参与863、973项目，获教育部科技进步一等奖1项\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"10～18年就职于谷歌，从事数据中心基础架构，知识图谱等方面相关工作\",\"techinvLeader2Graduate\":\"西北工业大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"李瑛\",\"techinvMoney2019\":\"4900\",\"techinvMoney2020\":\"18000\",\"techinvMoney2021\":\"60000\",\"techinvTechAllAmount\":467,\"techinvTechDoctorAmount\":15,\"techinvTechMasterAmount\":249,\"techinvTechResearcherAmount\":385,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"燧原科技连续两年（2020-2021）蝉联由国家工信部发起、中国电子信息产业发展研究院主办的“中国芯”年度重大创新突破产品最高奖项-金奖,也是国内第一家凭借人工智能芯片产品连续两年荣获这一最高奖项的企业\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":110,\"techprodPatentEffectiveAmount\":65,\"techprodPatentInfluence\":\"1.19\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108846000}"
    }
  }, {
    "id": "云控蜂核北京科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166156414980",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "云控蜂核北京科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"郝伟栋\",\"basicContractPhone\":\"13393010726\",\"basicTitle\":\"云控蜂核北京科技有限公司\",\"compreQuatification\":\"2021年由中标华信（北京）认证中心所以信息安全管理体系认证；\\n2022年由全国企业诚信服务平台授予诚信经营示范单位“AAA”企业信用等级证书、重服务守信用单位“AAA”企业信用等级证书、重合同守信用“AAA”企业信用等级证书\",\"compreQulification\":\"国高新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"2020年由云控蜂核牵头起草《DAIS数据文件标准》\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"河南省教育厅；\\n云南省旅游局\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792399242690562\",\"investFinancing\":\"8450\",\"investInstitution\":\"未来科技控股有限公司（FCG Tech Holdings Pty Ltd ）\",\"investRound\":\"B轮\",\"marksaleFamouse\":\"美国铁狮门智慧社区、哈雷戴维森、北京政府数字人、Firenow时尚健身、农安云、河南省教育部、河北旅游协会、银河长兴、万达体育。\",\"marksaleMain2020\":\"北京政府数字人、Firenow时尚健身、农安云\",\"marksaleMain2021\":\"河南省教育部、河北旅游协会、银河长兴、万达体育\",\"marksaleRevenue2019\":\"0\",\"marksaleRevenue2020\":\"0\",\"marksaleRevenue2021\":\"0\",\"scholarCooperation\":\"与北京工业大学合作区块链研究方向；\\n清华互联网产业研究院；\\n中关村智用人工智能研究院\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"N\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"软件平台包含前中后台,SDK\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"中科院上海应用物理研究所\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"周凡\",\"techinvLeader2Achievement\":\"（专利）\\n基于数字电视通道广播实时交通路况信息的方法\\n基于数字电视技术的省电传输方法\\n数字电视增值服务的扩展EPG方法\\n数据广播内容导航系统及其工作方法\\n移动数字电视的漫游方法\\n一种图像隐私保护处理技术\\n一种城市快速路节能路灯装置\\n基于RFID技术的新型车位管理装置\\n特种车辆的优先放行系统\\n特种车辆的优先放行系统\\n一种基于车辆特征视频识别的停车场车辆定位系统\\n地磁传感器的标识检测系统\\n一种择优路径计算方法及系统\\n一种全局网络备份路由的评估方法及评价系统\\n\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"北京清华力合技术有限公司担任研发工程师\\n深圳力合数字电视有限公司担任研发经理\\n深圳清华大学研究院数字电视系统实验室担任系统部经理\\n无锡智科传感网技术股份有限公司担任副总经理\\n江苏省级研究院江苏数字信息研究院（无锡数字信息产业园）院长助理\\n北京波智高远信息技术股份有限公司担任副总经理\\n深圳臻云技术股份有限公司相继担任北方区市场负责人、副总经理\\n太平台电信担任开发总监及产品总监\\n云控蜂核（北京）科技有限公司担任技术副总裁、总经理\",\"techinvLeader2Graduate\":\"西安电子科技大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"范锦峰\",\"techinvMoney2019\":\"766.2712\",\"techinvMoney2020\":\"1517.6716\",\"techinvMoney2021\":\"3482.7163\",\"techinvTechAllAmount\":105,\"techinvTechDoctorAmount\":0,\"techinvTechMasterAmount\":9,\"techinvTechResearcherAmount\":70,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":2,\"techprodPatentEffectiveAmount\":2,\"techprodPatentInfluence\":\"0\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108858000}"
    }
  }, {
    "id": "第四范式",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166156414981",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "第四范式",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicTitle\":\"第四范式\",\"compreQuatification\":\"无\",\"compreQulification\":\"无\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"《智能云服务技术能力要求 第2部分：智能云使能平台》 行业标准\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"\\n《面向深度学习的服务器规范》 团体标准\\n《信息技术 人工智能 机器学习模型及系统的质量要素和测试方法》 团体标准\\n《信息技术 人工智能 面向机器学习的数据标注规程》 团体标准\\n《信息技术 人工智能 面向机器学习的系统框架和功能要求》 团体标准\\n《信息技术 人工智能 小样本机器学习样本量和算法要求》 团体标准\\n《信息技术 人工智能 音视频及图像分析算法接口》 团体标准\\n《信息技术 人工智能 智能助理能力等级评估》 团体标准\\n《移动金融基于声纹识别的安全应用技术规范》 行业标准\\n《人工智能产业人才基础标准》 团体标准\\n《人工智能 术语》 国家标准\\n《计算机视觉 术语》 国家标准\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"工信部工业和信息化人才培养工程培训基地；\\n智源研究院“悟道”模型生态战略合作企业\\n第四范式与丘成桐北京雁栖湖应用数学研究院签署战略合作协议\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792399334965249\",\"investInstitution\":\"红杉中国、松禾资本、交银国际、博裕景泰\",\"investRound\":\"Pre-C轮\",\"marksaleFamouse\":\"无\",\"scholarCooperation\":\"无\",\"status\":\"用户未提交\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"戴文渊\",\"techinvLeader2Achievement\":\"无\",\"techinvLeader2Experience\":\"百度凤巢；华为\",\"techinvLeader2Is\":\"否\",\"techinvLeader2Name\":\"陈雨强\",\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentInfluence\":\"4\"}"
    }
  }, {
    "id": "爱动超越人工智能科技（北京）有限责任公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166156414982",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "爱动超越人工智能科技（北京）有限责任公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"侯越\",\"basicContractPhone\":\"13611250213\",\"basicEnglishTitle\":\"Aidong Super  AI\",\"basicTitle\":\"爱动超越人工智能科技（北京）有限责任公司\",\"compreQuatification\":\"国家高新技术企业，中关村高新技术企业、中关村金种子企业、质量管理体系认证，北京市“专精特新”中小企业、“中关村瞪羚企业”，科技型中小企业。\",\"compreQulification\":\"国高新,省市级专精特新\",\"compreQulificationOther\":\"中关村高新技术企业，中关村金种子企业，“中关村瞪羚企业”\",\"compreStandardIndustry\":\"1.《工业互联网平台 工业设备上云通用管理要求 第 6 部分:场内物流设备》 \\n2.《工业互联网平台 工业设备接入数据字典 第 6 部 分:场内物流设备》  \\n3.《信息化和工业化融合管理体系生产设备运行管理规范》 \\n4.《信息化和工业化融合管理体系生产设备管理能力成熟度评价》 \\n\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792399423045633\",\"investFinancing\":\"9000\",\"investInstitution\":\"海尔资本、清华启迪、东方华盖、钟鼎创投\",\"investRound\":\"B轮\",\"marksaleFamouse\":\"可口可乐、中国联通、长春一汽、京东物流、顺丰物流\",\"marksaleMain2020\":\"可口可乐、招商局物流、长春一汽、京东物流、顺丰物流\",\"marksaleMain2021\":\"可口可乐、招商局物流、长春一汽、京东物流、顺丰物流\",\"marksaleRevenue2019\":\"1173\",\"marksaleRevenue2020\":\"2102\",\"marksaleRevenue2021\":\"1833\",\"scholarCooperation\":\"北京邮电大学合作成立Fab.X人工智能联合研究院\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"系统集成\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"北京航空航天大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"王利强\",\"techinvLeader2Achievement\":\"研究方向为计算机视觉领域，主要包括三维重建、视觉测量、视频流技术、人脸识别及处理、AI目标识别、ROS开发以及SLAM技术等领域，特别是基于双目和多视的三维重建和测量技术，熟悉摄像机标定、自标定，多摄像机在有无公共视场下的位置校准、结构光标定及测量、图像点线特征的提取及匹配、立体图像对的稀疏匹配和稠密匹配、三维重建、三维立体显示、人脸识别、ADAS、自动驾驶等。硕士期间提出基于点特征的Radon变换检测建筑轮廓线特征；博士期间提出基于特征匹配的扩展稠密匹配方法，该方法对宽窄基线图像均有效，该方法当时在Middlebury网站1个像素误差排名87位，0.5个像素误差排名62位，在KITTI网站3个像素误差排名38位，5个像素误差排名35位；提出一种基础矩阵的多级加权解法，该方法通过随机场景可估算出两幅图像不同视点位置关系。在恒润科技工作期间，独立完成RTSP视频流推发，其中包括嵌入式端，基于GStreamer和live555将摄像头采集，并以RTSP流在3G/4G或局域网环境下推送到外网服务器，并实现远程控制技术。在中天易观期间，主要从事三维重建软件的核心技术开发和其他项目相关技术支持，主要包括PMVS和SGM算法开发及实现，通过SSE指令集实现对SGM算法的加速；并通过orb-slam和okvis等v-slam算法获取相机姿态。在华为工作期间通过深度学习方法进行特征点检测，实现基于单张图像的人脸三维重建和人脸无缝融合实时处理，并对存在大面积空洞区域的ToF深度图进行有效修补。在爱动超越期间基于项目需求实现AI识别算法在智能终端上的工程化实时检测、并在AGV上开发基于ROS系统框架的自动驾驶技术，在已实现基于激光SLAM技术上进行组合导航开发。\\n田希山, 王利强. 基于SIFT特征的视频图像匹配研究. 科学技术与工程, 2012, 12(29): 7749-7753.\\n学术论文：\\n1.王利强, 刘震, 张钟华. 双目视觉中空间圆弧的高精度测量方法. 仪器仪表学报, 2013, 34(10):  2395-2400.\\n2. L. Wang, Z. Liu, Z. Zhang. Feature Based Stereo Matching using Two-step Expansion. Mathematical Problems in Engineering, 2014, 12.\\n3. L. Wang, Z. Liu, Z. Zhang. Efficient image features selection and weighting for estimating fundamental matrix. IET: Computer Vision, 2015.07.\\n4. L. Wang, Z. Liu, Z. Zhang. An on-line calibration algorithm for external parameters of visual system based on binocular stereo cameras. In SPIE Proc. of International Symposium on Optoelectronic Technology and Application: Image Processing and Pattern Recognition, 2014.05.\\n5. 王利强. 双目立体视觉匹配与重建方法研究.博士毕业论文，2015.\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"2015.7\\t2016.12\\t北京经纬恒润科技有限公司\\t软件工程师\\n2016.12\\t2018.9\\t北京中天易观信息技术有限公司\\t算法工程师\\n2018.10\\t2019.10\\t北京华为数字技术有限公司\\t高级工程师\\n2019.11\\t至今\\t爱动超越人工智能（北京）有限公司\\tFab.X研究院院长\\n\",\"techinvLeader2Graduate\":\"北京大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"高志勇\",\"techinvMoney2019\":\"632\",\"techinvMoney2020\":\"473\",\"techinvMoney2021\":\"412\",\"techinvTechAllAmount\":36,\"techinvTechDoctorAmount\":1,\"techinvTechMasterAmount\":4,\"techinvTechResearcherAmount\":18,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"2018年年度工业级智能设备\\t移动智能终端技术创新与产业联盟\\n2019最具颠覆性创新潜力榜\\t中国科协企业创新服务中心\\n北京市2019科技计划\\t北京市东城区科学技术和信息化局\\n北京市2020科技计划\\t北京市东城区科学技术和信息化局\\n北京市优秀创业项目\\t北京市人力资源和社会保障局\\n北京市优秀人才培养项目\\t北京市人力资源和社会保障局\\n工信部2019制造业与互联网融合发展试点示范项目\\t工业和信息化部\\n2020年工信部支撑疫情防控和复工复产的工业互联网平台解决方案\\t工业和信息化部\\n2019年联通AIIA人工智能5G网络应用创新大赛二等奖\\n\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":15,\"techprodPatentEffectiveAmount\":1,\"techprodPatentInfluence\":\"10\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108872000}"
    }
  }, {
    "id": "北京瑞莱智慧科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166156414983",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京瑞莱智慧科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"韦云霞\",\"basicContractPhone\":\"18610344214\",\"basicEnglishTitle\":\"RealAI\",\"basicTitle\":\"北京瑞莱智慧科技有限公司\",\"compreQuatification\":\"2019年 北京市科委、市财政局、市税务局授予《国家高新技术企业》\\n2021年 中关村管委会授予《中关村高新技术企业》\\n2022年 北京市经济和信息化局授予《北京市专精特新“小巨人”企业》\\n2022年 北京中物联联合认证中心授予《质量管理体系认证》\\n2021年 北京中物联联合认证中心授予《职业健康安全管理体系认证》\\n2021年 北京中物联联合认证中心授予《环境管理体系认证》\\n2021年 广汇联合（北京）认证服务有限公司授予《信息安全管理体系认证》\\n2022年 北京中经科环质量认证有限公司授予《信息技术服务管理体系认证》\\n2022年 北京中经科环质量认证有限公司授予《隐私信息管理体系认证》\\n2022年 北京中经科环质量认证有限公司授予《业务连续性管理体系认证》\\n2020年 北京市公安局海淀分局授予《信息系统安全等级保护备案证明-3级》\",\"compreQulification\":\"国高新,省高新,省市级专精特新,国家级专精特新\",\"compreQulificationOther\":\"北京市知识产权试点单位，中关村高新技术企业，瞪羚企业，\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"2022年 作为参与单位，参与《信息安全技术 人脸比对模型安全技术规范》项目的编写\\n2021年 作为参与单位，参与《多方安全计算金融应用评估规范》项目的编写\\n2022年 作为参与单位，参与《联邦学习金融应用技术要求》项目的编写\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"2019年 北京市科委、市财政局、市税务局授予《国家高新技术企业》\\n2021年 中关村管委会授予《中关村高新技术企业》\\n2022年 北京市经济和信息化局授予《北京市专精特新“小巨人”企业》\\n2022年 北京中物联联合认证中心授予《质量管理体系认证》\\n2021年 北京中物联联合认证中心授予《职业健康安全管理体系认证》\\n2021年 北京中物联联合认证中心授予《环境管理体系认证》\\n2021年 广汇联合（北京）认证服务有限公司授予《信息安全管理体系认证》\\n2022年 北京中经科环质量认证有限公司授予《信息技术服务管理体系认证》\\n2022年 北京中经科环质量认证有限公司授予《隐私信息管理体系认证》\\n2022年 北京中经科环质量认证有限公司授予《业务连续性管理体系认证》\\n2020年 北京市公安局海淀分局授予《信息系统安全等级保护备案证明-3级》\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"中关村科学城管理委员会  《海淀区人工智能关键技术源头创新专项  安全可控人工智能核心算法与产业平台项目》\",\"govsuppCarryProvin\":\"工信部  《新一代人工智能产业创新重点任务》\\n科技部 《安全大脑国家新一代人工智能创新平台》\\n科技部  《面向人工智能伪造音视频的鉴定和治理关键技术研究》\",\"id\":\"1643792399603400706\",\"investFinancing\":\"50000\",\"investInstitution\":\"中国互联网投资资金（有限合伙）；北京考拉鲲鹏科技成长基金合伙企业（有限合伙）等\",\"investRound\":\"A+轮\",\"marksaleFamouse\":\"中国电信，中国石油，中国烟草，中国航天，建设银行，交通银行，清华大学，公安部第一研究所，中国信通院等\",\"marksaleMain2020\":\"中国移动，中国联通，中融信托，浦发银行，蚂蚁金服\",\"marksaleMain2021\":\"公安部第一研究所，公安部第三研究所，工信安全中心，中原银行，长安汽车\",\"marksaleRevenue2019\":\"295\",\"marksaleRevenue2020\":\"3337\",\"marksaleRevenue2021\":\"5258\",\"scholarCooperation\":\"清华大学，《科技创新2030-“新一代人工智能”重大项目》\\n北京智源人工智能研究院，《人脸识别AI安全平台建设项目》\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"清华大学\",\"techinvLeader1IsOther\":\"亚洲第二位IEEE AI 10 to Watch学者\",\"techinvLeader1Name\":\"朱军\",\"techinvLeader2Achievement\":\"朱军教授担任清华人工智能研究院基础理论研究中心主任，清华智能技术与系统国家重点实验室主任，北京智源人工智能研究院机器学习重大方向首席科学家，第二届“科学探索奖”获得者、MIT TR35中国区先锋者、亚洲第二位IEEE AI 10 to Watch学者、“2011-2021年CSRankings计算机学科排名”机器学习领域中国学者中第一位、入选国家“万人计划”领军计划，中国唯一PAMI副主编，连续多年担任ICML、NIPS领域主席。\\n朱军教授主要从事机器学习、贝叶斯方法、深度学习、数据挖掘等研究工作。围绕机器学习基础理论、高效算法，结合互联网数据挖掘、社交网络分析、多模态数据融合、网络推荐等多个典型应用场景，提出多种有效的计算模型和算法。目前，多项研究成果已连续多年在机器学习顶级国际会议和期刊ICML、NIPS、IJCAI、AAAI、 JMLR、PAMI等发表论文100余篇。研究工作得到国家973计划、自然科学基金优青基金和重点基金等项目的支持，入选“清华大学221基础研究人才支持计划”。\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"2009-2011年 卡内基梅隆大学博士后、项目科学家\\n2011-2017年 清华大学计算机系副教授，智能技术与系统国家重点实验室副主任\\n2015-2018年 卡内基梅隆大学机器学习系兼职教授\\n2018年 创立RealAI并担任首席科学家\\n2019年 清华大学人工智能研究院院长助理兼基础理论研究中心主任\",\"techinvLeader2Graduate\":\"清华大学\",\"techinvLeader2Is\":\"万人计划\",\"techinvLeader2IsOther\":\"吴文俊人工智能优秀青年；北京市科技新星\",\"techinvLeader2Name\":\"田天\",\"techinvMoney2019\":\"950\",\"techinvMoney2020\":\"1849\",\"techinvMoney2021\":\"3784\",\"techinvTechAllAmount\":268,\"techinvTechDoctorAmount\":40,\"techinvTechMasterAmount\":80,\"techinvTechResearcherAmount\":137,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"人工智能专业赛特别奖  2021年  北京瑞莱智慧科技有限公司\\nGeekPwn2020CAAD虚假人脸AI识别大赛冠军  2021年  北京瑞莱智慧科技有限公司\\n中国人工智能大赛--“视频深度伪造检测”赛题A级  2021年  北京瑞莱智慧科技有限公司\\n中国人工智能大赛--“深度伪造视频生成方法识别”赛题B级  2021年  北京瑞莱智慧科技有限公司\\n“CAAD CTF图像对抗样本挑战赛”及“CAAD隐身挑战赛”两项冠军  2019年  北京瑞莱智慧科技有限公司\\n\",\"techprodAwardNation\":\"《世界互联网领先科技成果奖》 2021年 \",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"吴文俊人工智能优秀青年奖—田天  2021年\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"世界互联网领先科技成果  2021年  北京瑞莱智慧科技有限公司\\n2022年中国国际大数据产业博览会--领先科技成果奖“新产品”  2022年  北京瑞莱智慧科技有限公司\\n北京国家人工智能创新应用先导区示范案例  2022年  北京瑞莱智慧科技有限公司\\n网信办人工智能企业典型应用案例  2021年  北京瑞莱智慧科技有限公司\\n2021AIWIN应用创新赛-AI数字未来奖  2021年  北京瑞莱智慧科技有限公司\\n中国国际高新技术成果交易会 优秀产品奖  2021年  北京瑞莱智慧科技有限公司\\n中关村国际前沿科技创新大赛人工智能领域Top 10  2018年  北京瑞莱智慧科技有限公司\\nGeekPwn2021 G-TOP年度极客榜-年度季军  2021年  北京瑞莱智慧科技有限公司\\n第五届浦发银行国际金融科技创新大赛-金奖   2021年  北京瑞莱智慧科技有限公司\\n2021AIWIN应用创新赛-AI数字未来奖  2021年  北京瑞莱智慧科技有限公司\\n\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"4\",\"techprodPatentAmount\":126,\"techprodPatentEffectiveAmount\":69,\"techprodPatentInfluence\":\"1.41\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108885000}"
    }
  }, {
    "id": "北京深睿博联科技有限责任公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166160609282",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京深睿博联科技有限责任公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"魏晶\",\"basicContractPhone\":\"13911006229\",\"basicEnglishTitle\":\"BEIJING DEEPWISE & LEAGUE OF PHD TECHNOLOGY CO. LTD\",\"basicTitle\":\"北京深睿博联科技有限责任公司\",\"compreQuatification\":\"2018年、2021年 由北京市科学技术委员会授予“国新技术企业”证书\",\"compreQulification\":\"国高新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"2022年，作为参与单位，参与《肺结节CT影像采集和数据处理技术规范》、《肺结节CT影像标注和质量控制技术规范》项目的编写\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"肺结节CT影像辅助检测软件\\t国械注准20203210920\\t三类医疗器械\\n肺炎CT影像辅助分诊与评估软件\\t国械注准20213210211\\t三类医疗器械\\n儿童手部X射线影像骨龄辅助评估软件\\t国械注准20223210295\\t三类医疗器械\\n医学影像处理软件(DW-Diag Analyzer)\\t浙械注准20182700093\\t二类医疗器械\\n医学影像处理软件（DW-Cloud RIS)\\t浙械注准20192210385\\t二类医疗器械\\n医学影像处理软件(DW-HNCTAS)\\t浙械注准200202210763\\t二类医疗器械\\n医学影像处理软件(冠脉CTA)\\t浙械注准20212210022\\t二类医疗器械\\nCT影像处理软件（冠脉钙化积分）\\t浙械注准20212210577\\t二类医疗器械\\n脑灌注CT影像处理软件\\t浙械注准20222210085\\t二类医疗器械\\n\\n\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"1北京市自然科学基金重点项目\\t\\n基于神经网络深度学习的脑卒中相关血管管壁斑块量化分析及破裂风险预警模型研究\\n2上海市卫生系统先进适宜技术推广项目\\t\\n智能云平台在三级医疗体系中的推广应用\\n3潍坊医学院教育教学改革与研究立项\\t\\n医学影像学专业临床教学方案优化探索\\n4浙江省医药卫生科技计划面上项目\\t\\n江浙地区4-18岁儿童骨龄和生长发育人工智能预测系统的临床效能分析\\n5北京市科委“AI+健康协同创新培育”专项课题\\t\\n肺部病变多模态影像和乳腺癌 X 线医学人工智能标准数据集研究\\n6北京市科委医药协同科技创新研究项目\\t\\n基于新一代人工智能技术的肺癌智能化诊断产品解决方案及示范应用\\n72020年三年滚动项目\\t\\n基于CT影像的深度学习技术在肺结核胸部早期诊断中的应用研究\\n8首都卫生发展科研专项项目\\t\\n基于深度学习神经网络对不同体质儿童骨龄发育规律的量化分析和应用研究\\n9上海市经信委“上海市人工智能试点应用场景\\\"项目\\t\\n基于人工智能的儿童超声心动图标准切面识别及异常筛选系统\\n10浙江省科技厅省级重点研发计划\\t\\n医学人工智能技术与系统研发-面向医疗的人工智能创新平台\\n11院级军事医学科研专项\\t\\n基于深度学习技术DR人工智能诊断及教学系统研发\\n12海南省科学技术厅关于申报新型冠状病毒感染肺炎防治应急科研项目\\n基于胸部CT的新型冠状病毒肺炎人工智能影像诊断系统及风险预测\\n13贵州省2020年度科技支撑计划“防控新型冠状病毒技术攻关及集成应用”项目\\nCT影像组学联合临床信息预测新型冠状病毒肺炎进展的多中心研究\\n14杭州市余杭区新型冠状病毒感染的肺炎防治技术研究项目\\t\\n新型冠状病毒肺炎影像云AI筛查系统\\n15北京市科委“AI+健康协同创新培育”专项课题\\t\\n基于AI技术的新型冠状病毒肺炎影像学精准诊断系统构建与应用\",\"govsuppCarryProvin\":\"科技部国家重点研发计划“科技创新2030-新一代人工智能”重大专项（2个）\\n科技部国家重点研发计划“科技创新2030-脑科学与类脑研究”重大专项\\n科技部国家重点研发计划“科技创新2030-常见多发病防治研究”\\n科技部国家重点研发计划“数字诊疗装备研发”\\n科技部国家重点研发计划“主动健康和老龄化科技应对 ”\\n科技部国家重点研发计划“现代服务业共性关键技术研发及应用示范”项目\\n2018年国家自然科学基金(重点项目)\\n基于机器学习的颅内动脉瘤自动化检测、破裂和复发风险模型构建和应用研究\\n2019年国家自然科学基金\\n基于预后的肺亚实性结节人工智能辅助影像决策系统的建立\\n2019年国家自然科学基金\\n基于CT影像组学预测转移性膀胱癌PD-1/PD-L1抑制剂治疗疗效的研究\\n2020年国家自然科学基金\\n基于多模态融合的儿童慢性咳嗽人工智能辅助诊断技术研究\\n2020年国家自然科学基金\\n基于CT影像特征的肺栓塞人工智能辅助评估系统的创建与优化\\n2021年国家自然科学基金\\n面向儿童喘息症状辅助诊断的可解释性人工智能技术研究\\n2021年国家自然科学基金\\n跨尺度影像组学在亚临床冠状动脉粥样硬化斑块进展早期预警及预后价值中的研究\\n2021年国家自然科学基金\\n基于分层级多尺度注意力网络的颅内小动脉瘤自动化检测模型的构建与应用研究\\n2021年国家自然科学基金\\n基于 CT 的非 ST 段抬高型急性冠状动脉综合征人工智能风险预测模型\",\"id\":\"1643792399691481090\",\"investFinancing\":\"暂时保密\",\"investInstitution\":\"暂时保密\",\"investRound\":\"暂时保密\",\"marksaleFamouse\":\"北京大学第三医院、中日友好医院、杭州市西湖区卫生健康局、广州市第一人民医院、浙江大学医学院附属邵逸夫医院等\",\"marksaleMain2020\":\"浙江大学医学院附属邵逸夫医院，杭州市西湖区卫生健康局，山东大学齐鲁医院（青岛），中日友好医院，广州市第一人民医院\",\"marksaleMain2021\":\"北京大学第三医院，天津市肿瘤医院，烟台毓璜顶医院，重庆医科大学附属第一医院，海南省人民医院\\n\",\"marksaleRevenue2019\":\"36\",\"marksaleRevenue2020\":\"235\",\"marksaleRevenue2021\":\"39\",\"scholarCooperation\":\"上海交通大学医疗机器人研究院-深睿医疗联合实验室、中国科学院自动化研究所-深睿医疗联合实验室、天津医科大学-深睿医疗医学人工智能技术联合实验室、中日友好医院-深睿医疗肺部影像人工智能多中心研究联合实验室、厦门大学-深睿医疗联合实验室\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"加州大学伯克利分校计算机博士\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"俞益洲\",\"techinvLeader2Achievement\":\"IEEE Fellow，ACM杰出科学家。多次与 eBay 研究院,  谷歌大脑，微软研究院等机构合作。并多次在微软亚洲研究院任客座研究员。近年来多次在人工智能，机器视觉，数字家庭有关的国际会议做特邀报告，并应邀担任计算机视觉和可视媒体领域重要国际会议的程序委员会委员或主席。目前或曾经担任多个IET Computer Vision, IEEE Transactions on Visualization and Computer Graphics, The Visual Computer等国际学术期刊副主编。\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"香港大学和美国伊利诺依大学香槟分校终身教授、深睿医疗首席科学家\",\"techinvLeader2Graduate\":\"中科院计算所计算机系统结构硕士学位\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"李一鸣\",\"techinvMoney2019\":\"3684\",\"techinvMoney2020\":\"5170\",\"techinvMoney2021\":\"6073\",\"techinvTechAllAmount\":248,\"techinvTechDoctorAmount\":16,\"techinvTechMasterAmount\":59,\"techinvTechResearcherAmount\":151,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"2019天池大赛——数字人体赛场（全球数据智能大赛2019）  第一名\\n\",\"techprodAwardNation\":\"国家科学技术进步奖 2021年 二等奖\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"2019 AIIA人工智能大赛医疗专项赛“深睿脑卒中智能辅助诊断系统” 第二名\\n2020 AIIA杯人工智能医疗大赛\\\" 深睿心脑血管 CTA 智能辅助诊断系统\\\" 第一名\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"50\",\"techprodPatentAmount\":244,\"techprodPatentEffectiveAmount\":61,\"techprodPatentInfluence\":\"2.9\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108897000}"
    }
  }, {
    "id": "科讯嘉联信息技术有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166160609283",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "科讯嘉联信息技术有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"汪京京\",\"basicContractPhone\":\"13615657979\",\"basicEnglishTitle\":\"Kosun Information Technology Co.\",\"basicTitle\":\"科讯嘉联信息技术有限公司\",\"compreQuatification\":\"2019年，由合肥高新技术产业开发区管理委员会授予《2019年度合肥高新区瞪羚培育企业》；\\n2019年，由北京联合智业认证有限公司授予《ISO质量管理体系认证证书》，《ISO环境管理体系认证证书》，《SO职业健康安全管理体系认证证书》；\\n2020年，由中国电子工业标准化技术协会授予《信息技术服务标准符合性证书》；\\n2020年，由合肥高新技术产业开发区管理委员会授予《2020年度合肥高新区瞪羚培育企业》\",\"compreQulification\":\"国高新,国家级专精特新\",\"compreQulificationOther\":\"智能语音通信产业联盟发起单位，智能语音通信产业联盟理事单位，增值电信行业优秀企业奖，最佳智能融合解决方案\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"2020年作为参编单位参与编制安徽省服务贸易和服务外包协会关于《客服领域人工智能训练师职业能力要求》团体标准\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"CMMI DEV/3，NOA信息安全管理系统资质，ISO质量管理体系认证证书，ISO环境管理体系认证证书，ISO职业健康安全管理体系认证证书\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792399779561473\",\"investFinancing\":\"3000\",\"investInstitution\":\"广东胜睿资本管理中心（有限合伙），广东顺德元睿股权投资管理中心（有限合伙人）\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"太平，太保，圆通，德邦，海尔，松下，格力，TCL，南京银行，安徽省公安厅，合肥市公安局等\",\"marksaleMain2020\":\"圆通，德邦，海尔，太平，太保\",\"marksaleMain2021\":\"格力，TCL，南京银行，安徽省公安厅，合肥市公安局\",\"marksaleRevenue2019\":\"6843\",\"marksaleRevenue2020\":\"7621\",\"marksaleRevenue2021\":\"7209\",\"scholarCooperation\":\"无\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"安徽\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"N\",\"techcontIsStockPool\":\"N\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"软件平台包含前中后台\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"中国科学技术大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"李钊辉\",\"techinvLeader2Achievement\":\"科大讯飞第一代声纹识别系统研发负责人，国内最早开展AI 技术在客服中的应用，成为2008年世博会创新产品；首次将智能客服应用于电话营销，并达到接近人工营销水平；合肥市公安信息化专家库AI评审专家 。 \",\"techinvLeader2Education\":\"学士\",\"techinvLeader2Experience\":\"2006-2016：科大讯飞      研发工程师、客服方案和产品负责人 \\n2016-至今:科讯嘉联信息技术有限公司       研发和产品负责人 \",\"techinvLeader2Graduate\":\"安徽师范大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"卫海智\",\"techinvMoney2019\":\"2395\",\"techinvMoney2020\":\"3247\",\"techinvMoney2021\":\"2942\",\"techinvTechAllAmount\":140,\"techinvTechDoctorAmount\":1,\"techinvTechMasterAmount\":11,\"techinvTechResearcherAmount\":89,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"全国人工智能技术创新大赛全国二等奖（第五名）\\n2021年“创响中国”安徽省创新创业大赛二等奖\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":29,\"techprodPatentEffectiveAmount\":20,\"techprodPatentInfluence\":\"3\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108911000}"
    }
  }, {
    "id": "北京龙田华远科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166160609284",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京龙田华远科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"刘女士\",\"basicContractPhone\":\"15535270144\",\"basicEnglishTitle\":\"Beijing Longtian Huayuan Technology Co., Ltd\",\"basicTitle\":\"北京龙田华远科技有限公司\",\"compreQuatification\":\"2013年 软件企业认定证书（北京市经济和信息化委员会）\\n2020年 国家高新技术企业证书\\n2022-04-28\\t矿用本安型拾音器防爆合格证\\n2022-06-20\\t矿用隔爆兼本安型采集箱防爆合格证\\n2022-06-20\\t矿用隔爆型激光雷达传感器防爆合格证\\n2022-06-20\\t矿用隔爆型兼本安型计算机防爆合格证\",\"compreQulification\":\"国高新\",\"compreQulificationOther\":\"软件企业\",\"compreStandardIndustry\":\"参与工信部组织的《基于矿山大模型的人工智能系统技术要求》行业标准\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"2021.7.7  AI视频分析系统软件V1.0  通过CSTC中国软件评测中心测试\\n2021.7.7  视频跟机切换软件V1.0     通过CSTC中国软件评测中心测试\\n2022-04-28\\t矿用本安型拾音器防爆合格证-国家安全生产重庆矿用设备检测检验中心\\n2022-06-20\\t矿用隔爆兼本安型采集箱防爆合格证-国家安全生产重庆矿用设备检测检验中心\\n2022-06-20\\t矿用隔爆型激光雷达传感器防爆合格证-国家安全生产重庆矿用设备检测检验中心\\n2022-06-20\\t矿用隔爆型兼本安型计算机防爆合格证-国家安全生产重庆矿用设备检测检验中心\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"数网中心机房维保项目\\n不连沟激光秤鲁班秤项目\\n综采工作面视频智能识别系统\\n基于视频识别与激光雷达的皮带称重系统研究与开发\\n华电力拓小纪汗11220工作面AI智能分析分子系统安装工程\",\"govsuppCarryProvin\":\"基于固态激光雷达的综放工作面三机复杂空间关系监视系统的研究与开发\\n工作面刮板输送机煤流负荷检测系统\\n乌海能源基于音频、视频多传感器融合的智能洗选（浮选）系统研究项目\\n基于5.8G的分布式高速无线物联智能组网技术的研究与应用\\n乌海能源基于音视频的放顶煤煤矸智能识别系统技术研究\\n三元煤业智能化煤矿建设项目\\n山西人工智能矿山创新实验室有限公司\\n山西焦煤能源集团股份有限公司\\n晋能控股煤业集团有限公司\\n阳泉煤业（集团）股份有限公司\",\"id\":\"1643792399867641858\",\"investFinancing\":\"1000\",\"investInstitution\":\"上海龙客科技合伙企业(有限合伙)\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"国家能源集团、晋能控股集团、山东能源集、陕煤集团、山西焦煤集团、山西潞安集团、华阳集团、山西人工智能矿山创新实验室、北京华电力拓能源科技有限公司\",\"marksaleMain2020\":\"大同煤矿集团有限责任公司\\n同煤集团永定庄煤业有限公司\",\"marksaleMain2021\":\"国家能源集团乌海能源有限责任公司\\n山西潞安采掘设备有限责任公司\\n北京华电力拓能源科技有限公司\\n晋能控股煤业集团有限公司信息化中心\\n山西人工智能矿山创新实验室有限公司\",\"marksaleRevenue2019\":\"748\",\"marksaleRevenue2020\":\"324\",\"marksaleRevenue2021\":\"1377\",\"scholarCooperation\":\"1、2019年 阳泉煤业（集团）股份有限公司—基于固态激光雷达的综采工作面三机复杂空 间关系监视系统的研究与开发\\n2、2019年 大同煤矿集团有限责任公司—基于固态激光雷达的综放工作面三机复杂空间关 系监视系统的研究与开发\\n3、2020年 大同煤矿集团有限责任公司—煤炭洗选分公司自动化办公管理系统软件项目\\n4、2020年 大同煤矿集团有限责任公司—基于视频识别与激光雷达的皮带称重系统研究与开发\\n5、2020年北京华电力拓能源科技有限公司—华电力拓小纪汗 11220 工作面 AI 智能分析分子系统安装工程采购\\n6、2021年 山西焦煤能源集团股份有限公司西山分公司—工作面刮板输送机煤流负荷检测系统\\n7、2021年 国家能源集团乌海能源有限责任公司—乌海能源基于音频、视频多传感器融合 的智能洗选（浮选）系统研究项目\\n8、2021年 国家能源集团乌海能源有限责任公司—基于 5.8G 的分布式高速无线物联智能 组网技术的研究与应用\\n9、2021年 山西潞安采掘设备有限责任公司—惯导系统\\n10、2021年 国家能源集团乌海能源有限责任公司—乌海能源基于音视频的放顶煤煤矸智能识别系统技术研究\\n\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"N\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"算法模型,系统集成,软件平台包含前中后台,后台,前台\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"中国矿业大学（北京）\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"李昕\",\"techinvLeader2Achievement\":\"中国矿业大学（北京） 工学博士 毕业；三家Top500工作经历、拥有20年以上丰富的产品、市场营销、项目管理经验\\n发表核心论文5篇，授权发明专利1项，实用新型专利7项\\n主要论文：\\n1、一种高效的高维异常数据挖掘算法--《计算机工程》2010年21期；\\n2、用于文档聚类的间隔流形学习算法研究--《计算机工程》2010年36期；\\n3、新型矿用线性wifi线缆无线覆盖的研制与应用--《同煤科技》2016年4期；\\n4、人工智能在煤炭行业的创新与思考--《科学与技术》2021年第24期；\\n5、人工智能在煤炭行业的应用探索--《中国科技人才》2021年第23期。\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"2003-2004 日本住友集团  中国市场产品策划 负责公司注塑机器人中文用户手册、宣传彩页等翻译、宣发\\n2004-2005 中国网通国际产品经理、领导APCN2中日海底光缆扩容项目\\n2006-任中国网络通信集团市场部行业营销经理，领导并完成中国网通奥运营销策划推广，中国网通本地网电信接入营销等项目\\n2008-2010  任澳大利亚电信国际公司项目经理，领导并完成中澳2008北京奥运会高清电视转播、华为全球MPLS网络等项目\\n2017年、2020年、2021年分别获得煤炭工业协会科技进步三等奖、二等奖\\n2018年参与主导了“国家十三五科技重大攻关项目—千万吨级特厚煤层智能化综放开采关键技术及示范”\\n2020年被重点矿区陕西、鄂尔多斯境内唯一一所大学，榆林学院聘请为客座教授\",\"techinvLeader2Graduate\":\"中北大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"荆瑞俊\",\"techinvMoney2019\":\"201\",\"techinvMoney2020\":\"100\",\"techinvMoney2021\":\"373\",\"techinvTechAllAmount\":70,\"techinvTechDoctorAmount\":4,\"techinvTechMasterAmount\":6,\"techinvTechResearcherAmount\":46,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"1、2021 年科大讯飞 iFLYTEKA.I.开发者大赛第四名\\n\",\"techprodAwardNation\":\"中国煤炭工业科学技术奖\\n 获取时间：2017、2020、2021\\n 获奖类型：三等奖一项，二等奖两项 \\n获奖项目： （1）矿用 WIFI 线缆系统研究与应用 （2）基于多传感器融合的煤流智能测量系统的研发及应用 （3）基于高精度惯导的智能综放工作面采煤机轨迹监测系统的研究与应用\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"2021年 “科创中国”创新创业投资大会全国百强\\n1、2018 年金华市“婺星回归”创业赛三等奖 \\n2、2020 年晋城市“全球光机电产业”创业赛三等奖 \\n3、2021 年“科创中国”创新创业投资大会杭州分会场优秀项目\\n4、2022年黄山“迎客松”杯创新创业大赛百强项目\\n5、2、2022年“率先杯”未来技术创新大赛北京赛区提名奖\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"23\",\"techprodPatentAmount\":6,\"techprodPatentEffectiveAmount\":4,\"techprodPatentInfluence\":\"1\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108923000}"
    }
  }, {
    "id": "北京文因互联科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166160609285",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京文因互联科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"廖珂莹\",\"basicContractPhone\":\"19535680904\",\"basicEnglishTitle\":\"Memect\",\"basicTitle\":\"北京文因互联科技有限公司\",\"compreQuatification\":\"1. 2021年9月，由美国卡耐基梅隆大学软件工程研究所（SEI），授予CMMI3级认证证书\\n2. 2021年12月，由中标联合（北京）认证有限公司，授予ISO9001质量管理体系认证证书\",\"compreQulification\":\"省高新\",\"compreQulificationOther\":\"北京市高新技术企业\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"2009年，作为参编，参与OWL2 知识图谱语言国际标准的撰写\\n2016年，作为参编，参与W3C开放数据和知识图谱国际标准的制定\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792399955722241\",\"investFinancing\":\"7639\",\"investInstitution\":\"无量资本、德同资本、合肥高新投、合肥创新投、国科新能、皖信投资\",\"investRound\":\"B轮\",\"marksaleFamouse\":\"全国股份转让系统，平安资管，招商银行，平安银行，平安证券，广发证券，长江证券，宁波银行，南京银行，联合资信，银行间市场交易协会等\",\"marksaleMain2020\":\"1. 广发证券股份有限公司\\n2. 平安资产管理有限责任公司\\n3. 全国中小企业股份转让系统有限责任公司\\n4. 嘉实基金管理有限公司\\n5. 上证所信息网络有限公司\",\"marksaleMain2021\":\"1. 平安资产管理有限责任公司\\n2. 宁波银行股份有限公司\\n3. 中国银行间市场交易商协会\\n4. 联合资信评估股份有限公司\\n5. 泰康资产管理有限责任公司\",\"marksaleRevenue2019\":\"450\",\"marksaleRevenue2020\":\"491\",\"marksaleRevenue2021\":\"934\",\"scholarCooperation\":\"无\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"算法模型,系统集成,SDK,前台,中台,后台,软件平台包含前中后台\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"美国爱荷华州立大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"鲍捷\",\"techinvLeader2Achievement\":\"专利1：Computing system with iterative knowledge management mechanism and method of operation thereof，US 20140279726 A1，Sep 2014.\\n专利2：一种基于知识库推理的相似上市公司企业检索分类方法及系统，CN201710259506.8，2017年4月\\n专利3：基于文本语义的篇章结构分析方法，CN201710307876.4，2017年5月\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"2010年2月至2011年4月，任麻省理工大学人工智能实验室，访问研究员\\n2011年10月至2013年06月，任三星研究院，资深研究工程师\",\"techinvLeader2Graduate\":\"西班牙马德里理工大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"宋劼\",\"techinvMoney2019\":\"722\",\"techinvMoney2020\":\"481\",\"techinvMoney2021\":\"980\",\"techinvTechAllAmount\":122,\"techinvTechDoctorAmount\":3,\"techinvTechMasterAmount\":21,\"techinvTechResearcherAmount\":76,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":2,\"techprodPatentEffectiveAmount\":2,\"techprodPatentInfluence\":\"13.5\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108936000}"
    }
  }, {
    "id": "北京麦飞科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166160609286",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京麦飞科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"王鑫\",\"basicContractPhone\":\"18010100298\",\"basicEnglishTitle\":\"Beijing Mcfly Technology Limited Co.\",\"basicTitle\":\"北京麦飞科技有限公司\",\"compreQuatification\":\"2019-2022 国家高新技术企业\\nIS09001质量管理体系认证\\n2022.1 国家军用标准质量管理体系\\n2022.3 ISO27001 信息安全管理体系\\n2022.3 AAA诚信企业认证\",\"compreQulification\":\"国高新,省高新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"1 信息技术 智能语音交互系统      （ 已实施： GB/T 36464.1-2020）\\n2 智能制造  人机交互系统语义库技术要求    （ 已实施： GB/Z 38623-2020）\\n3 信息技术 智能语音交互测试方法 第1部分：语音识别  （正在批准，计划号：20194128-T-469）\\n4 信息技术 智能语音交互测试 第2部分：语义理解  （正在批准，计划号：20194129-T-469）\\n5 信息技术 人工智能 术语  （正在批准，计划号：20190851-T-469）\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792400039608321\",\"investFinancing\":\"10000\",\"investInstitution\":\"高捷、广发乾和、百度BV、中科创星、峰瑞资本、湖畔山南\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"北大荒、京东\",\"scholarCooperation\":\"中国科学院遥感与数字地球研究所\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"中国科学院遥感所\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"宫华泽\",\"techinvLeader2Achievement\":\"无\",\"techinvLeader2Is\":\"否\",\"techinvMoney2019\":\"500\",\"techinvMoney2020\":\"200\",\"techinvMoney2021\":\"100\",\"techinvTechAllAmount\":10,\"techinvTechDoctorAmount\":2,\"techinvTechMasterAmount\":3,\"techinvTechResearcherAmount\":8,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":37,\"techprodPatentInfluence\":\"??\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108948000}"
    }
  }, {
    "id": "中科极限元（杭州）智能科技股份有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166160609287",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "中科极限元（杭州）智能科技股份有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"刘灿\",\"basicContractPhone\":\"18511895619\",\"basicEnglishTitle\":\"JIXIANYUAN\",\"basicTitle\":\"中科极限元（杭州）智能科技股份有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"无\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1680745623000,\"govsuppCarryNation\":\"1  个   多模态虚实融合人机交互系统与应用示范\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1643792400144465922\",\"investFinancing\":\"1000\",\"investInstitution\":\"清华长三角研究院\",\"investRound\":\"1\",\"marksaleFamouse\":\"中国中车   VIVO    百度   腾讯   奇虎360   网信办    公安部\",\"marksaleMain2020\":\"客户A  客户B   中国中车    腾讯   快手\",\"marksaleMain2021\":\"航天二院    客户C     浙江天猫   汉王   南京烽火星空\",\"marksaleRevenue2019\":\"1405\",\"marksaleRevenue2020\":\"1173\",\"marksaleRevenue2021\":\"989\",\"scholarCooperation\":\"中科院自动化研究所 成立“智能交互联合实验室”\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"杭州\",\"techcontIsStable\":\"Y\",\"techcontIsStock\":\"N\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"中国科学院自动化研究所\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"温正棋\",\"techinvLeader2Achievement\":\"主要研究领域是语音技术处理以及深度学习技术在语音技术中的应用，包括语音合成、语音识别、声纹识别、语音增强、语音鉴伪等，近年来也在数据分析领域开展相关研究工作，先后负责和参与了国家级项目（863计划、国家自然科学基金、科技部重点研发计划）和企业级项目40余项，在包括IEEE TASLP、Speech Communication、ICASSP、Interspeech等语音领域国内外学术重要期刊和会议上发表论文120余篇，申请国内发明专利20余项。产品成果应用到百度、腾讯、奇虎360、搜狗、VIVO等大型互联网公司，还包括中车、建行、中电科等大中型国企央企，以及网信办、公安部门等政府职能部门。\\n1 论文：Improving Deep Neural Network Based Speech Synthesis through Contextual Feature Parametrization and Multi-Task Learning.\\nJournal of Signal Processing Systems, 2019\\n领域重要国际期刊, SCI\\n2 论文：The Parameterized Phoneme Identity Feature as a Continuous Real-Valued Vector for Neural Network Based Speech Synthesis INTERSPEECH, 2016\\n顶级国际会议\\n3  论文：Learning auxiliary categorical information for speech synthesis based on deep and recurrent neural networks.\\nISCSLP 2016\\n领域重要国际会议\\n4 论文：Deep neural network based voice conversion with a large synthesized parallel corpus. APSIPA 2016\\n领域重要国际会议\\n5  论文：\\nCTC Regularized Model Adaptation for Improving LSTM RNN Based Multi-Accent Mandarin Speech Recognition.  Journal of Signal Processing Systems, 2018\\n领域重要国际期刊, SCI\\n6 论文：Language-Adversarial Transfer Learning for Low-Resource Speech Recognition IEEE ACM Trans. Audio Speech Lang. Process, 2019\\n顶级国际期刊, SCI\\n7 论文：Forward-Backward Decoding Sequence for Regularizing End-to-End TTS IEEE ACM Trans. Audio Speech Lang. Process, 2019\\n顶级国际期刊, SCI\\n8 论文： \\nIntegrating Knowledge Into End-to-End Speech Recognition From External Text-Only Data. IEEE ACM Trans. Audio Speech Lang. Process, 2021\\n顶级国际期刊, SCI\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"中国科学院自动化研究所副研究员\",\"techinvLeader2Graduate\":\"清华大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2Name\":\"陶建华\",\"techinvMoney2019\":\"305\",\"techinvMoney2020\":\"499\",\"techinvMoney2021\":\"521\",\"techinvTechAllAmount\":110,\"techinvTechDoctorAmount\":5,\"techinvTechMasterAmount\":4,\"techinvTechResearcherAmount\":35,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"5\",\"techprodPatentAmount\":33,\"techprodPatentEffectiveAmount\":25,\"techprodPatentInfluence\":\"??\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108962000}"
    }
  }, {
    "id": "爱笔（北京）智能科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166164803586",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "爱笔（北京）智能科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"李扬\",\"basicContractPhone\":\"15120008251\",\"basicEnglishTitle\":\"Aibee（Beijing）Intelligence Science and Technology Co., Ltd.\",\"basicTitle\":\"爱笔（北京）智能科技有限公司\",\"compreQuatification\":\"2019年获得ISO27001证书；2020年获得ISO27701证书；2019年获得ISO9001证书；2020年获得增值电信业务许可证；2020年获得GDPR资格认证。\",\"compreQulification\":\"国高新,省市级专精特新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1681108473000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1645314304911147009\",\"investFinancing\":\"156000\",\"investInstitution\":\"昆仲资本、红杉资本、真格基金，ClearVue Partners，华润资本、中金资本，小米集团等\",\"investRound\":\"B轮\",\"marksaleFamouse\":\"新世界集团，龙湖地产，万科地产，万达地产，华润集团，中海集团，周大福，小米集团，理想汽车，一汽大众，首都机场，上海虹桥机场，招行银行，建设银行等\",\"marksaleMain2020\":\"K11集团，龙湖集团，中海集团，华润集团，首都机场\",\"marksaleMain2021\":\"K11集团，首都机场，龙湖集团，招商银行，上海浦东虹桥机场\",\"marksaleRevenue2019\":\"4491\",\"marksaleRevenue2020\":\"6457\",\"marksaleRevenue2021\":\"12181\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"0\",\"techcontPatentRatio\":\"0\",\"techdevFormSoft\":\"算法模型,系统集成,SDK\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"宾夕法尼亚大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"林元庆\",\"techinvLeader2Achievement\":\"清华大学光学工程硕士和宾夕法尼亚大学电气工程博士，第十三批国家“千人计划”特聘专家，他在机器学习和计算机视觉等研究领域拥有多年的研究经验和显著成果。\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"曾任百度研究院院长，全面负责百度的硅谷人工智能实验室（SVAIL）、深度学习实验室（IDL），大数据实验室（BDL）、增强现实实验室（ARL）。\\n\\t在加入百度前，曾任NEC美国实验室媒体分析部门主管。其领导的团队取得多项重要计算机视觉技术国际测试世界第一。\",\"techinvLeader2Graduate\":\"哥伦比亚大学\",\"techinvLeader2Is\":\"千人计划\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"乔慧\",\"techinvMoney2019\":\"18852\",\"techinvMoney2020\":\"11052\",\"techinvMoney2021\":\"14962\",\"techinvTechAllAmount\":150,\"techinvTechDoctorAmount\":5,\"techinvTechMasterAmount\":35,\"techinvTechResearcherAmount\":100,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":15,\"techprodPatentEffectiveAmount\":0,\"techprodPatentInfluence\":\"3.17\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681108989000}"
    }
  }, {
    "id": "北京上奇数字科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166164803587",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京上奇数字科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"赵涵诺\",\"basicContractPhone\":\"13552869662\",\"basicEnglishTitle\":\"Shangqi\",\"basicTitle\":\"北京上奇数字科技有限公司\",\"compreQuatification\":\"2020年，由北京智源人工智能研究院授予“北京国家新一代人工智能创新发展试验区-产业知识图谱开放实验室”\\n2021年，由全国信标智慧城市标准工作组秘书处、中国电子技术标准化研究院授予“成员单位”证书\\n2021年，由中关村金融科技产业发展联盟授予“理事单位”奖牌\\n2021年，由中国创新创业大赛授予“中国创新创业大赛优秀企业、北京赛区二等奖”\\n2022年，由中国技术交易所有限公司授予“中技所服务机构”证书\\n2022年，由上海数据交易所授予全国首个数商“数据产品登记”证书\\n2022年，由全球数字经济大会授予“首发首推创新成果”奖牌\",\"compreQulification\":\"省高新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"参编《基于知识的人工智能技术及产品评估方法：第2部分知识计算与应用》\\n参编《智能决策能力评估方法：第1部分系统和工具》\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1681109418000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1645318266901037057\",\"investFinancing\":\"2000\",\"investInstitution\":\"北京智源人工智能研究院、北京创新黑马投资管理合伙企业（有限合伙）\",\"investRound\":\"天使轮\",\"marksaleFamouse\":\"已经广泛应用在政府决策、企业招商投资、研究机构分析等领域，典型客户包括：北京市经信局、浙江省经信厅、深圳市发改委、长沙市人民政府、郑州高新区、中国建设银行、百度、国家电网、金山云、首钢基金、福建省电子集团、中咨海外、中华全国工商联合会、中国技术交易所、启迪控股、创业黑马等\",\"marksaleMain2020\":\"无\",\"marksaleMain2021\":\"无\",\"marksaleRevenue2019\":\"0\",\"marksaleRevenue2020\":\"505\",\"marksaleRevenue2021\":\"1200\",\"scholarCooperation\":\"1、同济大学：在人工智能产业服务行业中的应用领域展开联合技术攻关，在知识图谱、机器学习、自然语言处理等技术领域展开合作。\\n2、北京交通大学经管学院：在人工智能应用领域技术领域进行合作。\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"N\",\"techcontIsStockPool\":\"Y\",\"techdevFormSoft\":\"算法模型、软件平台\",\"techinvLeader1Education\":\"硕士研究生\",\"techinvLeader1Graduate\":\"华中科技大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"孙会峰\",\"techinvLeader2Achievement\":\"1、工作经历：兼任北京智源人工智能研究院创新中心主任，工业和信息化部运行局特聘专家，中国计算机行业协会副秘书长，中信基金会资深咨询委员， 数字经济投融资联盟特聘专家，清华大学，北京交通大学兼职教授。历任工信部下属上市公司赛迪顾问（HK08235）总裁等职。在云计算、大数据及人工智能等新一代信息技术领域深耕十余年，主要从事技术研发、商业创新和产业 投资。曾帮助 10 余家科技型企业成功 IPO；其与深圳证券交 易所联合研发的“大湾区创新 100 指数”已成为业内 ETF 旗 舰指数；作为课题负责人主持国务院参事室、工信部、科技 部、国家发改委等部委委托多项重大课题；多次受邀在世界 互联网大会（乌镇）、世界人工智能大会（上海）、世界智能 网联汽车大会（北京）等重大活动中担任主讲嘉宾；获得国 家和省部级奖励多项，曾作为优秀企业家代表参加国庆 70 周年现场观礼。\\n2、论文发表数量：无\\n3、发表专利数量：7\\n4、获TOP级竞赛前三次数：无\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"赛迪顾问总裁\",\"techinvLeader2Graduate\":\"北京交通大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"邢婷\",\"techinvMoney2019\":\"0\",\"techinvMoney2020\":\"658\",\"techinvMoney2021\":\"820\",\"techinvTechAllAmount\":33,\"techinvTechDoctorAmount\":0,\"techinvTechMasterAmount\":14,\"techinvTechResearcherAmount\":23,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"2021年全国优秀企业、北京赛区二等奖\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":6,\"techprodPatentEffectiveAmount\":6,\"updateBy\":\"qiye_admin\",\"updateTime\":1681109439000}"
    }
  }, {
    "id": "北京元圈科技发展有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166164803588",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京元圈科技发展有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"贾振丹\",\"basicContractPhone\":\"13011183392\",\"basicEnglishTitle\":\"Beijing Comverse Technology Development Co. LTD\",\"basicTitle\":\"北京元圈科技发展有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"无\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"Metaverse Standards Forum\\n国际元宇宙标准论坛\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1681109469000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1645318479556444162\",\"investFinancing\":\"无\",\"investInstitution\":\"无\",\"investRound\":\"无\",\"marksaleFamouse\":\"知名客户1:伦敦时装周\\n知名客户2:澳大利亚新州教育部\\n知名客户3:蓝色光标集团\\n知名客户4:康师傅品牌\\n知名客户5:中国元宇宙白皮书\\n知名客户6:宁波市政府\\n知名客户7:中国新媒体大会\\n知名客户8:中国农业大学\\n知名客户9:上海商业会计学院\\n知名客户10:广播电视总局大数据中心\\n知名客户11:奇安信\\n知名客户12:凤凰卫视\\n知名客户12:新蓝网\",\"marksaleMain2020\":\"无\",\"marksaleMain2021\":\"客户1:康师傅；客户2:蓝色光标；客户3:Algorand  Foundation；客户4:Knox Grammar School；客户5:云博通链\",\"marksaleRevenue2019\":\"0\",\"marksaleRevenue2020\":\"0\",\"marksaleRevenue2021\":\"200\",\"scholarCooperation\":\"无\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"N\",\"techdevFormSoft\":\"3维场景算法优化模型，元宇宙引擎SDK，元宇宙平台前、中、后台。\",\"techinvLeader1Education\":\"博士在读\",\"techinvLeader1Graduate\":\"悉尼大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"周心池\",\"techinvLeader2Achievement\":\"中科院物理研究所\\n商汤科技\\nCCF A论文四篇\\n美国专利2篇\",\"techinvLeader2Education\":\"本科\",\"techinvLeader2Experience\":\"商汤科技\",\"techinvLeader2Graduate\":\"UNSW 新南威尔士大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"李哲羽\",\"techinvMoney2019\":\"0\",\"techinvMoney2020\":\"0\",\"techinvMoney2021\":\"300\",\"techinvTechAllAmount\":7,\"techinvTechDoctorAmount\":2,\"techinvTechMasterAmount\":2,\"techinvTechResearcherAmount\":15,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"2021“iFlytech A.I.开发者大赛”科大讯飞人工智能开发者大赛，创新教育应用  二等奖。\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":4,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":11,\"techprodPatentEffectiveAmount\":0,\"updateBy\":\"qiye_admin\",\"updateTime\":1681109488000}"
    }
  }, {
    "id": "北京中科微澜科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166164803589",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京中科微澜科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"郭维\",\"basicContractPhone\":\"13810105313\",\"basicEnglishTitle\":\"Vulab Technology Co., Ltd.\",\"basicTitle\":\"北京中科微澜科技有限公司\",\"compreQuatification\":\"1、2019年，由中关村科技园区管理委员会单位授予中关村高新技术企业认证\\n2、2020年，由中关村科技园区管理委员会单位授予中关村金种子企业认证\\n3、2020年，由北京市科学技术委员会单位授予国家高新技术企业认证\\n4、2022年，由北京市经济和信息化局单位授予“专精特新”企业认证\\n5、2020年，由北京软件信息服务协会单位授予双软评估认证软件产品证书\\n6、2020年，由北京软件信息服务协会单位授予双软评估认证软件企业证书\\n7、2019年，由北京股权交易中心单位授予孵化版企业资格认证\\n8、2020年，由商务部国际贸易经济研究院单位授予CREDIT信用+认证企业认证\\n9、2020年，由CCTV7国防军事频道单位授予崛起中国_栏目合作伙伴认证\\n10、2022年，由\\\"北京市科学技术委员会、北京市发展和改革委员会、\\n北京市经济和信息化局、北京市住房和城乡建设委员会、\\n北京市市场监督管理局\\\"单位授予北京市新技术新产品（服务）认证证书认证\\n11、2022年，由新世纪检验认证有限责任公司单位授予ISO9001_质量管理体系认证证书\\n12、2022年，由新世纪检验认证有限责任公司单位授予ISO45001_职业健康安全管理体系认证证书\\n13、2022年，由新世纪检验认证有限责任公司单位授予ISO14001_环境管理体系认证证书\\n14、2022年，由新世纪检验认证有限责任公司单位授予ISO20000_信息安全服务管理体系认证证书\\n15、2022年，由新世纪检验认证有限责任公司单位授予ISO27001_信息安全管理体系认证证书\\n16、2022年，由鲲鹏生态创新中心单位授予鲲鹏技术认证\\n17、2022年，由龙蜥社区单位授予龙蜥社区合作伙伴认证\\n18、2022年，由北京软件和信息服务业协会单位授予北京软件核心竞争力企业（创新型）证书\\n19、2022年，由科学技术部单位授予科技型中小企业评价认证\\n20、2019年，由中关村中小型科技文化企业促进会单位授予中关村中小型科技文化企业促进会理事单位证书\\n21、2019年，由北京长风信息技术产业联盟单位授予北京长风信息技术产业联盟常务理事会员单位证书\\n22、2020年，由全国信息安全标准化技术委员会单位授予全国信息安全标准化技术委员会TC260会员单位认证\\n23、2021年，由中国电子工业标准化技术协会单位授予信创工委会会员单位证书\\n24、2021年，由北京信息化协会单位授予信创工委会会员单位证书\\n26、2021年，由中国信息产业商会信息安全产业分会单位授予中国信息产业商会信息安全产业分会会员单位证书\\n27、2021年，由中国通信标准化协会单位授予中国通信标准化协会会员单位证书\\n28、2022年，由中国电子工业标准化技术协会信息技术应用创新工作委员会单位授予信息安全技术应用创新工作委员会技术活动单位证书\",\"compreQulification\":\"国高新、省高新、省市级专精特性\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"1、2022年-牵头-行业标准《网络安全产品成熟度评价体系  第34部分 安全漏洞管理产品评价方法》的编写\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"1、2019年-参编-团体标准《信息安全技术 开源软件安全使用规范》的编写\\n2、2019年-参编-团体标准《信息安全技术 开源环境安全审计规范》的编写\\n3、2019年-参编-团体标准《信息安全技术 开源代码安全审计规范》的编写\\n4、2020年-参编-团体标准《开源软件供应链可靠性技术要求》的编写\\n5、2020年-参编-团体标准《开源软件供应链描述规范》的编写\\n6、2020年-参编-团体标准《开源软件供应链通用性技术要求》的编写\",\"compreStandardNation\":\"1、2020年-参编-国家标准《信息技术 安全技术 信息安全管理体系 指南》的编写\\n2、2021年-参编-国家标准《关键信息基础设施漏洞管理体系指南》的编写\\n3、2022年-参编-国家标准《信息安全技术 政务计算机终端核心配置规范》的编写\\n三、行业标准：\\n1、2022年-牵头-行业标准《网络安全产品成熟度评价体系  第34部分 安全漏洞管理产品评价方法》的编写\",\"comprehensiveAuthority\":\"一、CNAS认证：1\\n正在申请中\\n二、国际权威认证：\\n无\\n三、第三方机构的资质认证\\n1、2020年，由北京软件信息服务协会认证中心授予《双软评估认证软件产品证书》\\n2、2022年，由\\\"北京市科学技术委员会、北京市发展和改革委员会、\\n北京市经济和信息化局、北京市住房和城乡建设委员会、\\n北京市市场监督管理局认证中心授予《北京市新技术新产品（服务）认证证书认证》\\n3、2022年，由鲲鹏生态创新中心认证中心授予《鲲鹏技术认证》\\n4、2022年，由龙蜥社区单位授予龙蜥社区认证中心《合作伙伴认证》\",\"createBy\":\"qiye_admin\",\"createTime\":1681109554000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"2020年、工业和信息化部网络安全管理局-工业机器人外接型安全增强装置项目-圆满验收\",\"id\":\"1645318835292143618\",\"investFinancing\":\"1000\",\"investInstitution\":\"1、北京英诺创易佳科技创业投资中心(有限合伙)投资机构\",\"investRound\":\"天使轮\",\"marksaleFamouse\":\"知名客户1：工业和信息化部网络安全管理局\\n知名客户2：工业和信息化部计算机与微电子发展研究中心\\n知名客户3：华为技术有限公司\\n知名客户4：中科软科技股份有限公司\\n知名客户5：国家计算机网络与信息安全管理中心\",\"marksaleMain2020\":\"客户1：工业和信息化部网络安全管理局_工业机器人外接型安全增强装置项目\\n客户2：国家计算机网络与信息安全管理中心_工业互联网威胁情报关联引擎采购合同\\n客户3：华为技术有限公司_Vtopia智能漏洞管理系统\\n客户4：深圳江行联加智能科技有限公司_漏洞检测系统\\n客户5：工业和信息化部计算机与微电子发展研究中心（中国软件评测中心）_机器人嵌入式系统测试验证分析工具升级服务\",\"marksaleMain2021\":\"客户1：华为技术有限公司_Vtopia智能漏洞管理系统V2.0\\n客户2：广州神州数码信息科技有限公司_Vtopia智能漏洞管理系统V2.0\\n客户3：中国软件测评中心（工业和信息化部软件与集成电路促进中心）_机器人安全测试验证环境系统设备仿真数据分析咨询服务\\n客户4：信联科技（南京）有限公司_嵌入式芯片加密固件安全分析系统\\n客户5：深圳江行联加智能科技有限公司_Vtopia智能漏洞管理系统\",\"marksaleRevenue2019\":\"283.6\",\"marksaleRevenue2020\":\"221.29\",\"marksaleRevenue2021\":\"388.12\",\"scholarCooperation\":\"1、中科软科技股份有限公司+中央统战部信息化运维服务外包项目                                      2、中科软科技股份有限公司+知识图谱构建及应用技术研究                                           3 、浙江大学计算机科学与技术学院+深度学习模型攻击检测防御及鲁棒性边界界定技术实现及测试    4、中国科学院软件研究所+工业机器人外接型安全增强装置项目                                    5、浙江大学计算机科学与技术学院+Vtopia智能漏洞管理系统                                        6、浙江大学计算机科学与技术学院+Vtopia智能漏洞检查箱                                                 7、浙江大学计算机科学与技术学院+物联网设备分析系统固件软件分析工具测试                          8、工业和信息化部计算机与微电子发展研究中心（中国软件评测中心）+机器人嵌入式系统测试验证分析工具升级                                  9、中国软件测评中心（工业和信息化部软件与集成电路促进中心）+机器人安全测试验证环境系统设备仿真数据分析                                           10、网络通信与安全紫金山实验室+嵌入式多模态编译核心工具链                               \",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techdevFormSoft\":\"软件平台\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"中国科学院大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"武延军\",\"techinvLeader2Achievement\":\"2009年获“北京市科技新星”荣誉称号，2011年获中科院软件所杰出青年人才称号，2013年获海淀区青年英才荣誉称号，2016年获中科院青年创新促进会优秀会员。\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"2007.4-2008.5期间在美国纽约州立大学石溪分校计算机系从事博士后研究。中国科学院软件研究所智能软件研究中心主任，研究员，博士生导师，副总工程师。任北京中科微澜科技有限公司高级技术顾问。曾作为负责人主持“云计算操作系统的研究与开发”中科院重要方向性课题、“高可信服务器操作系统关键技术与原型系统研究”国家科技重大专项分课题、“海云环境下的操作系统研究”中科院先导专项课题。作为核心人员参与“开源操作系统内核分析和安全性评估”和“安全可靠桌面操作系统”国家重大科技专项课题。2017年起作为课题负责人承担军委科技委首个重点项目的“智能处理器操作系统及驱动”课题（2017.1-2022.12），负责寒武纪芯片的操作系统和驱动软件研发。连续多年获得腾讯公司资助，开展操作系统研究。开设《机器人操作系统入门》在线课程，在两年内报名学员近8万多名。2009年获“北京市科技新星”荣誉称号，2011年获中科院软件所杰出青年人才称号，2013年获海淀区青年英才荣誉称号，2016年获中科院青年创新促进会优秀会员。主要研究方向为操作系统和智能系统软件。已发表论文50多篇，含ICSE、IJCAI、AAAI等国际知名会议，申请专利及软件著作权30余项。\",\"techinvLeader2Graduate\":\"中国科学院软件研究所\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"吴敬征\",\"techinvMoney2019\":\"184.67\",\"techinvMoney2020\":\"165.27\",\"techinvMoney2021\":\"364.87\",\"techinvTechAllAmount\":17,\"techinvTechDoctorAmount\":2,\"techinvTechMasterAmount\":1,\"techinvTechResearcherAmount\":14,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"1、2022年，由中国科学院北京分院及中关村科技园区管理委员会单位授予科技成果转化奖_创业奖\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":20,\"techprodPatentEffectiveAmount\":3,\"updateBy\":\"qiye_admin\",\"updateTime\":1681109570000}"
    }
  }, {
    "id": "北京健康有益科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166164803590",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京健康有益科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"李力\",\"basicContractPhone\":\"18611513020\",\"basicEnglishTitle\":\"Health Hope\",\"basicTitle\":\"北京健康有益科技有限公司\",\"compreQuatification\":\"全国高科技高成长 50 强、2021 朝阳高科技高成长 20 强、图灵 AI 指数排行榜前 50 名9、“知识产权体系认证”企业、“知识产权”试点企业、“标准化良好行为”4A 企业\",\"compreQulification\":\"国高新、省市级专精特性\",\"compreQulificationOther\":\"朝阳区未来独角兽企业、朝阳区“凤鸣企业”、中关村高新技术企业、中关村金种子企业、中关村雏鹰企业、科技型中小企业（国家级）\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"质量管理体系认证（ISO9001）、企业知识产权管理体系认证、软件产品证书-慢病管理规划系统、软件产品证书\",\"createBy\":\"qiye_admin\",\"createTime\":1681109752000,\"govsuppCarryNation\":\"1、国家“新发展格局条件下生物医药产业与保障人民健康研究”课题组成员\\n2、新发展格局条件下生物医药产业与保障人民健康研究“课题\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1645319667987316737\",\"investFinancing\":\"10000\",\"investInstitution\":\"中信国际领投、仁爱资本、汉能创投等\",\"investRound\":\"A轮\",\"marksaleFamouse\":\"知名客户1：华为终端有限公司\\n知名客户2：内蒙古蒙牛乳业（集团）股份有限公司\\n知名客户3：青岛海尔多媒体有限公司\\n知名客户4：中国第一汽车股份有限公司\\n知名客户5：北京人寿保险股份有限公司\\n知名客户6：联通视频科技有限公司\",\"marksaleMain2020\":\"华为、海尔、TCL、招商信诺\",\"marksaleMain2021\":\"华为、海尔、TCL、招商信诺\",\"marksaleRevenue2019\":\"248\",\"marksaleRevenue2020\":\"1303.59\",\"marksaleRevenue2021\":\"3128.23\",\"scholarCooperation\":\"1、复旦大学儿童附属医院-膳食GI计算APP-糖尿病人膳食监测管理\\n2、北京大学临床研究所-中国心脏健康膳食-人工智能系统开发\\n3、上海中医药大学-中医健康服务机器人-五行教育\\n4、中国医学科学院北京协和医院-妊娠期糖尿病系统管理与生活方式数字疗法\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"5\",\"techcontPatentRatio\":\"0\",\"techdevFormSoft\":\"算法模型,系统集成,软件平台包含前中后台,后台,前台\",\"techinvLeader1Education\":\"在读博士\",\"techinvLeader1Graduate\":\"天津大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"李宇欣\",\"techinvLeader2Achievement\":\"授权发明专利10项，著有教材《生物医学工程学》、《人工智能导论》，研究成果发表于著名的学术刊物和SCI期刊20余篇。\",\"techinvLeader2Education\":\"公共管理硕士\",\"techinvLeader2Experience\":\"上海中医药大学中医内科学硕士，天津大学医学工程专业在读博士，麻省理工学院、伯克利大学访问学者，公共经济研究会“新发展格局条件下生物医药产业与保障人民健康研究”课题组特约研究员，国际健康与环境产业联合会副理事长。2014年投资创办健康有益公司，独创BTCM健康管理理论体系，整合多元化健康学理念，搭建健康医疗智慧大脑，研发投入已达5千万元，产品体系已覆盖了众多健康医疗领域的AI入口，填补了国内健康医疗领域只注重诊断和治疗而忽视预防、保健、康复的医学完整闭环。\",\"techinvLeader2Graduate\":\"河北大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"裘实\",\"techinvMoney2019\":\"794.65\",\"techinvMoney2020\":\"557.03\",\"techinvMoney2021\":\"1040.57\",\"techinvTechAllAmount\":78,\"techinvTechDoctorAmount\":3,\"techinvTechMasterAmount\":12,\"techinvTechResearcherAmount\":60,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"1、健康有益荣获“2021年中国高科技高成长50强”\\n2、2018艾瑞(上海)年度高峰会议获得了“金瑞营销奖-最佳AI营销奖”\\n3、2022创客北京大赛 海淀区优胜奖\\n4、中粮专业赛区特等奖\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"1、栖观资讯、飞羽商务联合主办——健康有益荣获金革奖·年度健康管理服务创新奖。\\n2、健康有益凭借创新、领先、专业的智慧医养创新服务平台—“益老”，荣获“第三届基层医疗优秀创新实践案例—最佳智慧医养创新服务平台”奖。\\n3、健康有益获亿欧网最佳科技医疗创新企业奖 。\",\"techprodBusinessProvince\":\"1、2020健康有益凭借创新的商业模式和丰富的落地成果摘得了《2020年度最具成长力创新公司》奖项\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":37,\"techprodPatentInfluence\":\"1\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681109767000}"
    }
  }, {
    "id": "北京智齿博创科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166164803591",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京智齿博创科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"吴立楠\",\"basicContractPhone\":\"13911153081\",\"basicEnglishTitle\":\"SOBOT TECHNOLOGIES INC \",\"basicTitle\":\"北京智齿博创科技有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"国高新、省市级专精特性、创新型中小企业\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"ISO9001\\nISO27001\\nB2-ICP\\n等保三级\\nCMMI三级\\n可信云\\nISO20000\\nB22许可证\\nB24-呼叫中心\\nISO45001\\nISO14001\\n\",\"createBy\":\"qiye_admin\",\"createTime\":1681109810000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1645319911009484801\",\"investFinancing\":\"175024.06\",\"investInstitution\":\"真格、华创、IDG、软银愿景基金领投、高瓴创投、云启资本、用友、拓尔思、界石\",\"investRound\":\"D轮\",\"marksaleFamouse\":\"国家电网、中国电信、广西12333、昆山12345、广州市政府、中关村科技园、首都公路发展集团、HP、航天信息、施耐德、用友、脉脉、二维火、问卷星、滴滴、EMS、叮当快药、火辣辣、我爱我家、豆瓣、本来生活、便利蜂、泡泡玛特\",\"marksaleMain2020\":\"0.8\",\"marksaleMain2021\":\"0.8\",\"marksaleRevenue2019\":\"11653.96\",\"marksaleRevenue2020\":\"16413.06\",\"marksaleRevenue2021\":\"26072.82\",\"scholarCooperation\":\"1\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"交底初审9个\\n进入实审14个\\n答辩1个\",\"techdevFormSoft\":\"软件为主：SaaS，PaaS\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"清华大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"吴立楠\",\"techinvLeader2Achievement\":\"专利两篇\",\"techinvLeader2Education\":\"本科\",\"techinvLeader2Experience\":\"阿里健康\",\"techinvLeader2Graduate\":\"雁北师范学院\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"杨日权\",\"techinvMoney2019\":\"4909.5\",\"techinvMoney2020\":\"6080.53\",\"techinvMoney2021\":\"10979.2\",\"techinvTechAllAmount\":394,\"techinvTechDoctorAmount\":1,\"techinvTechMasterAmount\":14,\"techinvTechResearcherAmount\":173,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"1、2020全球人工智能科技创新TOP50 亿欧/WIM\\n2、2020全球企业服务科技创新TOP50  亿欧/WIM\",\"techprodAicomOtherAsso\":\"1、第四届中国电子信息行业市场“飞马奖” 中国电子商会\\n2、2019年度十佳呼叫中心卓越应用技术奖   中国电子商会\\n3、互联网企业社会责任典范奖  中国公益节组委会\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"1、2016“墨提斯奖”(METIS) 工信部\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"1、互联网创新领域“十大最具价值奖” xtecher\\n2、2017企业服务大数据应用创新奖 ECI\\n3、2016中国移动CRM产品创新奖 中国软件网\\n4、2015十大创新产品方案奖  畅享网\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPatentAmount\":2,\"techprodPatentEffectiveAmount\":2,\"updateBy\":\"qiye_admin\",\"updateTime\":1681109824000}"
    }
  }, {
    "id": "北京青云科技股份有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166164803592",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京青云科技股份有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"刘欢\",\"basicContractPhone\":\"13810325946\",\"basicEnglishTitle\":\"QingCloud\",\"basicTitle\":\"北京青云科技股份有限公司\",\"compreQuatification\":\"AAA 级信用单位认证、CSA CSTR（Cloud Sec Tech Review Certification）认证\",\"compreQulification\":\"国高新\",\"compreQulificationOther\":\"中关村高新技术企业认定、独角兽企业、瞪羚企业\",\"compreStandardIndustry\":\"4\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"1\",\"compreStandardNation\":\"1\",\"comprehensiveAuthority\":\"公安部信息系统安全等级保护三级备案证明（等保三级）、ISO 9001 质量管理体系认证、ISO 27001 信息安全管理体系认证、ISO 20000 信息技术服务管理体系认证、ISO 22301 业务连续性管理体系认证、可信云服务认证、软件能力成熟度集成模型三级认证（CMMI 3）、软件企业认证等权威机构颁发的证书及认证；QingCloud 云平台获得 CSA 云安全联盟 CSA CSTR IaaS 产品增强级认证，同时获得公安部第三研究所颁发的《云计算产品信息安全认证证书》。\",\"createBy\":\"qiye_admin\",\"createTime\":1681109895000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"“云计算产品升级项目”（7.34亿元）、“全域云技术研发项目”（1.41亿元）、“云网一体化基础设施建设项目”\",\"govsuppCarryProvin\":\"人民网财经研究院数字经济研究中心联合中国信息通信研究院云计算与大数据研究所，启动“数造新实体——数字技术赋能实体经济”项目，中国农业大学与青云科技共同打造的混合云管理平台，成功入选“数造新实体·2021-2022 数字技术赋能实体经济案例库”。\",\"id\":\"1645320268515180545\",\"investFinancing\":\"300000\",\"investInstitution\":\"光速安振中国、蓝驰创投和经纬中国、招商证券、招商致远资本、阳光融汇资本、中金佳泰、泛海投资等、光速中国\",\"investRound\":\"IPO\",\"marksaleFamouse\":\"1.国家电网；\\n2.中国银行；\\n3.招商银行；\\n4.江苏交通控股有限公司；\\n5.陕西省政府-陕西省政务云；\\n泰康保险集团；\",\"marksaleMain2020\":\"近三年，年度前五大客户重复购买产品及服务情况：\\n客户1：5,933.92，营收占比14.00% \\n客户2（新）：4,817.20，营收占比11.37%\\n客户3（新）：3,852.05，营收占比9.09%\\n客户4：2,035.81，营收占比4.80%\\n客户5（新）：1,487.25，营收占比3.35%\",\"marksaleMain2021\":\"近三年，年度前五大客户重复购买产品及服务情况：\\n客户1：5,933.92，营收占比14.00% \\n客户2（新）：4,817.20，营收占比11.37%\\n客户3（新）：3,852.05，营收占比9.09%\\n客户4：2,035.81，营收占比4.80%\\n客户5（新）：1,487.25，营收占比3.35%\",\"marksaleRevenue2019\":\"37700\",\"marksaleRevenue2020\":\"42900\",\"marksaleRevenue2021\":\"42400\",\"scholarCooperation\":\"1.清华大学-网络攻击溯源项目-通过网络技术实现网络攻击的IP溯源。\\n2.中国农业大学\\n3.重庆大学\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"0\",\"techcontPatentRatio\":\"6\",\"techdevFormSoft\":\"软件平台包含前中后台\",\"techinvLeader1Education\":\"本科学历\",\"techinvLeader1Graduate\":\"南京工业大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"黄允松\",\"techinvLeader2Achievement\":\"无\",\"techinvLeader2Education\":\"硕士学位\",\"techinvLeader2Experience\":\"曾任IBM蓝云项目首席架构师。\",\"techinvLeader2Graduate\":\"清华大学计算机\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"最年轻的云计算公司创始人。2021 年度 ICT 技术创新十大人物\",\"techinvLeader2Name\":\"林源\",\"techinvMoney2019\":\"6954\",\"techinvMoney2020\":\"7500\",\"techinvMoney2021\":\"13400\",\"techinvTechAllAmount\":700,\"techinvTechDoctorAmount\":5,\"techinvTechMasterAmount\":60,\"techinvTechResearcherAmount\":498,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"连续三次被 Forrester 评为中国公有云服务商“Strong Performer”，荣获 InfoQ 十大云原生技术方案奖，入选亿欧网“全球云原生厂商 TOP 20”，荣获 CCF 全国高性能计算学术年会优秀解决方案奖，连续两年获“物联之星”中国最具影响力物联网云平台企业奖;\\n荣获 DOIT “混合云企业金奖”。\\n可信云容器类技术创新奖；\\n可信云网络类 SDN 技术创新奖；\",\"techprodAicomOtherCity\":\"德勤“中国高科技高成长 50 强暨明日之星”等一系列奖项\",\"techprodAicomOtherNation\":\"荣膺 Gartner“Cool Vender”，作为核心厂商连续三年入选 Gartner: Market Guide for Cloud Infrastructure as a Service, China 报告\",\"techprodAicomOtherPro\":\"荣获工信部“突出贡献单位奖”;\\n云计算最具影响力企业奖；\\n云计算优秀解决方案奖/产品奖；\\n推动云计算行业发展突出贡献单位奖；\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"1、可信云“技术创新奖”；\\n2、金融电子化“优秀自主创新奖”；\\n3、凭借端到端云原生解决方案荣获“云原生最佳壁垒成长奖”；\\n4、凌云奖“双碳”创新解决方案奖；\\n5、青云QingCloud医疗行业混合云解决方案凭借领先的技术能力和“1234”建设体系荣获“科技兴医优秀解决方案·继往开来开拓奖”\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":53,\"techprodPatentEffectiveAmount\":9,\"techprodPatentInfluence\":\"1.78\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681109909000}"
    }
  }, {
    "id": "北京壁仞科技开发有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166168997889",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京壁仞科技开发有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"胡加艳\",\"basicContractPhone\":\"15010497045\",\"basicEnglishTitle\":\"Biren Technology\",\"basicTitle\":\"北京壁仞科技开发有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"无\",\"compreQulificationOther\":\"独角兽企业\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"质量管理体系认证（ISO9001）、中国职业健康安全管理体系认证、环境管理体系认证、 CCC强制性产品\",\"createBy\":\"qiye_admin\",\"createTime\":1681109940000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"截止目前，BR100 系列还获得上海市人工智能项目、上海市战新项目等多个重大项目支持。\",\"govsuppCarryProvin\":\"工信部高质量专项\",\"id\":\"1645320456101232642\",\"investFinancing\":\"500000\",\"investInstitution\":\"成立以来，壁仞科技凭借出色的创业团队、深厚的技术积累、深刻的行业洞见以及巨大的成长潜力，得到政府、资本和业界的高度认可。成立仅三年时间，已完成业界领先产业及财务机构领投的多轮融资，累计融资额超 50 亿元人民币，创全球同领域初创公司融资纪录，成为成长速度最为迅猛的半导体“独角兽”企业。主要股东汇聚了国开装备、大横琴集团、国盛集团等国资投资平台，华登国际等半导体专业基金，启明、IDG 和高瓴创投等顶尖财务投资人，更有中国平安、中芯聚源等具有丰富业务场景和产业链协同的战略投资方。\",\"investRound\":\"B轮\",\"marksaleFamouse\":\"壁仞科技已与平安科技、中国移动、UCloud 等诸多行业领先企业签署战略合作协议。首款产品也已经在包括电信运营商、互联网企业、行业应用企业在内的诸多客户进行落地测试和部署（由于商业保密原则，暂时无法公开客户名称）\",\"marksaleMain2020\":\"暂无可公开数据\",\"marksaleMain2021\":\"暂无可公开数据\",\"marksaleRevenue2019\":\"暂无可公开数据\",\"marksaleRevenue2020\":\"暂无可公开数据\",\"marksaleRevenue2021\":\"暂无可公开数据\",\"scholarCooperation\":\"壁仞已和清华大学、复旦大学、上海交通大学和浙江大学开展了产学研合作，覆盖从应用算法到芯片支撑技术的各个层次的 20 多项研究工作，发表学术论文 24 篇，产学研合作获批专利 28 项。截止到 10 月 31 日，壁仞公司布局核心专利总数超过 250 项，其中国际专利超过 40 项。\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"无\",\"techdevFormSoft\":\"算法模型、软件平台包含前中后台\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"清华大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"洪洲\",\"techinvLeader2Achievement\":\"布法罗纽约州立大学计算机科学硕士，清华大学经管学院硕士，北京大学数学专业学士。\\n拥有 20 余年 GPU 设计及工程实践经验，具有深厚的架构创新功力和前瞻性的技术规划能力，专长 GPU 架构设计、渲染算法、并行计算、X86/ARM SoC 及内存功耗管理等，拥有 50 多项专利。\",\"techinvLeader2Education\":\"博士\",\"techinvLeader2Experience\":\"曾任海思前 GPU 负责人/首席架构师、英伟达 Principal Engineer。\",\"techinvLeader2Graduate\":\"中科院计算技术研究所\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"焦国方\",\"techinvMoney2019\":\"0\",\"techinvMoney2020\":\"28334.53\",\"techinvMoney2021\":\"58151.59\",\"techinvTechAllAmount\":850,\"techinvTechDoctorAmount\":47,\"techinvTechMasterAmount\":582,\"techinvTechResearcherAmount\":689,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"2022 年 9 月，BR100 系列荣膺大会最高奖项 - 卓越人工智能引领者（Super AI Leader，简称 SAIL奖），并被评选为本次世界人工智能大会的八大“镇馆之宝”之一。（世界人工智能大会（WAIC）由国家发展和改革委员会、工业和信息化部、科学技术部、国家互联网信息办公室、中国科学院、中国工程院、中国科学技术协会和上海市人民政府共同主办。）\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":17,\"techprodPaperQualityAmount\":\"1\",\"techprodPatentAmount\":193,\"techprodPatentEffectiveAmount\":65,\"techprodPatentInfluence\":\"0.2\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681109953000}"
    }
  }, {
    "id": "北京畅行信息技术有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166168997890",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京畅行信息技术有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"梁成楠\",\"basicContractPhone\":\"18301556800\",\"basicEnglishTitle\":\"didachuxing\",\"basicTitle\":\"北京畅行信息技术有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"国高新、国家级专精特新小巨人\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1681110168000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1645321413698584577\",\"investFinancing\":\"91000\",\"investInstitution\":\"蔚来资本、崇德投资，挚信资本，易车网，IDG资本、易车网\",\"investRound\":\"D轮\",\"marksaleRevenue2019\":\"58900\",\"marksaleRevenue2020\":\"79100\",\"marksaleRevenue2021\":\"0\",\"remark\":\"已完成预评级\",\"scholarCooperation\":\"无\",\"status\":\"录入专员未录入\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"0\",\"techcontPatentRatio\":\"2\",\"techdevFormSoft\":\"算法模型、数据集、平台\",\"techinvLeader1Education\":\"学士\",\"techinvLeader1Graduate\":\"北京理工大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"宋中杰\",\"techinvLeader2Achievement\":\"宋中杰是谷歌中国本地唯一的总监级商务高管， [3]  2006年，加入谷歌中国，是谷歌中国本地唯一的总监级商务高管，一手打造了谷歌代理商渠道，成绩斐然，被业界誉为“谷歌渠道之父”。宋中杰先后领导过大中华区渠道销售部，中国区大客户销售部和进出口业务部，是谷歌中国销售业务的主要推手。 [3] \\n2010年7月14日创建限时团购网站“嘀嗒团”，\\n2014年5月，他再次带领嘀嗒团最初的核心团队重新迈上了创业的征程，新项目叫做“嘀嗒拼车”。 [4] \\n2018年1月，“嘀嗒拼车”品牌升级为“嘀嗒出行” [5]  ，嘀嗒出行平台已拥有超过1.5亿用户、1500万车主 [6]  。活跃用户量排名持续稳列移动出行平台第二。是国内兼具出租车、顺风车且活跃用户量排名行业第二的移动出行平台。\",\"techinvLeader2Education\":\"硕士\",\"techinvLeader2Experience\":\"曾任中国惠普副总裁兼软件部总经理、服务销售部总经理、制造业行业总经理和全球客户部总经理等职务，2006年加入谷歌中国，领导过大中华区渠道销售部，中国区大客户销售部和进出口业务部\",\"techinvLeader2Graduate\":\"北京大学本科，北京邮电大学计算机工学硕士学位\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"段剑波\",\"techinvMoney2019\":\"1000\",\"techinvMoney2020\":\"1000\",\"techinvTechAllAmount\":301,\"techinvTechDoctorAmount\":4,\"techinvTechMasterAmount\":50,\"techinvTechResearcherAmount\":139,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"2019年6月13日，嘀嗒出行荣膺 2019“最佳成长产品奖”。\\n2021年1月16日，嘀嗒出行荣膺锌财经评出的“2020年度新产业经济行业领军品牌”奖。\\n2021年1月11日，嘀嗒出行荣膺封面新闻评出的“共享经济榜品质服务平台”奖。\\n荣膺 “2020红星新闻——年度顺风车行业建设最佳贡献奖”。\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"2019年12月，2019T-EDGE全球创新大会授予嘀嗒出行“最佳创新出行服务公司”奖项\\n2020年12月31日，嘀嗒出行荣膺Donews评出的“2020年灵犀奖-互联网领域行业先锋奖”。\\n嘀嗒出行荣获“2015腾讯众创新星——腾飞奖”。\\n\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":0,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":15,\"techprodPatentEffectiveAmount\":2,\"techprodPatentInfluence\":\"0\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681110460000}"
    }
  }, {
    "id": "南京市趣飞机器人有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166168997891",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "南京市趣飞机器人有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"李忠伟\",\"basicContractPhone\":\"18611422582\",\"basicEnglishTitle\":\"Trifo\",\"basicTitle\":\"南京市趣飞机器人有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"国高新\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"MAX：CNAS、CCC、SRRC、CB、CE、软件评估、FCC、北美能效DOE+CEC、北美安全UL1017、功能安全13849、PSE、MIC，中国RoHS、欧盟RoHS、REACH SVHC、WEEE、Pro65。\\n\\nEMMA：\\nCCC、CB、CE、软件评估、FCC、北美能效DOE+CEC、PSE、MIC，中国RoHS、欧盟RoHS、WEEE、Pro65。\\n\\nLucy：\\nCCC、SRRC、CB、CE、IEC60825+FDA注册、FCC、北美能效DOE+CEC、PSE、MIC、UKCA，中国RoHS、欧盟RoHS、WEEE、Pro65。\\n\\nOLLIE：\\nCCC、SRRC、CB、CE、IEC60825+FDA注册、FCC、北美能效DOE+CEC、PSE、MIC、UKCA，中国RoHS、欧盟RoHS、REACH SVHC&附录17、WEEE、Pro65。\\n\\nVIVA\\nCCC、SRRC，Pro65。\",\"createBy\":\"qiye_admin\",\"createTime\":1681110395000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1645322363460976641\",\"investFinancing\":\"32300\",\"investInstitution\":\"经纬中国、华登国际\\n中信建投资本，清研AI产业基金\",\"investRound\":\"C+轮\",\"marksaleFamouse\":\"知名客户1：Walmart沃尔玛\\n知名客户2：Amazon亚马逊\\n知名客户3：Target塔吉特\\n知名客户4：Bestbuy百思买\",\"marksaleMain2020\":\"知名客户1：Target\\n知名客户2：Amazon\\n知名客户3：Walmart\\n知名客户4：Bestbuy\\n客户5：Qupact\",\"marksaleMain2021\":\"知名客户1：Target\\n知名客户2：Amazon\\n知名客户3：Walmart\\n知名客户4：Bestbuy\\n客户5：Qupact\",\"marksaleRevenue2019\":\"1770\",\"marksaleRevenue2020\":\"3663\",\"marksaleRevenue2021\":\"7955\",\"remark\":\"已完成预评级\",\"scholarCooperation\":\"三星研究院、香港科技大学、北京大学、北京航空航天大学、中科院软件所、航天802所、University of Zurich Davide Scaramuzza\",\"status\":\"录入专员未录入\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"南京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"无\",\"techcontPatentRatio\":\"每年新增5-10项发明专利\",\"techdevFormSoft\":\"算法模型、集成软件\",\"techinvLeader1Education\":\"博士\",\"techinvLeader1Graduate\":\"纽约州立大学石溪分校 \",\"techinvLeader1IsOther\":\"IEEE member\",\"techinvLeader1Name\":\"张哲\",\"techinvLeader2Achievement\":\"AI 家庭机器人Lucy获得 CES 2020 Editors’Choice Award 主编首选奖 \\n为数家顶级厂商和100多家客户提供机器人智能视觉方案 \\n\\nTop 5 Startups in Vision Tank at 2016 Embedded Vision Summit \\nTop 10 AI Startups at 2017 CB Insights A-ha! Demo Day \\n\\n双目视觉惯导计算模组Ironsides获得2018 AWE展会艾普兰核芯奖 \\n\\n视觉惯导里程计核心算法论文入选国际机器人顶级会议ICRA/IROS \\n\\n论文：16篇\\n发明专利：20+\",\"techinvLeader2Education\":\"博士 \",\"techinvLeader2Experience\":\"微软，Magic Leap\",\"techinvLeader2Graduate\":\"加州大学尔湾分校\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"深圳市海外高层次人才孔雀计划\",\"techinvLeader2Name\":\"项睿\",\"techinvMoney2019\":\"2717\",\"techinvMoney2020\":\"3222\",\"techinvMoney2021\":\"3213\",\"techinvTechAllAmount\":88,\"techinvTechDoctorAmount\":3,\"techinvTechMasterAmount\":13,\"techinvTechResearcherAmount\":43,\"techprodAicomCcf\":\"AI 家庭机器人Lucy获得 CES 2020 Editors’Choice Award 主编首选奖 \",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"双目视觉惯导计算模组Ironsides获得2018 AWE展会艾普兰核芯奖 \",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"Google Quick, Draw! Doodle Recognition Challenge, 17th of 1316 teams, top 2%\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"北京HICOOL创业大赛三等奖\\n（北京海外高层次人才协会主办：http://hicool.globaltalent.net/cn/）、“梦想中国•智汇嘉善”第三届创新创业大赛 三等奖\",\"techprodPaperAmount\":16,\"techprodPaperQualityAmount\":\"11\",\"techprodPatentAmount\":37,\"techprodPatentEffectiveAmount\":27,\"techprodPatentInfluence\":\"13.04\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681216470000}"
    }
  }, {
    "id": "北京知优科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166168997892",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京知优科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"白林\",\"basicContractPhone\":\"13810057809\",\"basicEnglishTitle\":\"Beijing Zhiu Technology Co. Ltd\",\"basicInfo\":\"自2018年3月成立以来，知优科技已服务过融通集团、中建集团、中国电子、中交建设、济南城投等50多家大型企业客户，并与华为、腾讯、阿里、商汤科技、Microdesk Inc.、清华大学、国家信息中心等30余家国内外著名科研机构、高校形成技术科研战略合作。公司于2020年9月以投前两亿估值获得商汤科技领投的1800万元首轮融资，并在技术研发、市场拓展和战略布局等多个维度形成深度合作与发展。\\n目前已主导完成济南国际医学科学中心、青岛泊里镇智慧城市等国内省市级重点项目，并成果实施深圳前海CIM平台、海口江东BIM管理平台、大兴机场智慧运维平台等各地标杆。项目成果累积获得SCEWC世界智慧城市治理与服务大奖、山东省重点科技计划项目、济南市智慧城市创新应用师范工程等多项荣誉认可，以及创新杯、龙图杯、市政杯、智建杯等诸多国内外行业奖项，并屡次得到央媒和省市级媒体报道和关注。\",\"basicTitle\":\"北京知优科技有限公司\",\"compreQuatification\":\"1）2019年03月，荣获首届京港澳（国际）科技创新大赛(三等奖)；\\n2）2019年05月，荣获杭州大学生创业大赛奖状（二等奖）；\\n3）2020年07月，被评定为大兴区“新国门”领军人才创办企业；\\n4）2020年12月，被评选为中关村U30雏鹰人才企业；\\n5）2021年11月，被评为腾讯云智慧地产智能建造-杰出合作伙伴；\\n6）2021年11月，荣获赋能产业地产运营智慧升级-南京星河world BIM智慧运维荣获第十二届创新杯建筑信息模型应用大赛拓展应用类BIM应用一等成果；\\n7）2021年11月，荣获赋能产业地产运营智慧升级 南京星河BIM智慧运营荣获：第六届国际BIM大奖赛“最佳BIM+CIM应用奖；\\n8）2021年11月，荣获第十届“龙图杯”全国BIM大赛 综合组-优秀奖；\\n9）2021年12月，荣获国际科技创新博览会（BEYOND）科技创新奖；\\n10）2021年12月，荣获智建杯 2021·第二届 智慧建造创新大奖赛 金奖；\\n11）2022年02月，荣获B4B大数据应用挑战赛最佳碳方案。\\n\",\"compreQulification\":\"国高新、省市级专精特性、创新型中小企业\",\"compreQulificationOther\":\"双软认证\\n中关村高新技术企业\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"知优科技ISO质量管理体系认证\\n知优科技获得核心竞争力软件创新型企业\\n北京市2022年度第一批 “专精特新”中小企业\\n中关村科技园区管委会认证知优科技为中关村高新技术企业\\n北京市科委、财政局、税务局认证知优科技为高新技术企业\\n\\n其他认证：软件产品证书——智慧城市管理系统[简称：iU-CIM]——京RC-2019-0917\",\"createBy\":\"qiye_admin\",\"createTime\":1681110395000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"济南国际医学科学中心CIM智慧李生城市项目\",\"id\":\"1645322363549057026\",\"investFinancing\":\"1800\",\"investInstitution\":\"商汤科技有限公司\",\"investRound\":\"2\",\"marksaleFamouse\":\"知名客户1：腾讯云计算（北京）有限责任公司\\n知名客户2：首都机场集团公司北京大兴国际机场\\n知名客户3：深圳市星河雅创投资发展有限公司\\n知名客户4：深圳市前海数字城市科技有限公司\\n知名客户5：海南商汤科技有限公司\",\"marksaleMain2020\":\"客户1：济南城市投资集团有限公司\\n客户2：首都机场集团公司北京大兴国际机场\\n客户3：深圳市星河雅创投资发展有限公司\\n客户4：南昌港昀企业管理有限公司 \\n客户5：东华鲁信计算机技术有限公司\",\"marksaleMain2021\":\"客户1：中船重工（武汉）凌久高科有限公司\\n客户2：深圳市龙岗区坂田街道办事处\\n客户3：深圳市前海数字城市科技有限公司\\n客户4：腾讯云计算（北京）有限责任公司\\n客户5：清华大学\",\"marksaleRevenue2019\":\"2366.966546\",\"marksaleRevenue2020\":\"3688.04642021215\",\"marksaleRevenue2021\":\"5858.163607\",\"remark\":\"已完成预评级\",\"scholarCooperation\":\"1）UCL；城市规划决策支持的城市级动态数字多远开发；1：研究现有的城市规划决策方法，总结做出最佳规划决策的关键方面，回顾数字技术和转型的现状2：根据利益相关者需求确定现有城市规划决策方法的挑战和关键因素;3：定动的城市 DT架(如数据/建模、功能)进行城市规划决策支持并开发其网络系统:4：在实际测试平台上实施拟定框架及其系统，并对提出的研究结果进行评估\\n2）清华大学；基于复杂城市模拟环境的城市脆弱性模拟三维可视化项目；北京市五环内基于静态数据的城市基础模型生成及三维可视化呈现；针对交通网、水网、电网、通讯网等城市宏观视角下基于数据的整体运行情况的动态信息展示；针对交通网、水网、电网、通讯网等微观视角下基于数据的动态场景仿真还原。\\n3）山东建筑大学；CIM数字孪生引擎；基于计算机图形学开发研究城市级高速渲染CIM数字孪生引擎，功能包括像素推流、GIS数据图层应用、方案比选、多源模型数据管理及加载、三维场景测量、剖切等基础功能、天气及光照模拟、空间分析、漫游及后台资源管理。\",\"status\":\"录入专员未录入\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"结合市场需求\",\"techcontPatentRatio\":\"年度增长20%左右\",\"techdevFormSoft\":\"算法模型、软件平台包含前中后台\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"美国南加州大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"尹恺\",\"techinvLeader2Achievement\":\"发表论文5篇；获得专利2个；取得软著6个；第十二届创新杯建筑信息模型（BIM）一等奖：赋能产业地产运营智慧升级-南京星河world BIM智慧运维管理平台；第十二届创新杯建筑信息模型（BIM）三等奖：CIM赋能青岛西海岸新区泊里镇智慧城市建设；第十届龙图杯BIM（建筑信息模型）全国大赛优秀奖：赋能产业地产运营智慧升级-南京星河world BIM智慧运维管理平台；新区建设CIM管理系统获得山东省企业优秀创新成果奖一等奖；土地投资分析CIM平台获得山东省企业优秀创新成果奖一等奖；智慧城市规划系统获得杭州大学生创业大赛二等奖；首届京港澳国际科技创新大赛三等奖；\",\"techinvLeader2Education\":\"博士在读\",\"techinvLeader2Experience\":\"Kohler（科勒）、ARUP、Microdesk、北京知优科技有限公司\",\"techinvLeader2Graduate\":\"美国南加州大学硕士，英国伦敦大学学院博士在读\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"颜嘉旖\",\"techinvMoney2019\":\"358\",\"techinvMoney2020\":\"1274\",\"techinvMoney2021\":\"1582\",\"techinvTechAllAmount\":99,\"techinvTechDoctorAmount\":1,\"techinvTechMasterAmount\":5,\"techinvTechResearcherAmount\":69,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"杭州大学生创业大赛滨江赛区奖状（一等奖）；杭州大学生创业大赛奖状（二等奖）；首届京港澳（国际）科技创新大赛(三等奖)\",\"techprodBusinessProvince\":\"无\",\"techprodPaperAmount\":10,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":7,\"techprodPatentEffectiveAmount\":4,\"updateBy\":\"qiye_admin\",\"updateTime\":1681110510000}"
    }
  }, {
    "id": "北京云庐科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166168997893",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京云庐科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicTitle\":\"北京云庐科技有限公司\",\"compreStandardIndustry\":\"1、参编国家能源部《陆上风电场工程安全监测实施技术规范》行业规范\",\"compreStandardLocal\":\"1、软件技能人才评价规范\",\"createBy\":\"qiye_admin\",\"createTime\":1681110395000,\"govsuppCarryNation\":\"云庐科技曾服务并参与三校（清华-剑桥-MIT）低碳联盟项目、青岛地铁1号线、北京新机场“三线四桥”转体、苏州奥林匹克体育中心等多项国家级重点高新技术项目\",\"id\":\"1645322363641331714\",\"marksaleFamouse\":\"中国地震局、清华大学、中国建筑科学研究院、中国铁道科学研究院、中国电力科学研究院、北京建工集团\",\"scholarCooperation\":\"清华大学、中国建筑科学研究院、中国铁道科学研究院、中国电力科学研究院\",\"status\":\"用户未提交\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "id": "南京英诺森软件科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166173192194",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "南京英诺森软件科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicEnglishTitle\":\"inossem(Inossem Software Technology Ltd.)\",\"basicTitle\":\"南京英诺森软件科技有限公司\",\"compreStandardIndustry\":\"参与编撰的\\n1、《数字化仓库基本要求》（WB/T 1118-2022）\\n2、《数字化仓库评估规范》（WB/T 1119-2022）\\n2项推荐性物流行业标准于2022年7月1日起正式实施。\",\"comprehensiveAuthority\":\"英诺森自主研发的“智能仓储管理系统（InStock）”顺利通过了北京新国信软件评测技术有限公司信息安全测试，产品各项性能指标均符合实验验证中心《信息安全测试技术要求》，取得该机构的权威认证。\",\"createBy\":\"qiye_admin\",\"createTime\":1681110395000,\"id\":\"1645322363729412098\",\"status\":\"用户未提交\",\"sysOrgCode\":\"A01\",\"techprodAwardXuehui\":\"中国物流与采购联合会科技进步奖——英诺森供应链一体化平台——三等奖\",\"techprodBusinessOther\":\"英诺森斩获“2019年SAP合作伙伴创新大赛「产业互联网 」创新解决方案银奖”。\",\"techprodPatentAmount\":35,\"techprodPatentEffectiveAmount\":7}"
    }
  }, {
    "id": "理工雷科智途（北京）科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166173192195",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "理工雷科智途（北京）科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicTitle\":\"理工雷科智途（北京）科技有限公司\",\"compreQulification\":\"国高新\",\"comprehensiveAuthority\":\"通过IATF16949:2016国际汽车质量管理体系认证；\\n环境管理体系认证；\\n质量管理体系认证（ISO9001）；\\n中国职业健康安全管理体系认证\",\"createBy\":\"qiye_admin\",\"createTime\":1681110395000,\"id\":\"1645322363813298178\",\"investFinancing\":\"1000\",\"investInstitution\":\"考拉基金领投，理工创动跟投。\",\"investRound\":\"Pre-A\",\"marksaleMain2020\":\"racoits\",\"status\":\"用户未提交\",\"sysOrgCode\":\"A01\",\"techdevFormSoft\":\"算法模型\",\"techinvLeader1Education\":\"学士学位\",\"techinvLeader1Graduate\":\"北京理工大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"毛二可\",\"techinvLeader2Achievement\":\"毛二可发表学术论文100余篇，其中被SCI和EI收录60余篇，获发明专利授权20余项。\\n毛二可曾获国家技术发明一等奖1项、国家技术发明二等奖2项、国家技术发明三等奖2项、国家技术发明四等奖1项。\",\"techinvLeader2Experience\":\"1956年1月—1961年1月，担任北京工业学院雷达实验室主任。\\n1961年1月—1980年1月，在北京工业学院雷达系工作。\\n1980年1月—1983年1月，担任北京理工大学电子工程系雷达研究所所长。\\n1983年1月—1993年，担任北京理工大学信息与电子学院雷达研究所所长。\\n1995年，当选为中国工程院院士。\",\"techinvLeader2Is\":\"1995年，当选为中国工程院院士。\",\"techprodBusinessOther\":\"雷科智途于2022年分子乌镇保险科技节期间举办的保险科技创新大赛决赛，荣获车险/车生态领域最高奖项「2022保险科技创新大赛优胜奖」。\",\"techprodPatentAmount\":13,\"techprodPatentEffectiveAmount\":1}"
    }
  }, {
    "id": "北京天亿时代科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166173192196",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京天亿时代科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicTitle\":\"北京天亿时代科技有限公司\",\"createBy\":\"qiye_admin\",\"createTime\":1681110395000,\"id\":\"1645322363901378562\",\"status\":\"用户未提交\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "id": "索为技术股份有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166173192197",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "索为技术股份有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicEnglishTitle\":\"Sysware Technology Co., Ltd.\",\"basicTitle\":\"索为技术股份有限公司\",\"compreQuatification\":\"北京市设计创新中心、北京市双软企业\",\"compreQulification\":\"国高新、省高新、省部级专精特新小巨人\",\"compreQulificationOther\":\"瞪羚企业\",\"compreStandardLocal\":\"10\",\"comprehensiveAuthority\":\"CMMI 3级认证、13项软件产品登记证书国军标9001b体系认证，iso9001质量管理体系认证，单位计算机信息系统集成三级资质双软认证\",\"createBy\":\"qiye_admin\",\"createTime\":1681110395000,\"govsuppCarryNation\":\"国家科技部火炬计划项目\",\"govsuppCarryOffice\":\"北京重大科技成果转化产业化项目\",\"govsuppCarryProvin\":\"工信部制造业与互联网融合发展试点示范项目、工信部工业互联网平台集成创新应用试点示范项目\",\"id\":\"1645322363985264641\",\"investInstitution\":\"中国航天科工 、涌铧投资、达晨财智\",\"investRound\":\"B\",\"scholarCooperation\":\"为航天三院研发的舵机系统平台获国家科学技术进步三等奖。\\n为西安第一飞机设计研究院开发的飞机总体协同设计平台获陕西省国防科学技术进步二等奖。\\n2017年12月，与工信部电子第五研究所发起成立“中国工业技术软件化产业联盟”。\",\"status\":\"用户未提交\",\"sysOrgCode\":\"A01\",\"techprodAicomOtherNation\":\"中国工业软件优秀产品/企业奖。\\n2017年11月，荣获2017中国智造[金长城]奖——最具成长性企业。\\n2017年11月，荣获2017年中国好设计银奖。\",\"techprodAicomOtherPro\":\"工信部工业互联网APP优秀解决方案\",\"techprodAwardProadv\":\"陕西省国防科技进步二等奖、国防科学进步三等奖\",\"techprodBusinessProvince\":\"中国（天津）工业APP创新应用大赛优秀平台奖；2022年1月荣获中国创新挑战赛暨中关村新兴领域专题赛优秀奖\",\"techprodPaperAmount\":1,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":50,\"techprodPatentEffectiveAmount\":21}"
    }
  }, {
    "id": "北京希嘉万维科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166173192198",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京希嘉万维科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicContact\":\"孙颖\",\"basicContractPhone\":\"010-64366088\",\"basicEnglishTitle\":\"seaget\",\"basicTitle\":\"北京希嘉万维科技有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"国高新、省市级专精特性\",\"compreQulificationOther\":\"2021年中关村瞪羚企业，北京市朝阳区凤鸣企业，中关村高新技术企业认证，2022国家级科技型中小企业；\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"1、拥有ITSS、CCRC信息安全集成及风险评估资质、ISO20000、ISO27001、ISO9001等近20项专业资格认证；\\n2、通过了ISO/IEC 20000-1的服务管理体系国际标准认证；\\n3、公司取得ISO/IEC27001:2013信息安全管理体系认证，保障客户信息安全不泄露，让客户放心；\\n4、CCRC-2018-ISV-SI-803、\\n5、CCRC-2018-ISV-SM-180、\\n5、CCRC-2018-ISV-RA-331\\n7、CNAS：0452022ITSM0028R0MN（信息技术服务管理体系认证）、04522I20034R0M（信息安全管理体系认证）、质量管理体系认证（ISO9001）、 01720E20075R1M（环境管理体系认证）\\n8、获得MIT Fablab认证，通过信息安全服务资质认证、安防资质，成功研发MIMP微观创新平台；\\n通过信息安全服务资质认证，2018年北京首家获得美国麻省理工大学FABLAB实验室专业授权认证；\",\"createBy\":\"qiye_admin\",\"createTime\":1681176872000,\"govsuppCarryNation\":\"多次中标，具体项目情况请孙老师补充\",\"govsuppCarryOffice\":\"多次中标，具体项目情况请孙老师补充。\\n截止目前为止，北京希嘉万维科技有限公司在教育、医疗行业完成各类系统集成项目超过500个以上，覆盖行业用户单位400多家。\",\"govsuppCarryProvin\":\"多次中标，具体项目情况请孙老师补充\",\"id\":\"1645601189336252417\",\"investFinancing\":\"0\",\"investInstitution\":\"无\",\"investRound\":\"无\",\"marksaleFamouse\":\"知名客户1：朝阳区水务局\\n知名客户2：北京朝阳国际科技创新服务有限公司\\n知名客户3：北京语言大学\\n知名客户4：矿冶科技集团有限公司\\n知名客户5：北中医三院\\n\",\"marksaleMain2020\":\"客户1：北京朝阳国际科技创新服务有限公司  \\n客户2：北京市朝阳区教育服务保障中心\\n客户3：中国电力科学研究院有限公司\\n与华为建立长期战略合作伙伴关系。开发了教育信息化管理系统等数十项软件产品，并申请多项技术专利 \",\"marksaleMain2021\":\"客户1：北京朝阳国际科技创新服务有限公司  \\n客户2：北京市朝阳区教育服务保障中心\\n客户3：中国电力科学研究院有限公司\\n与华为建立长期战略合作伙伴关系。开发了教育信息化管理系统等数十项软件产品，并申请多项技术专利 \",\"marksaleRevenue2019\":\"9358.189929\",\"marksaleRevenue2020\":\"12766.970676\",\"marksaleRevenue2021\":\"10155.826406\",\"scholarCooperation\":\"北京科技大学、清华大学无锡应用技术研究院、新疆金风科技股份有限公司、黎明大学签署战略合作协议；北京师范大学中国语言中心合作，联合开发AI智能批改系统\",\"status\":\"评级完成\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techcontIsStable\":\"N\",\"techcontIsStock\":\"Y\",\"techcontIsStockPool\":\"Y\",\"techcontPaperRatio\":\"1\",\"techcontPatentRatio\":\"4\",\"techdevFormSoft\":\"系统集成\",\"techinvLeader1Education\":\"硕士\",\"techinvLeader1Graduate\":\"西北工业大学\",\"techinvLeader1IsOther\":\"无\",\"techinvLeader1Name\":\"马建跃\",\"techinvLeader2Achievement\":\"无\",\"techinvLeader2Education\":\"本科\",\"techinvLeader2Experience\":\"担任北京爱梯教育科技有限公司等公司法定代表人，担任北京爱梯教育科技有限公司等公司股东，担任北京希嘉万维科技有限公司、北京爱梯教育科技有限公司等公司高管。\",\"techinvLeader2Graduate\":\"河北经贸大学\",\"techinvLeader2Is\":\"否\",\"techinvLeader2IsOther\":\"无\",\"techinvLeader2Name\":\"闫海钦\",\"techinvMoney2019\":\"443.687295\",\"techinvMoney2020\":\"691.909232\",\"techinvMoney2021\":\"427.407737\",\"techinvTechAllAmount\":89,\"techinvTechDoctorAmount\":0,\"techinvTechMasterAmount\":1,\"techinvTechResearcherAmount\":6,\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"1、荣获2020行业信息化优秀企业\\n2、2020新基建优秀解决方案奖\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"联合承办2019年一带一路暨金砖国家技能发展与技术创新大赛....，希嘉是否参赛了？\",\"techprodPaperAmount\":1,\"techprodPaperQualityAmount\":\"0\",\"techprodPatentAmount\":0,\"techprodPatentEffectiveAmount\":4,\"techprodPatentInfluence\":\"0\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681176887000}"
    }
  }, {
    "id": "北京史河科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166173192199",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京史河科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicEnglishTitle\":\"Beijing TimeRiver Technology Co., Ltd.\",\"basicTitle\":\"北京史河科技有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"国高新、国家级专精特新小巨人企业、国家级专精特性中小企业、国家级科技型中小企业\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"中关村标准《超高压水射流除锈机器人技术规范》\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"史河机器人HighMate水射流清理机器人成功通过德国莱茵TÜV的相关机械指令协调标准和无线电设备指令测试认证\",\"createBy\":\"qiye_admin\",\"createTime\":1681176872000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"浙江省特种设备科学研究院2019年第六批装备的中标结果公示史河机器人成功中标《大型承压设备爬壁打磨机器人》项目、浙江省特种设备检验研究院2018年第二批NQI装备采购项目\",\"id\":\"1645601189424332802\",\"investFinancing\":\"千万级别\",\"investInstitution\":\"熊猫资本、启迪之星、老鹰基金。\",\"investRound\":\"天使轮\",\"scholarCooperation\":\"无\",\"status\":\"用户未提交\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"2019中关村国际前沿科技创新大赛单领域TOP10\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"史河科技《船舶除锈机器人》项目荣获2021年中国造船工程学会科技进步二等奖\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\"}"
    }
  }, {
    "id": "方智特（北京）科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166173192200",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "方智特（北京）科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicEnglishTitle\":\"Fangzhite (Beijing) Technology Co., Ltd.\",\"basicTitle\":\"方智特（北京）科技有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"国高新、国家级科技型中小企业\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1681176872000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1645601189508218881\",\"marksaleFamouse\":\"北京雷动云合智能技术有限公司、北京康拓科技有限公司、军事科学院防化研究院\",\"scholarCooperation\":\"无\",\"status\":\"用户未提交\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\",\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"无\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\"}"
    }
  }, {
    "id": "上海山源电子科技股份有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166173192201",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "上海山源电子科技股份有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicEnglishTitle\":\"Shanghai Sany Electronics&Technology Co., Ltd.\",\"basicTitle\":\"上海山源电子科技股份有限公司\",\"compreQuatification\":\"无\",\"compreQulification\":\"国高新、国家级专精特新小巨人、省级专精特新中小企业、创新型中小企业\",\"compreQulificationOther\":\"无\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"createBy\":\"qiye_admin\",\"createTime\":1681176872000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1645601189596299265\",\"investFinancing\":\"未披露\",\"investInstitution\":\"未披露\",\"investRound\":\"IPO（退市）\",\"scholarCooperation\":\"无\",\"status\":\"用户未提交\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"上海\",\"techprodAicomCcf\":\"无\",\"techprodAicomCcfBest\":\"无\",\"techprodAicomNormal\":\"无\",\"techprodAicomOtherAsso\":\"无\",\"techprodAicomOtherCity\":\"无\",\"techprodAicomOtherNation\":\"无\",\"techprodAicomOtherPro\":\"无\",\"techprodAicomTop\":\"无\",\"techprodAwardNation\":\"无\",\"techprodAwardPatent\":\"无\",\"techprodAwardProadv\":\"无\",\"techprodAwardProv\":\"无\",\"techprodAwardWuwenjun\":\"无\",\"techprodAwardXuehui\":\"煤矿智能供电云网融合管控系统获得中国安全生产协会第三届安全科技进步一等奖\",\"techprodBusiness\":\"无\",\"techprodBusinessOther\":\"无\",\"techprodBusinessProvince\":\"无\"}"
    }
  }, {
    "id": "荣峰正见（北京）科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166177386498",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "荣峰正见（北京）科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicEnglishTitle\":\"Rongfeng Zhengjian (Beijing) Technology Co., Ltd.\",\"basicTitle\":\"荣峰正见（北京）科技有限公司\",\"compreQulification\":\"国高新\",\"createBy\":\"qiye_admin\",\"createTime\":1681176872000,\"id\":\"1645601189680185346\",\"status\":\"用户未提交\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\"}"
    }
  }, {
    "id": "中科国风科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166177386499",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "中科国风科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicEnglishTitle\":\"Zhongke Guofeng Technology Co., Ltd.\",\"basicTitle\":\"中科国风科技有限公司\",\"compreQulification\":\"国高新\",\"createBy\":\"qiye_admin\",\"createTime\":1681176872000,\"id\":\"1645601189764071426\",\"marksaleFamouse\":\"SGS通标标准技术服务有限公司、新疆金风科技股份有限公司\",\"scholarCooperation\":\"与中科院热物理研究所就风热项目进行深入的洽谈和合作\",\"status\":\"用户未提交\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"天津\"}"
    }
  }, {
    "id": "北京东华博泰科技有限公司",
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "data": {
      "id": "1645975166177386500",
      "createBy": "admin",
      "createTime": "2023-04-12 10:20:35",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "titleId": "北京东华博泰科技有限公司",
      "nodeType": "enterpriseNode",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": "{\"basicEnglishTitle\":\"Beijing Zhongneng Botai Technology Co., Ltd.\",\"basicTitle\":\"北京东华博泰科技有限公司\",\"compreQuatification\":\"CMMI5级评估认证\",\"compreQulification\":\"国高新\",\"compreQulificationOther\":\"瞪羚企业\",\"compreStandardIndustry\":\"无\",\"compreStandardInternation\":\"无\",\"compreStandardLocal\":\"无\",\"compreStandardNation\":\"无\",\"comprehensiveAuthority\":\"ISO90002019质量管理体系认证\\n\",\"createBy\":\"qiye_admin\",\"createTime\":1681176872000,\"govsuppCarryNation\":\"无\",\"govsuppCarryOffice\":\"无\",\"govsuppCarryProvin\":\"无\",\"id\":\"1645601189847957505\",\"investFinancing\":\"约亿元\",\"investInstitution\":\"招商致远资本投资有限公司 , 微村智科\",\"investRound\":\"A轮\",\"scholarCooperation\":\"无\",\"status\":\"用户未提交\",\"sysOrgCode\":\"A01\",\"techcontDistribution\":\"北京\"}"
    }
  }],
  "edges": [{
    "source": "北京奇虎科技有限公司",
    "target": "智能运载工具",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397308702721",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京奇虎科技有限公司",
      "target": "智能运载工具",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680571988000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398949089282\",\"id\":\"1643064121905184770\",\"productionId\":\"1642861390758215681\",\"remark\":\"北京奇虎科技有限公司—无线智能记录仪\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680748573000}"
    }
  }, {
    "source": "北京奇虎科技有限公司",
    "target": "智能家居设备",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397329674242",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京奇虎科技有限公司",
      "target": "智能家居设备",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680584940000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398949089282\",\"id\":\"1643118445070974978\",\"productionId\":\"1642861329647206401\",\"remark\":\"北京奇虎科技有限公司—隐藏式激光雷达扫地机、无线智能摄像机\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680749002000}"
    }
  }, {
    "source": "北京奇虎科技有限公司",
    "target": "可穿戴设备",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397329674243",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京奇虎科技有限公司",
      "target": "可穿戴设备",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748856000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398949089282\",\"id\":\"1643805958987120642\",\"productionId\":\"1642861274081067009\",\"remark\":\"北京奇虎科技有限公司—360儿童智能手表\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "图灵通诺（北京）科技有限公司",
    "target": "其他",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397329674244",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "图灵通诺（北京）科技有限公司",
      "target": "其他",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680750047000,\"domestic\":\"第三方技术集成\",\"enterpriseId\":\"1643792398332526593\",\"id\":\"1643810955627921409\",\"productionId\":\"1642861551156789249\",\"remark\":\"图灵通诺（北京）科技有限公司—智能货柜、无人店、智慧门店\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京羽医甘蓝信息技术有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397329674245",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京羽医甘蓝信息技术有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680750858000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398504493058\",\"id\":\"1643814355555909634\",\"productionId\":\"1642862575514877953\",\"remark\":\"北京羽医甘蓝信息技术有限公司—颞下颌关节髁突骨改建的自动定量评价系统、口腔临床服务人工智能平台、CBCT影像AI分析系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680750963000}"
    }
  }, {
    "source": "北京羽医甘蓝信息技术有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397342257153",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京羽医甘蓝信息技术有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680751014000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398504493058\",\"id\":\"1643815013252136961\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京羽医甘蓝信息技术有限公司—行业SaaS（智慧医疗）\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680769631000}"
    }
  }, {
    "source": "北京卓视智通科技有限责任公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397342257154",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京卓视智通科技有限责任公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680751140000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398865203201\",\"id\":\"1643815540337737729\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京卓视智通科技有限责任公司—云瞳交通大数据平台、神查视频侦查大数据平台、云析视频结构化分析系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "上海燧原科技有限公司",
    "target": "板卡",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397342257155",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "上海燧原科技有限公司",
      "target": "板卡",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680751245000,\"domestic\":\"自主知识产权、第三方技术集成\",\"enterpriseId\":\"1643792399158804481\",\"id\":\"1643815979519115265\",\"productionId\":\"1642860784131833858\",\"remark\":\"上海燧原科技有限公司—板卡（AI加速卡、智算集群）\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680769097000}"
    }
  }, {
    "source": "上海燧原科技有限公司",
    "target": "模组",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397342257156",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "上海燧原科技有限公司",
      "target": "模组",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680751362000,\"domestic\":\"自主知识产权、第三方技术集成\",\"enterpriseId\":\"1643792399158804481\",\"id\":\"1643816471297064961\",\"productionId\":\"1642860840109015042\",\"remark\":\"上海燧原科技有限公司—OAM模组\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680769087000}"
    }
  }, {
    "source": "上海燧原科技有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397342257157",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "上海燧原科技有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680751479000,\"domestic\":\"自主知识产权、第三方技术集成\",\"enterpriseId\":\"1643792399158804481\",\"id\":\"1643816963557359618\",\"productionId\":\"1642862575514877953\",\"remark\":\"上海燧原科技有限公司—MLOps（驭算TopsRider）\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680769073000}"
    }
  }, {
    "source": "北京瑞莱智慧科技有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397342257158",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京瑞莱智慧科技有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680751658000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792399603400706\",\"id\":\"1643817712295149570\",\"productionId\":\"1642862575514877953\",\"remark\":\"北京瑞莱智慧科技有限公司—隐私保护计算平台RealSecure、人工智能安全平台RealSafe、深度伪造内容检测平台DeepReal\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "杉数科技（北京）有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397342257159",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "杉数科技（北京）有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680751755000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397497860098\",\"id\":\"1643818120539340802\",\"productionId\":\"1642862575514877953\",\"remark\":\"杉数科技（北京）有限公司—MLOps\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "杉数科技（北京）有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397359034369",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "杉数科技（北京）有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680751825000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397497860098\",\"id\":\"1643818412857163777\",\"productionId\":\"1642862190683291650\",\"remark\":\"杉数科技（北京）有限公司—行业SaaS\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "爱动超越人工智能科技（北京）有限责任公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397359034370",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "爱动超越人工智能科技（北京）有限责任公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680752266000,\"domestic\":\"第三方技术集成\",\"enterpriseId\":\"1643792399423045633\",\"id\":\"1643820261458903042\",\"productionId\":\"1642862190683291650\",\"remark\":\"爱动超越人工智能科技（北京）有限责任公司—工业车辆管理平台、高级驾驶辅助系统（ADAS）\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京中科闻歌科技股份有限公司",
    "target": "DevOps(低/无代码开发平台)",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397359034371",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科闻歌科技股份有限公司",
      "target": "DevOps(低/无代码开发平台)",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680752493000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398143782914\",\"id\":\"1643821213234561025\",\"productionId\":\"1642862631265566721\",\"remark\":\"北京中科闻歌科技股份有限公司—DevOps：天湖数据智算平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680769624000}"
    }
  }, {
    "source": "北京中科闻歌科技股份有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397359034372",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科闻歌科技股份有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680752751000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398143782914\",\"id\":\"1643822296283545601\",\"productionId\":\"1642862575514877953\",\"remark\":\"北京中科闻歌科技股份有限公司—MLOps：闻海全球开源数据平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京中科闻歌科技股份有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397363228673",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科闻歌科技股份有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680752841000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398143782914\",\"id\":\"1643822673376641025\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京中科闻歌科技股份有限公司—行业SaaS：红旗融媒体平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京无疆脑智科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397367422978",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京无疆脑智科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680752950000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398240251905\",\"id\":\"1643823129591087106\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京无疆脑智科技有限公司—行业SaaS：智慧医疗\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京外号信息技术有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397367422979",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京外号信息技术有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680765903000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397191675906\",\"id\":\"1643877460889632769\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京外号信息技术有限公司—行业SaaS\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京未末卓然科技有限公司",
    "target": "数据治理（包括采集、标注、清洗）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397371617282",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京未末卓然科技有限公司",
      "target": "数据治理（包括采集、标注、清洗）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680765951000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397405585410\",\"id\":\"1643877660320399361\",\"productionId\":\"1642863700402044929\",\"remark\":\"北京未末卓然科技有限公司—数据云标注平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680766016000}"
    }
  }, {
    "source": "北京未末卓然科技有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397371617283",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京未末卓然科技有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680765957000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397405585410\",\"id\":\"1643877685201010689\",\"productionId\":\"1642862575514877953\",\"remark\":\"北京未末卓然科技有限公司—MLOps：全栈工具\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680766080000}"
    }
  }, {
    "source": "北京未末卓然科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397371617284",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京未末卓然科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680765962000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397405585410\",\"id\":\"1643877705891512321\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京未末卓然科技有限公司—行业SaaS：无人驾驶全栈技术链\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680766168000}"
    }
  }, {
    "source": "时趣互动（北京）科技有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397375811585",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "时趣互动（北京）科技有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680766966000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397317505026\",\"id\":\"1643881920080707585\",\"productionId\":\"1642862575514877953\",\"remark\":\"时趣互动（北京）科技有限公司—MLOps：时趣洞察引擎\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京数美时代科技有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397375811586",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京数美时代科技有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680767110000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397585940481\",\"id\":\"1643882524953870338\",\"productionId\":\"1642862575514877953\",\"remark\":\"北京数美时代科技有限公司—MLOps：智能内容风控、智能业务风控、智能内容识别\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京深演智能科技股份有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397375811587",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京深演智能科技股份有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680767131000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397678215169\",\"id\":\"1643882610056298497\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京深演智能科技股份有限公司—行业SaaS：智能内容管理平台、智能政务云、智能营销平台平台、\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680768899000}"
    }
  }, {
    "source": "北京深演智能科技股份有限公司",
    "target": "数据中台",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397380005889",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京深演智能科技股份有限公司",
      "target": "数据中台",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680767186000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397678215169\",\"id\":\"1643882841309249538\",\"productionId\":\"1642863769901662210\",\"remark\":\"北京深演智能科技股份有限公司—数据中台：智能客户数据管理平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京时代凌宇科技股份有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397380005890",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京时代凌宇科技股份有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680768924000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397783072770\",\"id\":\"1643890130871189506\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京时代凌宇科技股份有限公司—行业SaaS：行业应用软件、平台软件\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680769618000}"
    }
  }, {
    "source": "北京时代凌宇科技股份有限公司",
    "target": "网络通信设备",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397380005891",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京时代凌宇科技股份有限公司",
      "target": "网络通信设备",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680768929000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397783072770\",\"id\":\"1643890153524625409\",\"productionId\":\"1642861516977405954\",\"remark\":\"北京时代凌宇科技股份有限公司—网络通信设备：网关类产品\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680769728000}"
    }
  }, {
    "source": "北京时代凌宇科技股份有限公司",
    "target": "传感器",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397380005892",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京时代凌宇科技股份有限公司",
      "target": "传感器",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680768935000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397783072770\",\"id\":\"1643890176341639169\",\"productionId\":\"1642861132800131074\",\"remark\":\"北京时代凌宇科技股份有限公司—传感器：无线感知终端、智能和转换终端\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680769703000}"
    }
  }, {
    "source": "北京中科汇联科技股份有限公司",
    "target": " 通用SaaS",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397384200193",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科汇联科技股份有限公司",
      "target": " 通用SaaS",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680769799000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397871153153\",\"id\":\"1643893800853635073\",\"productionId\":\"1642862090267459586\",\"remark\":\"北京中科汇联科技股份有限公司—通用SaaS：AICC统一智能交互中心平台、AiKM智能内网知识门户、AiHui集约化智能门户平台、AICOS智能集成操作系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680770108000}"
    }
  }, {
    "source": "北京中科汇联科技股份有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397384200194",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科汇联科技股份有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680769804000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397871153153\",\"id\":\"1643893820466200578\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京中科汇联科技股份有限公司—行业SaaS：智能热线服务、智能客服、AICIM数字孪生系统、智能质检系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680770061000}"
    }
  }, {
    "source": "北京中科汇联科技股份有限公司",
    "target": "其他SaaS(个人TOC的小智能化工具)",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397384200195",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科汇联科技股份有限公司",
      "target": "其他SaaS(个人TOC的小智能化工具)",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680769808000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397871153153\",\"id\":\"1643893839239905282\",\"productionId\":\"1642862252347949058\",\"remark\":\"北京中科汇联科技股份有限公司—其他SaaS(个人TOC的小智能化工具)：AIMETA虚拟数字人、Ai3D三维全真交互平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680770191000}"
    }
  }, {
    "source": "阿呆科技（北京）有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397388394498",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "阿呆科技（北京）有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680769813000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792397971816450\",\"id\":\"1643893859129294850\",\"productionId\":\"1642862190683291650\",\"remark\":\"阿呆科技（北京）有限公司（望里科技）—行业SaaS：精神疾病数字疗法科技平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680770654000}"
    }
  }, {
    "source": "北京灵犀微光科技有限公司",
    "target": "模组",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397388394499",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京灵犀微光科技有限公司",
      "target": "模组",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680770687000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398059896833\",\"id\":\"1643897525466890241\",\"productionId\":\"1642860840109015042\",\"remark\":\"北京灵犀微光科技有限公司—模组：光学模组\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680770831000}"
    }
  }, {
    "source": "北京灵犀微光科技有限公司",
    "target": "可穿戴设备",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397388394500",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京灵犀微光科技有限公司",
      "target": "可穿戴设备",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680770739000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398059896833\",\"id\":\"1643897743134490626\",\"productionId\":\"1642861274081067009\",\"remark\":\"北京灵犀微光科技有限公司—可穿戴设备：AR眼镜\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "光子算数(北京)科技有限责任公司",
    "target": "板卡",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397388394501",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "光子算数(北京)科技有限责任公司",
      "target": "板卡",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680770931000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398416412674\",\"id\":\"1643898548449247233\",\"productionId\":\"1642860784131833858\",\"remark\":\"光子算数(北京)科技有限责任公司—板卡：光电融合AI计算板卡\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京七鑫易维信息技术有限公司",
    "target": "可穿戴设备",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397392588802",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京七鑫易维信息技术有限公司",
      "target": "可穿戴设备",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680770974000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398588379138\",\"id\":\"1643898728342945793\",\"productionId\":\"1642861274081067009\",\"remark\":\"北京七鑫易维信息技术有限公司—可穿戴设备：aSee Glasses眼镜式眼动仪、aSee Pro桌面式眼动仪、VR眼球追踪配件Droolon F1系列\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680771068000}"
    }
  }, {
    "source": "北京七鑫易维信息技术有限公司",
    "target": " 一体机",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397392588803",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京七鑫易维信息技术有限公司",
      "target": " 一体机",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680770985000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398588379138\",\"id\":\"1643898777651183617\",\"productionId\":\"1642861210449281026\",\"remark\":\"北京七鑫易维信息技术有限公司—一体机：眼控平板电脑一体机\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680771109000}"
    }
  }, {
    "source": "北京全景声信息科技有限公司",
    "target": "RPA（流程自动化软件）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397392588804",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京全景声信息科技有限公司",
      "target": "RPA（流程自动化软件）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680771226000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398684848129\",\"id\":\"1643899786817503233\",\"productionId\":\"1642862752384483329\",\"remark\":\"北京全景声信息科技有限公司—RPA（流程自动化软件）：WANOS全景声制作系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京聚力维度科技有限公司",
    "target": " 通用SaaS",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397392588805",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京聚力维度科技有限公司",
      "target": " 通用SaaS",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680771786000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792398772928513\",\"id\":\"1643902134512058370\",\"productionId\":\"1642862090267459586\",\"remark\":\"北京聚力维度科技有限公司—通用SaaS：元宇宙级人工智能数字人虚拟直播平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680773708000}"
    }
  }, {
    "source": "北京优锘科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397396783106",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京优锘科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680775169000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792399070724098\",\"id\":\"1643916326484901889\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京优锘科技有限公司—行业SaaS：智慧园区可视化、智慧城市可视化\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "云控蜂核北京科技有限公司",
    "target": "智能家居设备",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397396783107",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "云控蜂核北京科技有限公司",
      "target": "智能家居设备",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680775630000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792399242690562\",\"id\":\"1643918256674242562\",\"productionId\":\"1642861329647206401\",\"remark\":\"云控蜂核（北京）科技有限公司—智能家居设备：蜂核智能镜\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "云控蜂核北京科技有限公司",
    "target": " 通用SaaS",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397396783108",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "云控蜂核北京科技有限公司",
      "target": " 通用SaaS",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680775723000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792399242690562\",\"id\":\"1643918649600835586\",\"productionId\":\"1642862090267459586\",\"remark\":\"云控蜂核（北京）科技有限公司—通用SaaS：蜂核数字人\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680776374000}"
    }
  }, {
    "source": "北京深睿博联科技有限责任公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397396783109",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京深睿博联科技有限责任公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680776473000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792399691481090\",\"id\":\"1643921793906966530\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京深睿博联科技有限责任公司—行业SaaS：医学影像人工智能辅助诊疗系统、智能影像云平台、多模态科研平台、院内问诊导诊智能系统、医学病理检验人工智能系统等\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680776497000}"
    }
  }, {
    "source": "科讯嘉联信息技术有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397400977409",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "科讯嘉联信息技术有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680834095000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792399779561473\",\"id\":\"1644163477924282369\",\"productionId\":\"1642862190683291650\",\"remark\":\"科讯嘉联信息技术有限公司—行业SaaS：家电行业机器人、物流行业机器人、保险行业机器人、智慧政务机器人、金融行业机器人、AI私域运营\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681194718000}"
    }
  }, {
    "source": "北京龙田华远科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397400977410",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京龙田华远科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680834395000,\"domestic\":\"第三方技术集成\",\"enterpriseId\":\"1643792399867641858\",\"id\":\"1644164735770886145\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京龙田华远科技有限公司—行业SaaS：采煤机无人驾驶系统、综采工作面视频识别系统、综放工作面音频放煤系统、综采工作面惯导调直系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京文因互联科技有限公司",
    "target": "RPA（流程自动化软件）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397400977411",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京文因互联科技有限公司",
      "target": "RPA（流程自动化软件）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680835361000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792399955722241\",\"id\":\"1644168789238546433\",\"productionId\":\"1642862752384483329\",\"remark\":\"北京文因互联科技有限公司—RPA（流程自动化软件）：飞梭-智能文档认知平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681205424000}"
    }
  }, {
    "source": "北京文因互联科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397400977412",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京文因互联科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680835958000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792399955722241\",\"id\":\"1644171293334503425\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京文因互联科技有限公司—行业SaaS：飞梭-智能核查系统、快查-财务智能核查系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681205409000}"
    }
  }, {
    "source": "中科极限元（杭州）智能科技股份有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397405171713",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "中科极限元（杭州）智能科技股份有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680836638000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1643792400144465922\",\"id\":\"1644174145855488001\",\"productionId\":\"1642862190683291650\",\"remark\":\"中科极限元（杭州）智能科技股份有限公司—行业SaaS：数字人视频编辑器、情感分析仪\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681097512000}"
    }
  }, {
    "source": "爱笔（北京）智能科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397405171714",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "爱笔（北京）智能科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680836652000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645314304911147009\",\"id\":\"1644174204303114242\",\"productionId\":\"1642862190683291650\",\"remark\":\"爱笔（北京）智能科技有限公司—行业SaaS：智能停车场系统、AI 精准客流系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681111987000}"
    }
  }, {
    "source": "北京上奇数字科技有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397405171715",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京上奇数字科技有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681099131000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645318266901037057\",\"id\":\"1645275122062917633\",\"productionId\":\"1642862575514877953\",\"remark\":\"北京上奇数字科技有限公司—MLOps：产业知识计算引擎\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681111994000}"
    }
  }, {
    "source": "北京上奇数字科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397405171716",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京上奇数字科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681099203000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645318266901037057\",\"id\":\"1645275422127620098\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京上奇数字科技有限公司—行业SaaS：产业要素底库、知识计算引擎、产业时空地图、AI工具和计算平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681112013000}"
    }
  }, {
    "source": "北京元圈科技发展有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397405171717",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京元圈科技发展有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681105042000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645318479556444162\",\"id\":\"1645299914379952129\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京元圈科技发展有限公司—行业SaaS：电商平台、企业智能中台系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681112035000}"
    }
  }, {
    "source": "北京中科微澜科技有限公司",
    "target": "安全检测与认证（检验产品）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397405171718",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科微澜科技有限公司",
      "target": "安全检测与认证（检验产品）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681115049000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645318835292143618\",\"id\":\"1645341884896837633\",\"productionId\":\"1642863251263389697\",\"remark\":\"北京中科微澜科技有限公司—安全检测与认证（检验产品）：Vtopia智能漏洞管理系统、O2Detector开源代码漏洞检测系统、漏洞知识库订阅、openBrain开源漏洞感知系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京健康有益科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397405171719",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京健康有益科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681115511000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645319667987316737\",\"id\":\"1645343824661774337\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京健康有益科技有限公司—健康医疗系统、机器人系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京青云科技股份有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397409366018",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京青云科技股份有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681115632000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645320268515180545\",\"id\":\"1645344331384029186\",\"productionId\":\"1642862575514877953\",\"remark\":\"北京青云科技股份有限公司—MLOps：容器平台KubeSphere(QKE)、QingCloud IoT平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京青云科技股份有限公司",
    "target": " 一体机",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397409366019",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京青云科技股份有限公司",
      "target": " 一体机",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681116169000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645320268515180545\",\"id\":\"1645346580596326401\",\"productionId\":\"1642861210449281026\",\"remark\":\"北京青云科技股份有限公司—一体机：企业云一体机、云易捷超融合一体机、分布式块存储一体机、非结构化数据存储一体机、容器一体机\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681116244000}"
    }
  }, {
    "source": "北京青云科技股份有限公司",
    "target": "开发者社区",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397409366020",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京青云科技股份有限公司",
      "target": "开发者社区",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681116172000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645320268515180545\",\"id\":\"1645346597130272769\",\"productionId\":\"1642863190718611458\",\"remark\":\"北京青云科技股份有限公司—开发者社区：开源产品及开源社区\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681116298000}"
    }
  }, {
    "source": "北京青云科技股份有限公司",
    "target": "数据中台",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397409366021",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京青云科技股份有限公司",
      "target": "数据中台",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681116181000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645320268515180545\",\"id\":\"1645346632966406146\",\"productionId\":\"1642863769901662210\",\"remark\":\"北京青云科技股份有限公司—数据中台：NeonSAN 分布式块存储、U10000 非结构化数据存储、分布式块存储一体机、非结构化数据存储一体机\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681116352000}"
    }
  }, {
    "source": "北京青云科技股份有限公司",
    "target": "DevOps(低/无代码开发平台)",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397409366022",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京青云科技股份有限公司",
      "target": "DevOps(低/无代码开发平台)",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681116552000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645320268515180545\",\"id\":\"1645348187132198914\",\"productionId\":\"1642862631265566721\",\"remark\":\"北京青云科技股份有限公司—DevOps(低/无代码开发平台)：QuanXiang 开源低代码平台：\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681116644000}"
    }
  }, {
    "source": "北京智齿博创科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397409366023",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京智齿博创科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681116815000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645319911009484801\",\"id\":\"1645349291412750337\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京智齿博创科技有限公司—行业SaaS：在线客服机器人、工单系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京壁仞科技开发有限公司",
    "target": "芯片（CPU、GPU、ASIC、FPGA、DSP）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397409366024",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京壁仞科技开发有限公司",
      "target": "芯片（CPU、GPU、ASIC、FPGA、DSP）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681118039000,\"domestic\":\"自主知识产权、第三方技术集成\",\"enterpriseId\":\"1645320456101232642\",\"id\":\"1645354423852531713\",\"productionId\":\"1642827727173648385\",\"remark\":\"北京壁仞科技开发有限公司—芯片（CPU、GPU、ASIC、FPGA、DSP）：壁仞科技BR100系列通用GPU芯片\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681205844000}"
    }
  }, {
    "source": "北京壁仞科技开发有限公司",
    "target": "板卡",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397409366025",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京壁仞科技开发有限公司",
      "target": "板卡",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681118071000,\"domestic\":\"自主知识产权、第三方技术集成\",\"enterpriseId\":\"1645320456101232642\",\"id\":\"1645354560863666178\",\"productionId\":\"1642860784131833858\",\"remark\":\"北京壁仞科技开发有限公司—板卡：壁砺™104P产品形态为PCIe板卡\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681205840000}"
    }
  }, {
    "source": "北京壁仞科技开发有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397409366026",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京壁仞科技开发有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681118076000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645320456101232642\",\"id\":\"1645354581910683650\",\"productionId\":\"1642862575514877953\",\"remark\":\"北京壁仞科技开发有限公司——MLOps：BIRENSUPA™\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681205836000}"
    }
  }, {
    "source": "北京希嘉万维科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397409366027",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京希嘉万维科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681118844000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645601189336252417\",\"id\":\"1645357803148738561\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京希嘉万维科技有限公司—行业SaaS：物联网综合管理平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681177109000}"
    }
  }, {
    "source": "北京希嘉万维科技有限公司",
    "target": "总包集成",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397413560321",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京希嘉万维科技有限公司",
      "target": "总包集成",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681119103000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645601189336252417\",\"id\":\"1645358888143880194\",\"productionId\":\"1642863069343842306\",\"remark\":\"北京希嘉万维科技有限公司—总包集成：数字孪生应用生态\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681177091000}"
    }
  }, {
    "source": "北京宝龙德科技有限责任公司",
    "target": "其他",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397413560322",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京宝龙德科技有限责任公司",
      "target": "其他",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681119183000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1623581820444016642\",\"id\":\"1645359222408937473\",\"productionId\":\"1642861551156789249\",\"remark\":\"北京宝龙德科技有限责任公司—其他：BEMS设备\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "上海艾麒信息科技股份有限公司",
    "target": "其他SaaS(个人TOC的小智能化工具)",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397413560323",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "上海艾麒信息科技股份有限公司",
      "target": "其他SaaS(个人TOC的小智能化工具)",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681120053000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1628327623800717313\",\"id\":\"1645362871386308609\",\"productionId\":\"1642862252347949058\",\"remark\":\"上海艾麒信息科技股份有限公司—其他SaaS（个人TOC的小智能化工具）：视频处理类工具APP、屏幕录制类工具APP、图片处理类工具APP\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681120073000}"
    }
  }, {
    "source": "神州灵云（北京）科技有限公司",
    "target": "数据治理（包括采集、标注、清洗）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397413560324",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "神州灵云（北京）科技有限公司",
      "target": "数据治理（包括采集、标注、清洗）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681120176000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1628311293009657857\",\"id\":\"1645363390666309633\",\"productionId\":\"1642863700402044929\",\"remark\":\"神州灵云（北京）科技有限公司—数据治理（包括采集、标注、清洗）：NetSensor、Business Trace和App Trace平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681196762000}"
    }
  }, {
    "source": "山东云天安全技术有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397413560325",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "山东云天安全技术有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681120334000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1630007711504072706\",\"id\":\"1645364049826349058\",\"productionId\":\"1642862190683291650\",\"remark\":\"山东云天安全技术有限公司—行业SaaS：工业监测与态势感知平台、工业交换机系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "友道科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397417754625",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "友道科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681120444000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1630492795105509378\",\"id\":\"1645364512604880898\",\"productionId\":\"1642862190683291650\",\"remark\":\"友道科技有限公司—行业SaaS：铁道类产品体系、城轨类产品体系、航空类产品体系\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京至臻云智能科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397417754626",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京至臻云智能科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681120512000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1630872139950784514\",\"id\":\"1645364800271220738\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京至臻云智能科技有限公司—行业SaaS：审计管理信息系统、工程审计系统、审计单兵作业装备\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681120638000}"
    }
  }, {
    "source": "北京畅行信息技术有限公司",
    "target": "其他SaaS(个人TOC的小智能化工具)",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397417754627",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京畅行信息技术有限公司",
      "target": "其他SaaS(个人TOC的小智能化工具)",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681120701000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645321413698584577\",\"id\":\"1645365592403279873\",\"productionId\":\"1642862252347949058\",\"remark\":\"北京畅行信息技术有限公司—其他SaaS（个人TOC的小智能化工具）：嘀嗒出行\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "南京市趣飞机器人有限公司",
    "target": "机器人（实体）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397417754628",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "南京市趣飞机器人有限公司",
      "target": "机器人（实体）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681120767000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645322363460976641\",\"id\":\"1645365867524456450\",\"productionId\":\"1642861460048117761\",\"remark\":\"南京市趣飞机器人有限公司—机器人（实体）：Viva机器人洗地机\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京知优科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397421948930",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京知优科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681120837000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645322363549057026\",\"id\":\"1645366160710500353\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京知优科技有限公司—行业SaaS：医学科学中心CIM云平台、BIM智慧运维平台工具\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681120981000}"
    }
  }, {
    "source": "北京史河科技有限公司",
    "target": "机器人（实体）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397421948931",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京史河科技有限公司",
      "target": "机器人（实体）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681202561000,\"domestic\":\"自主知识产权、第三方技术集成\",\"enterpriseId\":\"1645601189424332802\",\"id\":\"1645708936979480578\",\"productionId\":\"1642861460048117761\",\"remark\":\"北京史河科技有限公司—机器人（实体）：HighMate V40 水射流清理机器人、化工防腐机器人、化工罐体打磨机器人、火电快速检测机器人等\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "方智特（北京）科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397421948932",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "方智特（北京）科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681202651000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645601189508218881\",\"id\":\"1645709312873005057\",\"productionId\":\"1642862190683291650\",\"remark\":\"方智特（北京）科技有限公司—行业SaaS：智慧营区系统、装备需求综合评估系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京天亿时代科技有限公司",
    "target": "机器人（实体）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397421948933",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京天亿时代科技有限公司",
      "target": "机器人（实体）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681202777000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645322363901378562\",\"id\":\"1645709844362625025\",\"productionId\":\"1642861460048117761\",\"remark\":\"北京天亿时代科技有限公司—机器人（实体）：机器人产品（工业机械臂、小型六轴机械臂）\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京天亿时代科技有限公司",
    "target": " 一体机",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397426143233",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京天亿时代科技有限公司",
      "target": " 一体机",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681202894000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645322363901378562\",\"id\":\"1645710333292642305\",\"productionId\":\"1642861210449281026\",\"remark\":\"北京天亿时代科技有限公司—一体机：网络硬盘录像机-NVR系列\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京天亿时代科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397426143234",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京天亿时代科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681203437000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645322363901378562\",\"id\":\"1645712612477435906\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京天亿时代科技有限公司—行业SaaS：视频管理平台-存储磁盘阵列、高清视频解码器\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "索为技术股份有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397426143235",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "索为技术股份有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681203625000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645322363985264641\",\"id\":\"1645713399886708737\",\"productionId\":\"1642862190683291650\",\"remark\":\"索为技术股份有限公司—行业SaaS：SYSWARE.P2M 项目过程管理系统、SYSWARE.IDE工程师工作台、SYSWARE.EDM-工程数据管理系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京云庐科技有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397426143236",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京云庐科技有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681205279000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645322363641331714\",\"id\":\"1645720336518938626\",\"productionId\":\"1642862575514877953\",\"remark\":\"北京云庐科技有限公司—MLOps：数字孪生平台、云朏平台、云奚平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京云庐科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397426143237",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京云庐科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681205350000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645322363641331714\",\"id\":\"1645720635254046722\",\"productionId\":\"1642862190683291650\",\"remark\":\"北京云庐科技有限公司—行业SaaS：铁路、公路基础设施全生命周期管理系统、风电智慧运维预警系统、风电运维健康监测预警系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "理工雷科智途（北京）科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397426143238",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "理工雷科智途（北京）科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681206021000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645322363813298178\",\"id\":\"1645723450210844674\",\"productionId\":\"1642862190683291650\",\"remark\":\"理工雷科智途（北京）科技有限公司—行业SaaS：自动紧急制动系统、盲区监测预警系统、疲劳驾驶预警系统、车道偏离预警系统LDW、服务监测系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "南京英诺森软件科技有限公司",
    "target": "RPA（流程自动化软件）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397426143239",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "南京英诺森软件科技有限公司",
      "target": "RPA（流程自动化软件）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681206403000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645322363729412098\",\"id\":\"1645725049733840897\",\"productionId\":\"1642862752384483329\",\"remark\":\"南京英诺森软件科技有限公司—RPA：ProcessGo机器人流程自动化（RPA）平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "上海山源电子科技股份有限公司",
    "target": "传感器",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397426143240",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "上海山源电子科技股份有限公司",
      "target": "传感器",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681206494000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645601189596299265\",\"id\":\"1645725433764315138\",\"productionId\":\"1642861132800131074\",\"remark\":\"上海山源电子科技股份有限公司—传感器：KT154-F15矿用隔爆兼本安型无线转发器、GZW50-125矿用本安型振动温度传感器、GBD50矿用本安型振动传感器\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "荣峰正见（北京）科技有限公司",
    "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397430337538",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "荣峰正见（北京）科技有限公司",
      "target": "行业SaaS（农业、建筑与房地产、制造(电子/汽车/化工/医药)、零售批发、金融、电商、仓储、供应链、人力、财务、客服、协同办公、医疗、智慧城市等）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681206892000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645601189680185346\",\"id\":\"1645727100522004481\",\"productionId\":\"1642862190683291650\",\"remark\":\"荣峰正见（北京）科技有限公司—行业SaaS：RIDIC系统\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "荣峰正见（北京）科技有限公司",
    "target": "安全检测与认证（检验产品）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397430337539",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "荣峰正见（北京）科技有限公司",
      "target": "安全检测与认证（检验产品）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681207466000,\"domestic\":\"自主知识产权\",\"enterpriseId\":\"1645601189680185346\",\"id\":\"1645729507914088449\",\"productionId\":\"1642863251263389697\",\"remark\":\"中科国风科技有限公司——安全检测与认证（检验产品）：部件检测产品\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京东华博泰科技有限公司",
    "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397430337540",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京东华博泰科技有限公司",
      "target": "MLOps（包括框架和modelOps、安全平台、视觉平台）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681208359000,\"domestic\":\"自主知识产权、第三方技术集成\",\"enterpriseId\":\"1645601189847957505\",\"id\":\"1645733255105282050\",\"productionId\":\"1642862575514877953\",\"remark\":\"北京东华博泰科技有限公司—MLOps：Avatar（阿凡达）工业互联网平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\"}"
    }
  }, {
    "source": "北京东华博泰科技有限公司",
    "target": "数据中台",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397430337541",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京东华博泰科技有限公司",
      "target": "数据中台",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681208378000,\"domestic\":\"第三方技术集成\",\"enterpriseId\":\"1645601189847957505\",\"id\":\"1645733333337440258\",\"productionId\":\"1642863769901662210\",\"remark\":\"北京东华博泰科技有限公司—数据中台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681208415000}"
    }
  }, {
    "source": "北京东华博泰科技有限公司",
    "target": "数据治理（包括采集、标注、清洗）",
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397430337542",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京东华博泰科技有限公司",
      "target": "数据治理（包括采集、标注、清洗）",
      "edgeType": "productionEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681208382000,\"domestic\":\"第三方技术集成\",\"enterpriseId\":\"1645601189847957505\",\"id\":\"1645733353478488066\",\"productionId\":\"1642863700402044929\",\"remark\":\"北京东华博泰科技有限公司—数据治理：数据治理平台\",\"stage\":\"成熟商用\",\"sysOrgCode\":\"A01\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681208482000}"
    }
  }, {
    "source": "北京奇虎科技有限公司",
    "target": "数据相关",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397430337543",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京奇虎科技有限公司",
      "target": "数据相关",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680571974000,\"enterpriseId\":\"1643792398949089282\",\"id\":\"1643064065256914945\",\"maturity\":\"1\",\"remark\":\"北京奇虎科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642840034133999618\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680747806000}"
    }
  }, {
    "source": "北京奇虎科技有限公司",
    "target": "算力技术分类",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397430337544",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京奇虎科技有限公司",
      "target": "算力技术分类",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680747332000,\"enterpriseId\":\"1643792398949089282\",\"id\":\"1643799569766088705\",\"maturity\":\"1\",\"remark\":\"北京奇虎科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642840752349839362\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680747802000}"
    }
  }, {
    "source": "图灵通诺（北京）科技有限公司",
    "target": "云计算",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397430337545",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "图灵通诺（北京）科技有限公司",
      "target": "云计算",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680747427000,\"enterpriseId\":\"1643792398332526593\",\"id\":\"1643799967209947138\",\"maturity\":\"1\",\"remark\":\"图灵通诺（北京）科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839193188630530\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680747789000}"
    }
  }, {
    "source": "图灵通诺（北京）科技有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397430337546",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "图灵通诺（北京）科技有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680747515000,\"enterpriseId\":\"1643792398332526593\",\"id\":\"1643800334870052865\",\"maturity\":\"1\",\"remark\":\"图灵通诺（北京）科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680747778000}"
    }
  }, {
    "source": "北京羽医甘蓝信息技术有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397430337547",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京羽医甘蓝信息技术有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680747767000,\"enterpriseId\":\"1643792398504493058\",\"id\":\"1643801391679471617\",\"maturity\":\"1\",\"remark\":\"北京羽医甘蓝信息技术有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\"}"
    }
  }, {
    "source": "北京卓视智通科技有限责任公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397434531841",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京卓视智通科技有限责任公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680747874000,\"enterpriseId\":\"1643792398865203201\",\"id\":\"1643801840323198977\",\"maturity\":\"1\",\"remark\":\"北京卓视智通科技有限责任公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\"}"
    }
  }, {
    "source": "上海燧原科技有限公司",
    "target": "结构化数据机器学习",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397434531842",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "上海燧原科技有限公司",
      "target": "结构化数据机器学习",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680747973000,\"enterpriseId\":\"1643792399158804481\",\"id\":\"1643802256536567810\",\"maturity\":\"1\",\"remark\":\"上海燧原科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838768506961921\"}"
    }
  }, {
    "source": "北京瑞莱智慧科技有限公司",
    "target": "联邦学习及隐私计算",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397434531843",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京瑞莱智慧科技有限公司",
      "target": "联邦学习及隐私计算",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748026000,\"enterpriseId\":\"1643792399603400706\",\"id\":\"1643802479036006402\",\"maturity\":\"1\",\"remark\":\"北京瑞莱智慧科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838923473911810\"}"
    }
  }, {
    "source": "北京瑞莱智慧科技有限公司",
    "target": "结构化数据机器学习",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397434531844",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京瑞莱智慧科技有限公司",
      "target": "结构化数据机器学习",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748050000,\"enterpriseId\":\"1643792399603400706\",\"id\":\"1643802577593761793\",\"maturity\":\"1\",\"remark\":\"北京瑞莱智慧科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838768506961921\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680748082000}"
    }
  }, {
    "source": "北京瑞莱智慧科技有限公司",
    "target": "多模态机器学习",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397434531845",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京瑞莱智慧科技有限公司",
      "target": "多模态机器学习",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748055000,\"enterpriseId\":\"1643792399603400706\",\"id\":\"1643802600427552769\",\"maturity\":\"1\",\"remark\":\"北京瑞莱智慧科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642819982961737729\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680748110000}"
    }
  }, {
    "source": "杉数科技（北京）有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397434531846",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "杉数科技（北京）有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748147000,\"enterpriseId\":\"1643792397497860098\",\"id\":\"1643802986316103681\",\"maturity\":\"1\",\"remark\":\"杉数科技（北京）有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\"}"
    }
  }, {
    "source": "杉数科技（北京）有限公司",
    "target": "运筹学",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397434531847",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "杉数科技（北京）有限公司",
      "target": "运筹学",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748196000,\"enterpriseId\":\"1643792397497860098\",\"id\":\"1643803191925080065\",\"maturity\":\"1\",\"remark\":\"杉数科技（北京）有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839073709686785\"}"
    }
  }, {
    "source": "爱动超越人工智能科技（北京）有限责任公司",
    "target": "算力技术分类",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397434531848",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "爱动超越人工智能科技（北京）有限责任公司",
      "target": "算力技术分类",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748230000,\"enterpriseId\":\"1643792399423045633\",\"id\":\"1643803333617057794\",\"maturity\":\"1\",\"remark\":\"爱动超越人工智能科技（北京）有限责任公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642840752349839362\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680748253000}"
    }
  }, {
    "source": "爱动超越人工智能科技（北京）有限责任公司",
    "target": "云计算",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397434531849",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "爱动超越人工智能科技（北京）有限责任公司",
      "target": "云计算",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748234000,\"enterpriseId\":\"1643792399423045633\",\"id\":\"1643803350381690881\",\"maturity\":\"1\",\"remark\":\"爱动超越人工智能科技（北京）有限责任公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839193188630530\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680748272000}"
    }
  }, {
    "source": "北京中科闻歌科技股份有限公司",
    "target": "结构化数据机器学习",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397434531850",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科闻歌科技股份有限公司",
      "target": "结构化数据机器学习",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748291000,\"enterpriseId\":\"1643792398143782914\",\"id\":\"1643803589012422657\",\"maturity\":\"1\",\"remark\":\"北京中科闻歌科技股份有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838768506961921\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680748320000}"
    }
  }, {
    "source": "北京中科闻歌科技股份有限公司",
    "target": "算法技术分类",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397434531851",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科闻歌科技股份有限公司",
      "target": "算法技术分类",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748295000,\"enterpriseId\":\"1643792398143782914\",\"id\":\"1643803607614160898\",\"maturity\":\"1\",\"remark\":\"北京中科闻歌科技股份有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642840218322665473\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680748335000}"
    }
  }, {
    "source": "北京无疆脑智科技有限公司",
    "target": "数据应用(垂直行业)",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397438726146",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京无疆脑智科技有限公司",
      "target": "数据应用(垂直行业)",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748356000,\"enterpriseId\":\"1643792398240251905\",\"id\":\"1643803862736896002\",\"maturity\":\"1\",\"remark\":\"北京无疆脑智科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820051005931521\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680748403000}"
    }
  }, {
    "source": "北京无疆脑智科技有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397438726147",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京无疆脑智科技有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748364000,\"enterpriseId\":\"1643792398240251905\",\"id\":\"1643803894827515905\",\"maturity\":\"1\",\"remark\":\"北京无疆脑智科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680748415000}"
    }
  }, {
    "source": "北京无疆脑智科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397438726148",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京无疆脑智科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680748369000,\"enterpriseId\":\"1643792398240251905\",\"id\":\"1643803916675645442\",\"maturity\":\"1\",\"remark\":\"北京无疆脑智科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680748437000}"
    }
  }, {
    "source": "北京外号信息技术有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397438726149",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京外号信息技术有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763121000,\"enterpriseId\":\"1643792397191675906\",\"id\":\"1643865792465928193\",\"maturity\":\"1\",\"remark\":\"北京外号信息技术有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\"}"
    }
  }, {
    "source": "北京外号信息技术有限公司",
    "target": "算力技术分类",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397438726150",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京外号信息技术有限公司",
      "target": "算力技术分类",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763137000,\"enterpriseId\":\"1643792397191675906\",\"id\":\"1643865859151167489\",\"maturity\":\"1\",\"remark\":\"北京外号信息技术有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642840752349839362\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680763179000}"
    }
  }, {
    "source": "北京外号信息技术有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397438726151",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京外号信息技术有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763142000,\"enterpriseId\":\"1643792397191675906\",\"id\":\"1643865880923799553\",\"maturity\":\"1\",\"remark\":\"北京外号信息技术有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680763209000}"
    }
  }, {
    "source": "北京未末卓然科技有限公司",
    "target": "运筹学",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397438726152",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京未末卓然科技有限公司",
      "target": "运筹学",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763234000,\"enterpriseId\":\"1643792397405585410\",\"id\":\"1643866267525382146\",\"maturity\":\"1\",\"remark\":\"北京未末卓然科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839073709686785\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680763270000}"
    }
  }, {
    "source": "北京未末卓然科技有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397438726153",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京未末卓然科技有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763240000,\"enterpriseId\":\"1643792397405585410\",\"id\":\"1643866292066254849\",\"maturity\":\"1\",\"remark\":\"北京未末卓然科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680763287000}"
    }
  }, {
    "source": "时趣互动（北京）科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397438726154",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "时趣互动（北京）科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763330000,\"enterpriseId\":\"1643792397317505026\",\"id\":\"1643866669394231298\",\"maturity\":\"1\",\"remark\":\"时趣互动（北京）科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\"}"
    }
  }, {
    "source": "北京数美时代科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397438726155",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京数美时代科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763369000,\"enterpriseId\":\"1643792397585940481\",\"id\":\"1643866832556851202\",\"maturity\":\"1\",\"remark\":\"北京数美时代科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\"}"
    }
  }, {
    "source": "北京深演智能科技股份有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397438726156",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京深演智能科技股份有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763398000,\"enterpriseId\":\"1643792397678215169\",\"id\":\"1643866952216150018\",\"maturity\":\"1\",\"remark\":\"北京深演智能科技股份有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680763417000}"
    }
  }, {
    "source": "北京深演智能科技股份有限公司",
    "target": "运筹学",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397438726157",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京深演智能科技股份有限公司",
      "target": "运筹学",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763403000,\"enterpriseId\":\"1643792397678215169\",\"id\":\"1643866974634704898\",\"maturity\":\"1\",\"remark\":\"北京深演智能科技股份有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839073709686785\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680763437000}"
    }
  }, {
    "source": "北京时代凌宇科技股份有限公司",
    "target": "物联网",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397442920449",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京时代凌宇科技股份有限公司",
      "target": "物联网",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763501000,\"enterpriseId\":\"1643792397783072770\",\"id\":\"1643867385940738050\",\"maturity\":\"1\",\"remark\":\"北京时代凌宇科技股份有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839303528185858\"}"
    }
  }, {
    "source": "北京中科汇联科技股份有限公司",
    "target": "语音处理",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397442920450",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科汇联科技股份有限公司",
      "target": "语音处理",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763550000,\"enterpriseId\":\"1643792397871153153\",\"id\":\"1643867590274646017\",\"maturity\":\"1\",\"remark\":\"北京中科汇联科技股份有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838681034752001\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680763627000}"
    }
  }, {
    "source": "北京中科汇联科技股份有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397442920451",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科汇联科技股份有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763554000,\"enterpriseId\":\"1643792397871153153\",\"id\":\"1643867609769771010\",\"maturity\":\"1\",\"remark\":\"北京中科汇联科技股份有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680763661000}"
    }
  }, {
    "source": "北京中科汇联科技股份有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397442920452",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科汇联科技股份有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763560000,\"enterpriseId\":\"1643792397871153153\",\"id\":\"1643867631332687873\",\"maturity\":\"1\",\"remark\":\"北京中科汇联科技股份有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680763681000}"
    }
  }, {
    "source": "北京中科汇联科技股份有限公司",
    "target": " 数据智能/可视化（数字孪生）/BI",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397442920453",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科汇联科技股份有限公司",
      "target": " 数据智能/可视化（数字孪生）/BI",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763565000,\"enterpriseId\":\"1643792397871153153\",\"id\":\"1643867655689011202\",\"maturity\":\"1\",\"remark\":\"北京中科汇联科技股份有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820115405275138\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680763694000}"
    }
  }, {
    "source": "阿呆科技（北京）有限公司",
    "target": "数据应用(垂直行业)",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397442920454",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "阿呆科技（北京）有限公司",
      "target": "数据应用(垂直行业)",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763928000,\"enterpriseId\":\"1643792397971816450\",\"id\":\"1643869175235018754\",\"maturity\":\"1\",\"remark\":\"阿呆科技（北京）有限公司（望里科技）\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820051005931521\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680763992000}"
    }
  }, {
    "source": "阿呆科技（北京）有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397442920455",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "阿呆科技（北京）有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763936000,\"enterpriseId\":\"1643792397971816450\",\"id\":\"1643869209129189378\",\"maturity\":\"1\",\"remark\":\"阿呆科技（北京）有限公司（望里科技）\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680764004000}"
    }
  }, {
    "source": "阿呆科技（北京）有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397442920456",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "阿呆科技（北京）有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680763940000,\"enterpriseId\":\"1643792397971816450\",\"id\":\"1643869227307302914\",\"maturity\":\"1\",\"remark\":\"阿呆科技（北京）有限公司（望里科技）\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680764017000}"
    }
  }, {
    "source": "北京灵犀微光科技有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397442920457",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京灵犀微光科技有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764059000,\"enterpriseId\":\"1643792398059896833\",\"id\":\"1643869725246685185\",\"maturity\":\"1\",\"remark\":\"北京灵犀微光科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\"}"
    }
  }, {
    "source": "光子算数(北京)科技有限责任公司",
    "target": "芯片",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397442920458",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "光子算数(北京)科技有限责任公司",
      "target": "芯片",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764130000,\"enterpriseId\":\"1643792398416412674\",\"id\":\"1643870024132788225\",\"maturity\":\"1\",\"remark\":\"光子算数(北京)科技有限责任公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839236406738945\"}"
    }
  }, {
    "source": "北京七鑫易维信息技术有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397442920459",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京七鑫易维信息技术有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764168000,\"enterpriseId\":\"1643792398588379138\",\"id\":\"1643870183935770625\",\"maturity\":\"1\",\"remark\":\"北京七鑫易维信息技术有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\"}"
    }
  }, {
    "source": "北京全景声信息科技有限公司",
    "target": "语音处理",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397447114753",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京全景声信息科技有限公司",
      "target": "语音处理",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764328000,\"enterpriseId\":\"1643792398684848129\",\"id\":\"1643870854395265025\",\"maturity\":\"1\",\"remark\":\"北京全景声信息科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838681034752001\"}"
    }
  }, {
    "source": "北京聚力维度科技有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397447114754",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京聚力维度科技有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764365000,\"enterpriseId\":\"1643792398772928513\",\"id\":\"1643871009500626946\",\"maturity\":\"1\",\"remark\":\"北京聚力维度科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\"}"
    }
  }, {
    "source": "北京优锘科技有限公司",
    "target": " 数据智能/可视化（数字孪生）/BI",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397447114755",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京优锘科技有限公司",
      "target": " 数据智能/可视化（数字孪生）/BI",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764702000,\"enterpriseId\":\"1643792399070724098\",\"id\":\"1643872422133825537\",\"maturity\":\"1\",\"remark\":\"北京优锘科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820115405275138\"}"
    }
  }, {
    "source": "云控蜂核北京科技有限公司",
    "target": "联邦学习及隐私计算",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397447114756",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "云控蜂核北京科技有限公司",
      "target": "联邦学习及隐私计算",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764721000,\"enterpriseId\":\"1643792399242690562\",\"id\":\"1643872501011906562\",\"maturity\":\"1\",\"remark\":\"云控蜂核（北京）科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838923473911810\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680764780000}"
    }
  }, {
    "source": "云控蜂核北京科技有限公司",
    "target": "芯片",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397447114757",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "云控蜂核北京科技有限公司",
      "target": "芯片",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764725000,\"enterpriseId\":\"1643792399242690562\",\"id\":\"1643872520519614465\",\"maturity\":\"1\",\"remark\":\"云控蜂核（北京）科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839236406738945\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680764795000}"
    }
  }, {
    "source": "云控蜂核北京科技有限公司",
    "target": "云计算",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397447114758",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "云控蜂核北京科技有限公司",
      "target": "云计算",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764730000,\"enterpriseId\":\"1643792399242690562\",\"id\":\"1643872541222699009\",\"maturity\":\"1\",\"remark\":\"云控蜂核（北京）科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839193188630530\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680764813000}"
    }
  }, {
    "source": "云控蜂核北京科技有限公司",
    "target": "物联网",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397447114759",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "云控蜂核北京科技有限公司",
      "target": "物联网",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764737000,\"enterpriseId\":\"1643792399242690562\",\"id\":\"1643872570297614338\",\"maturity\":\"1\",\"remark\":\"云控蜂核（北京）科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839303528185858\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680764828000}"
    }
  }, {
    "source": "北京深睿博联科技有限责任公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397447114760",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京深睿博联科技有限责任公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764862000,\"enterpriseId\":\"1643792399691481090\",\"id\":\"1643873092178083841\",\"maturity\":\"1\",\"remark\":\"北京深睿博联科技有限责任公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\"}"
    }
  }, {
    "source": "科讯嘉联信息技术有限公司",
    "target": "语音处理",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397447114761",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "科讯嘉联信息技术有限公司",
      "target": "语音处理",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764883000,\"enterpriseId\":\"1643792399779561473\",\"id\":\"1643873182598889474\",\"maturity\":\"1\",\"remark\":\"科讯嘉联信息技术有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838681034752001\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680764911000}"
    }
  }, {
    "source": "科讯嘉联信息技术有限公司",
    "target": "物联网",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397447114762",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "科讯嘉联信息技术有限公司",
      "target": "物联网",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764889000,\"enterpriseId\":\"1643792399779561473\",\"id\":\"1643873205432680450\",\"maturity\":\"1\",\"remark\":\"科讯嘉联信息技术有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839303528185858\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680764939000}"
    }
  }, {
    "source": "北京龙田华远科技有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397447114763",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京龙田华远科技有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764958000,\"enterpriseId\":\"1643792399867641858\",\"id\":\"1643873496076976129\",\"maturity\":\"1\",\"remark\":\"北京龙田华远科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680764995000}"
    }
  }, {
    "source": "北京龙田华远科技有限公司",
    "target": "语音处理",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397451309057",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京龙田华远科技有限公司",
      "target": "语音处理",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764962000,\"enterpriseId\":\"1643792399867641858\",\"id\":\"1643873514594828290\",\"maturity\":\"1\",\"remark\":\"北京龙田华远科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838681034752001\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680765012000}"
    }
  }, {
    "source": "北京龙田华远科技有限公司",
    "target": "物联网",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397451309058",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京龙田华远科技有限公司",
      "target": "物联网",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680764972000,\"enterpriseId\":\"1643792399867641858\",\"id\":\"1643873556894384129\",\"maturity\":\"1\",\"remark\":\"北京龙田华远科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839303528185858\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680765027000}"
    }
  }, {
    "source": "北京文因互联科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397451309059",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京文因互联科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680765069000,\"enterpriseId\":\"1643792399955722241\",\"id\":\"1643873960344485889\",\"maturity\":\"1\",\"remark\":\"北京文因互联科技有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681205755000}"
    }
  }, {
    "source": "中科极限元（杭州）智能科技股份有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397451309060",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "中科极限元（杭州）智能科技股份有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680765108000,\"enterpriseId\":\"1643792400144465922\",\"id\":\"1643874126275346434\",\"maturity\":\"1\",\"remark\":\"中科极限元（杭州）智能科技股份有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680765167000}"
    }
  }, {
    "source": "中科极限元（杭州）智能科技股份有限公司",
    "target": "语音处理",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397451309061",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "中科极限元（杭州）智能科技股份有限公司",
      "target": "语音处理",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680765132000,\"enterpriseId\":\"1643792400144465922\",\"id\":\"1643874225650991105\",\"maturity\":\"1\",\"remark\":\"中科极限元（杭州）智能科技股份有限公司\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838681034752001\"}"
    }
  }, {
    "source": "北京宝龙德科技有限责任公司",
    "target": "物理仿真",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397451309062",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京宝龙德科技有限责任公司",
      "target": "物理仿真",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680861353000,\"enterpriseId\":\"1623581820444016642\",\"id\":\"1644277805876838401\",\"maturity\":\"1\",\"remark\":\"北京宝龙德科技有限责任公司—核心锂电池技术、铅酸电池混用技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839012770643970\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681205657000}"
    }
  }, {
    "source": "上海艾麒信息科技股份有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397451309063",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "上海艾麒信息科技股份有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680861433000,\"enterpriseId\":\"1628327623800717313\",\"id\":\"1644278140259336193\",\"maturity\":\"1\",\"remark\":\"上海艾麒信息科技股份有限公司—计算机视觉：音视频编辑引擎及图形图像渲染引擎、音视频编解码引擎、人脸识别技术、图像与视频分割技术、 图像与视频修复技术、图像增强技术、图像识别与场景识别技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681122144000}"
    }
  }, {
    "source": "上海艾麒信息科技股份有限公司",
    "target": "语音处理",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397451309064",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "上海艾麒信息科技股份有限公司",
      "target": "语音处理",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680861809000,\"enterpriseId\":\"1628327623800717313\",\"id\":\"1644279717615435777\",\"maturity\":\"1\",\"remark\":\"上海艾麒信息科技股份有限公司—语音处理：音视频播放引擎\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838681034752001\"}"
    }
  }, {
    "source": "神州灵云（北京）科技有限公司",
    "target": "多模态机器学习",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397451309065",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "神州灵云（北京）科技有限公司",
      "target": "多模态机器学习",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680862091000,\"enterpriseId\":\"1628311293009657857\",\"id\":\"1644280902405652482\",\"maturity\":\"1\",\"remark\":\"神州灵云（北京）科技有限公司—多模态机器学习：DT引擎\",\"sysOrgCode\":\"A01\",\"techId\":\"1642819982961737729\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680862097000}"
    }
  }, {
    "source": "山东云天安全技术有限公司",
    "target": "云计算",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397451309066",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "山东云天安全技术有限公司",
      "target": "云计算",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680862147000,\"enterpriseId\":\"1630007711504072706\",\"id\":\"1644281135621537793\",\"maturity\":\"1\",\"remark\":\"山东云天安全技术有限公司—云计算：云安全\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839193188630530\"}"
    }
  }, {
    "source": "友道科技有限公司",
    "target": " 数据智能/可视化（数字孪生）/BI",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397455503361",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "友道科技有限公司",
      "target": " 数据智能/可视化（数字孪生）/BI",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680862181000,\"enterpriseId\":\"1630492795105509378\",\"id\":\"1644281278819270657\",\"maturity\":\"1\",\"remark\":\"友道科技有限公司—数据智能/可视化（数字孪生）/BI：大数据技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820115405275138\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681197779000}"
    }
  }, {
    "source": "北京至臻云智能科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397455503362",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京至臻云智能科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680862210000,\"enterpriseId\":\"1630872139950784514\",\"id\":\"1644281402328940546\",\"maturity\":\"1\",\"remark\":\"北京至臻云智能科技有限公司—自然语言处理与知识图谱：知识图谱\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680862261000}"
    }
  }, {
    "source": "北京至臻云智能科技有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397455503363",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京至臻云智能科技有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1680862215000,\"enterpriseId\":\"1630872139950784514\",\"id\":\"1644281422121861121\",\"maturity\":\"1\",\"remark\":\"北京至臻云智能科技有限公司—计算机视觉：图文识别\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\",\"updateBy\":\"qiye_admin\",\"updateTime\":1680862356000}"
    }
  }, {
    "source": "爱笔（北京）智能科技有限公司",
    "target": " 数据智能/可视化（数字孪生）/BI",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397455503364",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "爱笔（北京）智能科技有限公司",
      "target": " 数据智能/可视化（数字孪生）/BI",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121186000,\"enterpriseId\":\"1645314304911147009\",\"id\":\"1645367624149303298\",\"maturity\":\"1\",\"remark\":\"爱笔（北京）智能科技有限公司—数据智能/可视化（数字孪生）/BI：大数据分析\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820115405275138\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681121195000}"
    }
  }, {
    "source": "爱笔（北京）智能科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397455503365",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "爱笔（北京）智能科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121246000,\"enterpriseId\":\"1645314304911147009\",\"id\":\"1645367877116166145\",\"maturity\":\"1\",\"remark\":\"爱笔（北京）智能科技有限公司—自然语言处理与知识图谱：自然语言理解\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681121389000}"
    }
  }, {
    "source": "爱笔（北京）智能科技有限公司",
    "target": "语音处理",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397455503366",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "爱笔（北京）智能科技有限公司",
      "target": "语音处理",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121381000,\"enterpriseId\":\"1645314304911147009\",\"id\":\"1645368441770147842\",\"maturity\":\"1\",\"remark\":\"爱笔（北京）智能科技有限公司—语音处理：语音识别\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838681034752001\"}"
    }
  }, {
    "source": "北京上奇数字科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397455503367",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京上奇数字科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121473000,\"enterpriseId\":\"1645318266901037057\",\"id\":\"1645368829487415298\",\"maturity\":\"1\",\"remark\":\"北京上奇数字科技有限公司—自然语言处理与知识图谱：自然语言处理、知识演化与推理、深度搜索和交互\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681121502000}"
    }
  }, {
    "source": "北京上奇数字科技有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397455503368",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京上奇数字科技有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121555000,\"enterpriseId\":\"1645318266901037057\",\"id\":\"1645369174737354754\",\"maturity\":\"1\",\"remark\":\"北京上奇数字科技有限公司—计算机视觉：智能描述与生成\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\"}"
    }
  }, {
    "source": "北京元圈科技发展有限公司",
    "target": "物联网",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397455503369",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京元圈科技发展有限公司",
      "target": "物联网",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121600000,\"enterpriseId\":\"1645318479556444162\",\"id\":\"1645369361618763777\",\"maturity\":\"1\",\"remark\":\"北京元圈科技发展有限公司—物联网：人机交互\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839303528185858\"}"
    }
  }, {
    "source": "北京中科微澜科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397455503370",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京中科微澜科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121668000,\"enterpriseId\":\"1645318835292143618\",\"id\":\"1645369646986625026\",\"maturity\":\"1\",\"remark\":\"北京中科微澜科技有限公司—自然语言处理与知识图谱：漏洞图谱技术(VulGraph)\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\"}"
    }
  }, {
    "source": "北京健康有益科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397455503371",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京健康有益科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121731000,\"enterpriseId\":\"1645319667987316737\",\"id\":\"1645369912976801793\",\"maturity\":\"1\",\"remark\":\"北京健康有益科技有限公司—自然语言处理与知识图谱：知识图谱\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\"}"
    }
  }, {
    "source": "北京健康有益科技有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397455503372",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京健康有益科技有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121774000,\"enterpriseId\":\"1645319667987316737\",\"id\":\"1645370093210238977\",\"maturity\":\"1\",\"remark\":\"北京健康有益科技有限公司—计算机视觉：图像识别\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\"}"
    }
  }, {
    "source": "北京青云科技股份有限公司",
    "target": "云计算",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697665",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京青云科技股份有限公司",
      "target": "云计算",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121818000,\"enterpriseId\":\"1645320268515180545\",\"id\":\"1645370276367106049\",\"maturity\":\"1\",\"remark\":\"北京青云科技股份有限公司—云计算：容器技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839193188630530\"}"
    }
  }, {
    "source": "北京智齿博创科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697666",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京智齿博创科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121864000,\"enterpriseId\":\"1645319911009484801\",\"id\":\"1645370467749003265\",\"maturity\":\"1\",\"remark\":\"北京智齿博创科技有限公司—自然语言处理与知识图谱：自然语言理解\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\"}"
    }
  }, {
    "source": "北京壁仞科技开发有限公司",
    "target": "芯片",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697667",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京壁仞科技开发有限公司",
      "target": "芯片",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121909000,\"enterpriseId\":\"1645320456101232642\",\"id\":\"1645370658132656129\",\"maturity\":\"1\",\"remark\":\"北京壁仞科技开发有限公司—芯片：GPU\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839236406738945\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681205732000}"
    }
  }, {
    "source": "北京希嘉万维科技有限公司",
    "target": " 数据智能/可视化（数字孪生）/BI",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697668",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京希嘉万维科技有限公司",
      "target": " 数据智能/可视化（数字孪生）/BI",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681121970000,\"enterpriseId\":\"1645601189336252417\",\"id\":\"1645370913830010881\",\"maturity\":\"1\",\"remark\":\"北京希嘉万维科技有限公司—数据智能/可视化（数字孪生）/BI：数字孪生\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820115405275138\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681177209000}"
    }
  }, {
    "source": "北京宝龙德科技有限责任公司",
    "target": "物理仿真",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697669",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京宝龙德科技有限责任公司",
      "target": "物理仿真",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681122027000,\"enterpriseId\":\"1623581820444016642\",\"id\":\"1645371152980836354\",\"maturity\":\"1\",\"remark\":\"北京宝龙德科技有限责任公司—核心锂电池技术、铅酸电池混用技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839012770643970\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681122056000}"
    }
  }, {
    "source": "北京畅行信息技术有限公司",
    "target": " 数据智能/可视化（数字孪生）/BI",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697670",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京畅行信息技术有限公司",
      "target": " 数据智能/可视化（数字孪生）/BI",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681122425000,\"enterpriseId\":\"1645321413698584577\",\"id\":\"1645372823609868289\",\"maturity\":\"1\",\"remark\":\"北京畅行信息技术有限公司（嘀嗒出行）—数据智能/可视化（数字孪生）/BI：大数据处理技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820115405275138\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681197577000}"
    }
  }, {
    "source": "南京市趣飞机器人有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697671",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "南京市趣飞机器人有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681122481000,\"enterpriseId\":\"1645322363460976641\",\"id\":\"1645373055022202881\",\"maturity\":\"1\",\"remark\":\"南京市趣飞机器人有限公司—计算机视觉：视觉自动识别技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\"}"
    }
  }, {
    "source": "北京知优科技有限公司",
    "target": "数据存储和管理",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697672",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京知优科技有限公司",
      "target": "数据存储和管理",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681122507000,\"enterpriseId\":\"1645322363549057026\",\"id\":\"1645373167798648834\",\"maturity\":\"1\",\"remark\":\"北京知优科技有限公司—数据存储和管理：数据语义化存储\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820220053159938\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681122571000}"
    }
  }, {
    "source": "北京知优科技有限公司",
    "target": "多模态机器学习",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697673",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京知优科技有限公司",
      "target": "多模态机器学习",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681122512000,\"enterpriseId\":\"1645322363549057026\",\"id\":\"1645373184986906626\",\"maturity\":\"1\",\"remark\":\"北京知优科技有限公司—多模态机器学习：图神经网络模型\",\"sysOrgCode\":\"A01\",\"techId\":\"1642819982961737729\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681122597000}"
    }
  }, {
    "source": "北京知优科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697674",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京知优科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681122518000,\"enterpriseId\":\"1645322363549057026\",\"id\":\"1645373210219839490\",\"maturity\":\"1\",\"remark\":\"北京知优科技有限公司—自然语言处理与知识图谱：场景化知识推理预测\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681122622000}"
    }
  }, {
    "source": "北京知优科技有限公司",
    "target": " 数据智能/可视化（数字孪生）/BI",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697675",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京知优科技有限公司",
      "target": " 数据智能/可视化（数字孪生）/BI",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681122522000,\"enterpriseId\":\"1645322363549057026\",\"id\":\"1645373227756224514\",\"maturity\":\"1\",\"remark\":\"北京知优科技有限公司—数据智能/可视化（数字孪生）/BI：数字孪生\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820115405275138\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681122648000}"
    }
  }, {
    "source": "北京畅行信息技术有限公司",
    "target": "云计算",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697676",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京畅行信息技术有限公司",
      "target": "云计算",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681197644000,\"enterpriseId\":\"1645321413698584577\",\"id\":\"1645688312198397954\",\"maturity\":\"1\",\"remark\":\"北京畅行信息技术有限公司（嘀嗒出行）—云计算：云计算技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839193188630530\"}"
    }
  }, {
    "source": "北京畅行信息技术有限公司",
    "target": "联邦学习及隐私计算",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397459697677",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京畅行信息技术有限公司",
      "target": "联邦学习及隐私计算",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681197696000,\"enterpriseId\":\"1645321413698584577\",\"id\":\"1645688531573080066\",\"maturity\":\"1\",\"remark\":\"北京畅行信息技术有限公司（嘀嗒出行）—联邦学习及隐私计算：安全技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838923473911810\"}"
    }
  }, {
    "source": "友道科技有限公司",
    "target": "物联网",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397463891970",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "友道科技有限公司",
      "target": "物联网",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681197944000,\"enterpriseId\":\"1630492795105509378\",\"id\":\"1645689570028224514\",\"maturity\":\"1\",\"remark\":\"友道科技有限公司—物联网：铁道信号自动控制技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839303528185858\"}"
    }
  }, {
    "source": "北京史河科技有限公司",
    "target": "物联网",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397463891971",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京史河科技有限公司",
      "target": "物联网",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681200141000,\"enterpriseId\":\"1645601189424332802\",\"id\":\"1645698785882996737\",\"maturity\":\"1\",\"remark\":\"北京史河科技有限公司—物联网：工业物联网\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839303528185858\"}"
    }
  }, {
    "source": "方智特（北京）科技有限公司",
    "target": "结构化数据机器学习",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397463891972",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "方智特（北京）科技有限公司",
      "target": "结构化数据机器学习",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681200770000,\"enterpriseId\":\"1645601189508218881\",\"id\":\"1645701422967750657\",\"maturity\":\"1\",\"remark\":\"方智特（北京）科技有限公司—结构化数据机器学习：深度神经网络、支持向量机\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838768506961921\"}"
    }
  }, {
    "source": "北京天亿时代科技有限公司",
    "target": "计算机视觉",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397463891973",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京天亿时代科技有限公司",
      "target": "计算机视觉",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681200817000,\"enterpriseId\":\"1645322363901378562\",\"id\":\"1645701621404467202\",\"maturity\":\"1\",\"remark\":\"北京天亿时代科技有限公司—计算机视觉：视觉算法\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838337810661378\"}"
    }
  }, {
    "source": "索为技术股份有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397463891974",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "索为技术股份有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681200860000,\"enterpriseId\":\"1645322363985264641\",\"id\":\"1645701801788899329\",\"maturity\":\"1\",\"remark\":\"索为技术股份有限公司—自然语言处理与知识图谱：知识自动化技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\"}"
    }
  }, {
    "source": "北京云庐科技有限公司",
    "target": "物理仿真",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397463891975",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京云庐科技有限公司",
      "target": "物理仿真",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681200935000,\"enterpriseId\":\"1645322363641331714\",\"id\":\"1645702115501867010\",\"maturity\":\"1\",\"remark\":\"北京云庐科技有限公司—物理仿真：多物理场仿真\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839012770643970\"}"
    }
  }, {
    "source": "北京云庐科技有限公司",
    "target": "云计算",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397463891976",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京云庐科技有限公司",
      "target": "云计算",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681201017000,\"enterpriseId\":\"1645322363641331714\",\"id\":\"1645702461691330562\",\"maturity\":\"1\",\"remark\":\"北京云庐科技有限公司—云计算：超大规模并行计算\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839193188630530\"}"
    }
  }, {
    "source": "北京云庐科技有限公司",
    "target": "物联网",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397463891977",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京云庐科技有限公司",
      "target": "物联网",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681201068000,\"enterpriseId\":\"1645322363641331714\",\"id\":\"1645702674522898434\",\"maturity\":\"1\",\"remark\":\"北京云庐科技有限公司—物联网：边云协同\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839303528185858\"}"
    }
  }, {
    "source": "理工雷科智途（北京）科技有限公司",
    "target": " 数据智能/可视化（数字孪生）/BI",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397463891978",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "理工雷科智途（北京）科技有限公司",
      "target": " 数据智能/可视化（数字孪生）/BI",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681201127000,\"enterpriseId\":\"1645322363813298178\",\"id\":\"1645702923198988290\",\"maturity\":\"1\",\"remark\":\"理工雷科智途（北京）科技有限公司—数据智能/可视化（数字孪生）/BI：多源数据融合技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820115405275138\"}"
    }
  }, {
    "source": "理工雷科智途（北京）科技有限公司",
    "target": "物联网",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397463891979",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "理工雷科智途（北京）科技有限公司",
      "target": "物联网",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681201167000,\"enterpriseId\":\"1645322363813298178\",\"id\":\"1645703089142431745\",\"maturity\":\"1\",\"remark\":\"理工雷科智途（北京）科技有限公司—物联网：自适应非结构化道路控制技术：\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839303528185858\"}"
    }
  }, {
    "source": "南京英诺森软件科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397463891980",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "南京英诺森软件科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681201863000,\"enterpriseId\":\"1645322363729412098\",\"id\":\"1645706008940052482\",\"maturity\":\"1\",\"remark\":\"南京英诺森软件科技有限公司—自然语言处理与知识图谱：知识图谱、NER技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\"}"
    }
  }, {
    "source": "南京英诺森软件科技有限公司",
    "target": "数据存储和管理",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397463891981",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "南京英诺森软件科技有限公司",
      "target": "数据存储和管理",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681201912000,\"enterpriseId\":\"1645322363729412098\",\"id\":\"1645706213794054146\",\"maturity\":\"1\",\"remark\":\"南京英诺森软件科技有限公司—数据存储和管理：埋点技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820220053159938\"}"
    }
  }, {
    "source": "上海山源电子科技股份有限公司",
    "target": "运筹学",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397468086273",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "上海山源电子科技股份有限公司",
      "target": "运筹学",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681202091000,\"enterpriseId\":\"1645601189596299265\",\"id\":\"1645706963756580866\",\"maturity\":\"1\",\"remark\":\"上海山源电子科技股份有限公司—运筹学：无人驾驶\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839073709686785\",\"updateBy\":\"qiye_admin\",\"updateTime\":1681202098000}"
    }
  }, {
    "source": "上海山源电子科技股份有限公司",
    "target": " 数据智能/可视化（数字孪生）/BI",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397468086274",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "上海山源电子科技股份有限公司",
      "target": " 数据智能/可视化（数字孪生）/BI",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681202152000,\"enterpriseId\":\"1645601189596299265\",\"id\":\"1645707221232320514\",\"maturity\":\"1\",\"remark\":\"上海山源电子科技股份有限公司—数据智能/可视化（数字孪生）/BI：大数据分析\",\"sysOrgCode\":\"A01\",\"techId\":\"1642820115405275138\"}"
    }
  }, {
    "source": "荣峰正见（北京）科技有限公司",
    "target": "物联网",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397468086275",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "荣峰正见（北京）科技有限公司",
      "target": "物联网",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681202298000,\"enterpriseId\":\"1645601189680185346\",\"id\":\"1645707835651719170\",\"maturity\":\"1\",\"remark\":\"荣峰正见（北京）科技有限公司—物联网：工业生产领域的AI控制技术、 即时控优技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839303528185858\"}"
    }
  }, {
    "source": "荣峰正见（北京）科技有限公司",
    "target": "物联网",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397468086276",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "荣峰正见（北京）科技有限公司",
      "target": "物联网",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681202401000,\"enterpriseId\":\"1645601189680185346\",\"id\":\"1645708263944683522\",\"maturity\":\"1\",\"remark\":\"中科国风科技有限公司—物联网：风电叶片检测技术\",\"sysOrgCode\":\"A01\",\"techId\":\"1642839303528185858\"}"
    }
  }, {
    "source": "北京东华博泰科技有限公司",
    "target": "自然语言处理与知识图谱",
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "data": {
      "id": "1645975397468086277",
      "createBy": "admin",
      "createTime": "2023-04-12 10:21:30",
      "updateBy": null,
      "updateTime": null,
      "sysOrgCode": "A01",
      "source": "北京东华博泰科技有限公司",
      "target": "自然语言处理与知识图谱",
      "edgeType": "techEdge",
      "edgetypekeyfromproperties": "edgeType",
      "data": "{\"createBy\":\"qiye_admin\",\"createTime\":1681202455000,\"enterpriseId\":\"1645601189847957505\",\"id\":\"1645708491192074241\",\"maturity\":\"1\",\"remark\":\"北京东华博泰科技有限公司—自然语言处理与知识图谱：知识图谱\",\"sysOrgCode\":\"A01\",\"techId\":\"1642838417217224706\"}"
    }
  }],
  "combos": []
};

      /** G6VP 站点 本地上传的数据的 Schema 信息 **/
      export const GI_SCHEMA_DATA = {
  "nodes": [{
    "nodeType": "techNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "properties": {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "sysOrgCode": "string",
      "titleId": "string",
      "nodeType": "string",
      "nodeTypeKeyFromProperties": "string",
      "data": "string"
    }
  }, {
    "nodeType": "productionNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "properties": {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "sysOrgCode": "string",
      "titleId": "string",
      "nodeType": "string",
      "nodeTypeKeyFromProperties": "string",
      "data": "string"
    }
  }, {
    "nodeType": "enterpriseNode",
    "nodeTypeKeyFromProperties": "nodeType",
    "properties": {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "sysOrgCode": "string",
      "titleId": "string",
      "nodeType": "string",
      "nodeTypeKeyFromProperties": "string",
      "data": "string"
    }
  }],
  "edges": [{
    "edgeType": "productionEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "sourceNodeType": "enterpriseNode",
    "targetNodeType": "productionNode",
    "properties": {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "sysOrgCode": "string",
      "source": "string",
      "target": "string",
      "edgeType": "string",
      "edgetypekeyfromproperties": "string",
      "data": "string"
    }
  }, {
    "edgeType": "techEdge",
    "edgeTypeKeyFromProperties": "edgeType",
    "sourceNodeType": "enterpriseNode",
    "targetNodeType": "techNode",
    "properties": {
      "id": "string",
      "createBy": "string",
      "createTime": "string",
      "sysOrgCode": "string",
      "source": "string",
      "target": "string",
      "edgeType": "string",
      "edgetypekeyfromproperties": "string",
      "data": "string"
    }
  }]
};
    