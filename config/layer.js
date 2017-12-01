var simple = {
    "version" : 8,
    "name" : "Bright",
    "sources" :
        {
            "toll" :
                {
                    "type":"vector",
                    "tiles":
                        ['http://fs.navinfo.com/smapapi/tollgate/{z}/{x}/{y}'],
                },
            "Worldannotation": {
                "tiles": ["http://minedata.cn/data/Worldannotation/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Building": {
                "tiles": ["http://minedata.cn/data/Building/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Landuse": {
                "tiles": ["http://minedata.cn/data/Landuse/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Worldislands": {
                "tiles": ["http://minedata.cn/data/Worldislands/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Ptline": {
                "tiles": ["http://minedata.cn/data/Ptline/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Villtown": {
                "tiles": ["http://minedata.cn/data/Villtown/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Greenface": {
                "tiles": ["http://minedata.cn/data/Greenface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Worldwaterface": {
                "tiles": ["http://minedata.cn/data/Worldwaterface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Waterline": {
                "tiles": ["http://minedata.cn/data/Waterline/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Subwaypolygon": {
                "tiles": ["http://minedata.cn/data/Subwaypolygon/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Ptexit": {
                "tiles": ["http://minedata.cn/data/Ptexit/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Poi": {
                "tiles": ["http://minedata.cn/data/Poi/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Waterface": {
                "tiles": ["http://minedata.cn/data/Waterface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Adminbound": {
                "tiles": ["http://minedata.cn/data/Adminbound/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Ptstop": {
                "tiles": ["http://minedata.cn/data/Ptstop/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Railway": {
                "tiles": ["http://minedata.cn/data/Railway/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Adminflag": {
                "tiles": ["http://minedata.cn/data/Adminflag/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Annotation": {
                "tiles": ["http://minedata.cn/data/Annotation/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Worldwaterline": {
                "tiles": ["http://minedata.cn/data/Worldwaterline/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Buildingmore": {
                "tiles": ["http://minedata.cn/data/Buildingmore/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Road": {
                "tiles": ["http://minedata.cn/data/Road/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Worldcountries": {
                "tiles": ["http://minedata.cn/data/Worldcountries/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            }
        },
    "glyphs": "../data/map/{fontstack}/{range}.pbf",
    "sprite" : App.Config.appRoot + "/data/map/sprite/sprite",
    "layers" : [
        {
            "id": "576a22cac9a04cefb8d4bb20c67024d8",
            "maxzoom": 22,
            "source": "",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "background-color": "#fcf9f2"
            },
            "source-layer": "",
            "minzoom": 0,
            "type": "background"
        }, {
            "id": "29ee5cec41f14f38b792c66a15881969",
            "maxzoom": 8.5,
            "source": "Worldwaterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#a6cce6"
            },
            "source-layer": "Worldwaterface",
            "minzoom": 3,
            "type": "fill"
        }, {
            "id": "0f219c7dcbb043a8b4ec5c1ebf74dabc",
            "maxzoom": 8.5,
            "source": "Worldcountries",
            "layout": {
                "visibility": "none"
            },
            "source-layer": "Worldcountries",
            "paint": {
                "fill-color": "#fcf9f2"
            },
            "minzoom": 3,
            "type": "fill"
        }, {
            "id": "be4c6cd1bc2c46aeb3bc6080de2751bf",
            "maxzoom": 8.5,
            "source": "Worldwaterline",
            "layout": {
                "line-join": "round",
                "visibility": "none",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#a6cce6",
                "line-width": 1.0
            },
            "source-layer": "Worldwaterline",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["!=", "kind", "121 "]]
        }, {
            "id": "d7d8d9bed26b483682f96e57d2a024e8",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 30.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.5,
                "text-color": "#704f17",
                "icon-color": "#ff0000"
            },
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "405002"]]
        }, {
            "id": "353eee4cdde34bcaa4ad62849051f28f",
            "maxzoom": 8.5,
            "source": "Worldislands",
            "layout": {
                "visibility": "none"
            },
            "source-layer": "Worldislands",
            "paint": {
                "fill-color": "#ffffff"
            },
            "minzoom": 3,
            "type": "fill"
        }, {
            "id": "655d364695bf4bf8bc10dcb988cbf59b",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 16,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.1,
                "text-color": "#2840b5",
                "icon-color": "#ff0000"
            },
            "minzoom": 4.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "275008"], ["!=", "name_zh", "台湾海峡"]]
        }, {
            "id": "aa92569543e74467aa293d390812c813",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 22.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.1,
                "text-color": "#2840b5",
                "icon-color": "#ff0000"
            },
            "minzoom": 3.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "405003"]]
        }, {
            "id": "a8e35d92311a434496b17447e9f26539",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 16.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-offset": [-1, 0]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#2840b5",
                "text-halo-width": 0.1,
                "icon-color": "#ff0000"
            },
            "source-layer": "Worldannotation",
            "minzoom": 5.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "275008"], ["==", "name_zh", "台湾海峡"]]
        }, {
            "id": "479111309f584b5894775d2b0883a00f",
            "maxzoom": 17.5,
            "source": "Waterline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#a6cce6",
                "line-width": 1.0
            },
            "source-layer": "Waterline",
            "minzoom": 3,
            "type": "line"
        }, {
            "id": "da01a6a0677f4a3aa55fb373f1bae4ce",
            "maxzoom": 8.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#a6cce6"
            },
            "minzoom": 4.0,
            "type": "fill",
            "filter": ["all", ["in", "kind", 3]]
        }, {
            "id": "8282071ddd934b798346093e8c2e95fb",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "none"
            },
            "paint": {
                "fill-color": "#a6cce6"
            },
            "source-layer": "Waterface",
            "minzoom": 3.0,
            "type": "fill",
            "filter": ["all", ["in", "kind", 1]]
        }, {
            "id": "7f0e554edf224faeb7c0dd0e84a0db51",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#e1d9b1",
                "line-width": {
                    "stops": [[3, 4], [8, 10]],
                    "base": 1
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["!in", "form", 8, 2], ["==", "kind", 6]]
        }, {
            "id": "88ee114c7e7a46bfa500e2f2acc33638",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#8d8465",
                "line-width": {
                    "stops": [[3, 0.5], [8, 2]],
                    "base": 1
                }
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["!in", "form", 8, 2], ["==", "kind", 6]]
        }, {
            "id": "fc2c046e556947baab39c4b3fc3e13d1",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#fbf8ee",
                "line-width": {
                    "stops": [[3, 0.2], [17, 0.2]],
                    "base": 1.2
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 2]]
        }, {
            "id": "52c5d8dca1ea4088a8d054d95b006414",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#e1d9b1",
                "line-width": {
                    "stops": [[3, 4], [8, 10]],
                    "base": 1
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 8], ["==", "kind", 6]]
        }, {
            "id": "a2317c152afb4fd98f5dece3782acd66",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-dasharray": [5, 5],
                "line-color": "#8d8465",
                "line-width": {
                    "stops": [[3, 0.5], [8, 2]],
                    "base": 1
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 8], ["==", "kind", 6]]
        }, {
            "id": "83092ebed4f34c6d9f53ca3c0eb13096",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#b7b4af",
                "line-width": 0.5
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "ee93f67ae37844f5aebe4365ad53be23",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-dasharray": [1, 2],
                "line-color": "#b7b4af",
                "line-width": {
                    "stops": [[5, 0.1], [6, 0.2], [7, 1.5], [20, 18]],
                    "base": 1.2
                }
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 7]]
        }, {
            "id": "4ab6107b023c4d4d97e4d7c74763bdde",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Annotation",
            "paint": {
                "text-color": "#222222",
                "icon-color": "#ff0000"
            },
            "minzoom": 5.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "275007"]]
        }, {
            "id": "3e4ce35e1b8849c6a7a015c93fa2bab6",
            "maxzoom": 17.5,
            "source": "Villtown",
            "layout": {
                "visibility": "none",
                "text-field": "{name_zh}"
            },
            "source-layer": "Villtown",
            "paint": {
                "icon-color": "#ff0000"
            },
            "minzoom": 9,
            "type": "symbol"
        }, {
            "id": "dcb6a12b868844b9b2fe9a57f9c83881",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 9.0,
                "visibility": "none",
                "text-field": "{name_brief}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": "#00000f",
                "icon-halo-width": 1,
                "icon-color": "#edfff7"
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 2], ["in", "functionclass", 1, 2]]
        }, {
            "id": "d98ea081dcb746d8af67fb112a4d701e",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#a6cce6"
            },
            "minzoom": 9.0,
            "type": "fill",
            "filter": ["all", ["in", "kind", 3, 4, 2], ["==", "display_class", 5]]
        }, {
            "id": "74211ea893124c7c815289c77adc2f17",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#ffe3e3"
            },
            "minzoom": 13.0,
            "type": "fill",
            "filter": ["all", ["==", "kind", 3]]
        }, {
            "id": "cf697ff69f3e4b72bdf18a4621326055",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#e6e8cf"
            },
            "minzoom": 13,
            "type": "fill",
            "filter": ["all", ["==", "kind", 5]]
        }, {
            "id": "9f6fc656a79b47d6b389b03525a79ba9",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ecf0f5"
            },
            "source-layer": "Landuse",
            "minzoom": 13.0,
            "type": "fill",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "5decd378b0ab45709fd4f99ce1c2d2d3",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#decbbe"
            },
            "minzoom": 13,
            "type": "fill",
            "filter": ["all", ["in", "kind", 37]]
        }, {
            "id": "ab1bb900ebc14c8c94bd415a20b6a969",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#9ed951"
            },
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 30]]
        }, {
            "id": "613c0982453948c0a2ebf9464d2a666f",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#e2efe6"
            },
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 31]]
        }, {
            "id": "92cc3dc9d7ab4ffeabf64633c1f4aaa8",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#e2efe6"
            },
            "source-layer": "Landuse",
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["in", "kind", 36, 2]]
        }, {
            "id": "9ce55afb2a084ed7af5a07358f39f95a",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#edf6f6"
            },
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 4]]
        }, {
            "id": "e0f00dfd26ef4b97a3d07a1469593738",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#a6cce6"
            },
            "minzoom": 11.0,
            "type": "fill",
            "filter": ["all", ["in", "display_class", 3, 4, 1, 2]]
        }, {
            "id": "cf9027786fc94d4aa7358c297584a141",
            "maxzoom": 17.5,
            "source": "Railway",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#a8a6a4",
                "line-width": {
                    "stops": [[6, 1.5], [20, 10]],
                    "base": 1.2
                }
            },
            "source-layer": "Railway",
            "minzoom": 6,
            "type": "line",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "07f6b29226cd432fa2725ec21cdfbc4e",
            "maxzoom": 17.5,
            "source": "Railway",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Railway",
            "paint": {
                "line-dasharray": [8, 8],
                "line-color": "#ffffff",
                "line-width": {
                    "stops": [[6, 0.5], [20, 8]],
                    "base": 1.2
                }
            },
            "minzoom": 6,
            "type": "line",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "4a98a98fbba4422eb63dc6768c9ed554",
            "maxzoom": 17.5,
            "source": "Greenface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#cfe7b4"
            },
            "source-layer": "Greenface",
            "minzoom": 8.0,
            "type": "fill"
        }, {
            "id": "60d750cfc5d9480ebae429f64af2bb33",
            "maxzoom": 17.5,
            "source": "Subwaypolygon",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Subwaypolygon",
            "paint": {
                "fill-color": {
                    "property": "color",
                    "type": "identity"
                },
                "fill-opacity": 0.6
            },
            "minzoom": 16.0,
            "type": "fill"
        }, {
            "id": "361e9ea3ee664e9b9daf5d56c7603bd1",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [[15, 2], [20, 5]],
                    "base": 1.2
                },
                "line-color": "#f9d195",
                "line-width": 0.6
            },
            "source-layer": "Road",
            "minzoom": 15.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 5]]
        }, {
            "id": "3c90599699254bdfb8797dba00beed24",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#ffffff",
                "line-width": {
                    "stops": [[15, 2], [20, 5]],
                    "base": 1.2
                }
            },
            "minzoom": 15,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 5]]
        }, {
            "id": "eebcc3f0f90d4bcba8ebc2c9efd34d38",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#f9ecc1",
                "line-width": {
                    "stops": [[5, 0.7], [6, 1], [20, 10]],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 11.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 4]]
        }, {
            "id": "4dd8a2998f3e4597b066aa02d0893fea",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [[9, 1], [20, 6]],
                    "base": 1
                },
                "line-color": "#f9ca87",
                "line-width": 0.8
            },
            "minzoom": 10.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 3]]
        }, {
            "id": "19dc8ace37e64c0b957af9b058b6a9c0",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#f9ecc1",
                "line-width": {
                    "stops": [[9, 1.2], [20, 6]],
                    "base": 1
                }
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 3]]
        }, {
            "id": "dbe9cde2c2a44bf9832af6fc314b9836",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [[7, 1.2], [9, 1.2], [20, 6]],
                    "base": 1
                },
                "line-color": "#ff7600",
                "line-width": 0.8
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 2]]
        }, {
            "id": "3ae236b2cf7645ef86afcd0022223d7a",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#ffd467",
                "line-width": {
                    "stops": [[7, 1.5], [9, 1.6], [20, 8]],
                    "base": 1
                }
            },
            "minzoom": 7.0,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 2]]
        }, {
            "id": "ed3a8eb5fdf746c1b76ecdcaaf01cad0",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [[5, 0.7], [6, 0.8], [7, 1.4], [9, 1.4], [20, 8]],
                    "base": 1
                },
                "line-color": "#ff6d00",
                "line-width": 0.8
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 1]]
        }, {
            "id": "e8f8468a96c3419290e8a1a5bfb90632",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": {
                    "stops": [[5, "#ffb35b"], [8, "#ffb35b"], [20, "#ffb35b"]],
                    "base": 1
                },
                "line-width": {
                    "stops": [[5, 0.7], [6, 0.8], [7, 1.6], [9, 1.6], [20, 10]],
                    "base": 1
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 1]]
        }, {
            "id": "05415035370046d59b23d0bf4936153a",
            "maxzoom": 17.0,
            "source": "Buildingmore",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Buildingmore",
            "paint": {
                "fill-color": "#dcdecd",
                "fill-opacity": 0.6
            },
            "minzoom": 16,
            "type": "fill"
        }, {
            "id": "c5d7e16d300b4d61ba411d494f198865",
            "maxzoom": 17.5,
            "source": "Buildingmore",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Buildingmore",
            "paint": {
                "fill-extrusion-color": "#dcdecd",
                "fill-extrusion-translate-anchor": "map",
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.6,
                "fill-extrusion-height": {
                    "property": "levels",
                    "type": "identity"
                },
                "fill-extrusion-translate": [0, 0]
            },
            "minzoom": 17,
            "type": "fill-extrusion"
        }, {
            "id": "0706626751d4471e95466fdbb0241cb7",
            "maxzoom": 17.5,
            "source": "Ptline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Ptline",
            "paint": {
                "line-color": "#ffffff",
                "line-width": 3.6
            },
            "minzoom": 10,
            "type": "line",
            "filter": ["all", ["==", "line_type", 2], ["==", "status", 0]]
        }, {
            "id": "a63d823be09c4dbba41114555a30935f",
            "maxzoom": 17.5,
            "source": "Ptline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": {
                    "property": "color",
                    "type": "identity"
                },
                "line-opacity": 0.6,
                "line-width": {
                    "stops": [[10, 1.8], [20, 4]],
                    "base": 1.2
                }
            },
            "source-layer": "Ptline",
            "minzoom": 10,
            "type": "line",
            "filter": ["all", ["==", "line_type", 2], ["==", "status", 0]]
        },{
            "id": "c647f7f79e9947ed833c8ec8544c30be",
            "maxzoom": 17.5,
            "source": "Building",
            "layout": {
                "visibility": "none"
            },
            "paint": {
                "fill-extrusion-color": "#FFEFD5",
                "fill-extrusion-translate-anchor": "map",
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 1,
                "fill-extrusion-height": {
                    "property": "levels",
                    "type": "identity"
                },
                "fill-extrusion-translate": [0, 0]
            },
            "source-layer": "Building",
            "minzoom": 12,
            "type": "fill-extrusion"
        },{
            "id": "f514e7f040154cbd87535f4477f401b6",
            "maxzoom": 17.5,
            "source": "Railway",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "source-layer": "Railway",
            "paint": {
                "text-color": "#464646",
                "icon-color": "#ff0000"
            },
            "minzoom": 6,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 1]]
        },{
            "id": "6c92bf7f953047c7bdac1a7b83befab4",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 14.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "120201"], [">=", "rank", 1]]
        }, {
            "id": "10629e6309bc4618b884e1e0dfbece3d",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 11.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "160205"], [">=", "rank", 3]]
        }, {
            "id": "9ad5db7fc802469b881706f6d16e8e6d",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 11.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "180308"]]
        }, {
            "id": "3c5f8a6c51cf4678975287dbe8b6d549",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#17f9e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 14.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "125140"], [">=", "rank", 7]]
        }, {
            "id": "aa02d7a9a9db4a5faadf707f1034133f",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 12.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "200103"], [">=", "rank", 3]]
        }, {
            "id": "b44ebe2f72864400b586ec70752feacb",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "minzoom": 13.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "200103"], [">=", "rank", 3]]
        },{
            "id": "3c7f6d34241244f19191df4925b8fce4",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-ignore-placement": false,
                "text-offset": [0, 1]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 16.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "230208"]]
        }, {
            "id": "1fe6764e90eb4fb5889ccd2b2ed2de3d",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "text-justify": "center",
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [0, 0]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 11,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "275017"], [">=", "rank", 8]]
        },  {
            "id": "61fe65af63a24fe69563d6d4a3f8558f",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "icon-image": "Tiananmen",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Annotation",
            "minzoom": 10.0,
            "type": "symbol",
            "filter": ["all", ["==", "name_zh", "天安门"]]
        }, {
            "id": "91143e6a929e4facbd5de0f4f1131785",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 10,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "180400"], [">=", "rank", 8]]
        }, {
            "id": "0b7aa1943e1b45f49071327e936b3b62",
            "maxzoom": 17.5,
            "source": "Poi",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000",
                "text-translate": [0, 4]
            },
            "source-layer": "Poi",
            "minzoom": 16.0,
            "type": "symbol",
            "filter": ["all", ["==", "level", "B1"], ["==", "kindcode", "110101"]]
        }, {
            "id": "1a6e58c1c1f74dcbb93425b1a883f8b0",
            "maxzoom": 14.0,
            "source": "Poi",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Poi",
            "minzoom": 11.0,
            "type": "symbol",
            "filter": ["all", ["==", "name_zh", "故宫"], ["==", "level", "A"]]
        }, {
            "id": "e323d12e63c040ddb657b816c2f0ee97",
            "maxzoom": 17.5,
            "source": "Poi",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "icon-size": 0.8,
                "text-offset": [0, 1]
            },
            "source-layer": "Poi",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#c4b29f",
                "text-translate": [0, 4]
            },
            "minzoom": 16,
            "type": "symbol",
            "filter": ["all", ["==", "level", "B1"], ["==", "kindcode", "150101"]]
        }, {
            "id": "9bdac4b4a653439ca1094f330526ccc4",
            "maxzoom": 17.5,
            "source": "Ptstop",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Ptstop",
            "paint": {
                "icon-color": "#e67a7f"
            },
            "minzoom": 16.0,
            "type": "symbol",
            "filter": ["all", ["==", "stationtype", 0], ["==", "status", 0]]
        }, {
            "id": "806c59ecc18a48d69cb64a4384e08f11",
            "maxzoom": 17.5,
            "source": "Ptline",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.0,
                "text-color": "#00215d",
                "icon-color": "#ff0000"
            },
            "source-layer": "Ptline",
            "minzoom": 12.0,
            "type": "symbol",
            "filter": ["all", ["==", "line_type", 2], ["==", "status", 0]]
        }, {
            "id": "af9bbc1e5922420eb2cc37f8a19be4ab",
            "maxzoom": 17.5,
            "source": "Ptstop",
            "layout": {
                "text-size": 13.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "center",
                "text-offset": [0, 1]
            },
            "source-layer": "Ptstop",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.3,
                "icon-color": "#171bf0",
                "text-translate": [0, 10]
            },
            "minzoom": 13.0,
            "type": "symbol",
            "filter": ["all", ["==", "status", 0], ["==", "stationtype", 1], ["==", "istransfer", 1]]
        }, {
            "id": "6f35a4ea3add451f8f6d642b81ad61ba",
            "maxzoom": 17.5,
            "source": "Ptstop",
            "layout": {
                "text-size": 13,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "center",
                "text-offset": [0, 1]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.3,
                "icon-color": "#171bf0",
                "text-translate": [0, 10]
            },
            "source-layer": "Ptstop",
            "minzoom": 13,
            "type": "symbol",
            "filter": ["all", ["==", "status", 0], ["==", "stationtype", 1], ["==", "istransfer", 0]]
        }, {
            "id": "3701865cf253474180e1210f36fa0b11",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 10,
                "visibility": "visible",
                "text-field": "{name_brief}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f98100",
                "text-halo-width": 10,
                "text-color": "#ffffff",
                "icon-halo-width": 1,
                "icon-color": "#3c8724"
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 4], ["in", "functionclass", 1, 2]]
        }, {
            "id": "83b880a892234a4697826a963dd70ea7",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 10,
                "visibility": "visible",
                "text-field": "{name_brief}",
                "text-rotation-alignment": "viewport",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#ff1b00",
                "text-halo-width": 10.0,
                "text-color": "#ffffff",
                "icon-halo-width": 1,
                "icon-color": "#72ff1b"
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 3], ["in", "functionclass", 1, 2]]
        }, {
            "id": "f53414e8f6664e83b5edd0304cb85407",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 10.0,
                "icon-keep-upright": true,
                "visibility": "visible",
                "symbol-avoid-edges": true,
                "text-pitch-alignment": "map",
                "text-field": "{name_brief}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "viewport",
                "icon-rotation-alignment": "map",
                "text-anchor": "center",
                "text-allow-overlap": false,
                "symbol-placement": "line",
                "text-offset": [0, 0]
            },
            "source-layer": "Road",
            "paint": {
                "text-halo-color": "#008100",
                "text-halo-width": 10.0,
                "text-color": "#ffffff",
                "icon-translate-anchor": "map",
                "icon-halo-width": 1.0,
                "icon-color": "#3c8724"
            },
            "minzoom": 8.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 1], ["in", "functionclass", 1, 2]]
        }, {
            "id": "8ef993d712e04d77b4c9906529783dc3",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "symbol",
            "filter": ["all", ["in", "kind", 1, 3], ["in", "functionclass", 1, 2]]
        }, {
            "id": "b886859ca16749eea3eeab6ec7da2f2c",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 10.0,
            "type": "symbol",
            "filter": ["all", ["in", "functionclass", 1, 2], ["!in", "kind", 1, 3, 4]]
        }, {
            "id": "6a96546830c641909d5af114b656ec69",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 11,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 15.0,
            "type": "symbol",
            "filter": ["all", ["in", "functionclass", 4]]
        }, {
            "id": "d36f2f522ffa42f7a07f1a84bd983f67",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 11,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 13.0,
            "type": "symbol",
            "filter": ["all", ["in", "functionclass", 3]]
        }, {
            "id": "2dd712a134d844a9aa6eadb8b1338bec",
            "maxzoom": 11.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "paint": {
                "text-halo-color": "#5e94e4",
                "text-halo-width": 10.0,
                "text-color": "#ffffff",
                "icon-color": "#ff0000",
                "text-translate-anchor": "map"
            },
            "source-layer": "Adminflag",
            "minzoom": 9.0,
            "type": "symbol",
            "filter": ["all", ["==", "type", 4]]
        }, {
            "id": "b25198d1071c4f01ba526c97c75b6039",
            "maxzoom": 9.0,
            "source": "Adminflag",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.0,
                "text-color": "#222222",
                "icon-color": "#ff0000",
                "text-translate-anchor": "map"
            },
            "source-layer": "Adminflag",
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["==", "type", 4]]
        }, {
            "id": "d0d70a04d05744858f145e7b9100beea",
            "maxzoom": 11.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 14.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "map",
                "text-ignore-placement": false,
                "text-allow-overlap": false,
                "text-anchor": "bottom",
                "icon-size": 0.8,
                "text-offset": [0, -0.3]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#222222",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "minzoom": 6.0,
            "type": "symbol",
            "filter": ["all", ["==", "capital", 3]]
        }, {
            "id": "969ccac65a9a421fa831bd8b1929d0e7",
            "maxzoom": 11.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 14.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "map",
                "text-anchor": "bottom",
                "text-allow-overlap": false,
                "icon-size": 0.8,
                "text-offset": [0, -0.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.5,
                "text-color": "#222222",
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 4.0,
            "type": "symbol",
            "filter": ["all", ["==", "capital", 2], ["!=", "name_zh", "香港,澳门"]]
        }, {
            "id": "8bb6384c79b842909f1b686fa21fce89",
            "maxzoom": 8.0,
            "source": "Adminflag",
            "layout": {
                "text-size": {
                    "stops": [[3, 16], [17, 24]],
                    "base": 1
                },
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "bottom",
                "icon-size": 1.5,
                "text-offset": [0, -0.3]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#000000",
                "text-halo-width": 0.1,
                "text-color": "#222222",
                "icon-color": "#ff0000"
            },
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["in", "capital", 1]]
        }, {
            "id": "83f8c3117101411a9880915321e850de",
            "maxzoom": 9.0,
            "source": "Adminflag",
            "layout": {
                "text-size": {
                    "stops": [[3, 16], [17, 24]],
                    "base": 1
                },
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "bottom",
                "icon-size": 0.8,
                "text-offset": [0, -0.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#222222",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 8.0,
            "type": "symbol",
            "filter": ["all", ["in", "capital", 1]]
        }, {
            "id": "3b0a797e9a1245be8a5d7c297fb61829",
            "maxzoom": 3.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 20.0,
                "visibility": "visible",
                "text-justify": "right",
                "text-field": "{name_zh}",
                "text-offset": [2, 1]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#ee0000",
                "text-halo-width": 2.0,
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["in", "capital", 0], ["==", "type", 0]]
        },
        {
            id: 'TollNode_Layer',
            type: 'symbol',
            interactive: true,
            "source" : "toll",
            'source-layer': 'toll',
            minzoom: 0,
            maxzoom: 17.1,
            layout:
                {
                    'icon-image': 'tollstation',
                },
            paint:
                {
                    'icon-color': '#ff2d2d',
                },

        }]
};


var constructionLayer ={
    "version" : 8,
    "name" : "Bright",
    "sources": {
        "construction" :
            {
                "type":"vector",
                "tiles":
                    ['http://fastmap.navinfo.com/smap_c/web/construction/tile/{z}/{x}/{y}'],
            },
        "Zlevel": {
            "tiles": [
                "http://minedata.cn/data/Zlevel/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
            ],
            "type": "vector"
        },
        "Landuse": {
            "tiles": [
                "http://minedata.cn/data/Landuse/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
            ],
            "type": "vector"
        },
        "Merge_1": {
            "tiles": [
                "http://minedata.cn/mergeddata/Villtown,Road,Adminflag,Annotation,Worldannotation/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
            ],
            "type": "vector"
        },
        "Buildingmore": {
            "tiles": [
                "http://minedata.cn/data/Buildingmore/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
            ],
            "type": "vector"
        },
        "Greenface": {
            "tiles": [
                "http://minedata.cn/data/Greenface/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
            ],
            "type": "vector"
        },
        "Waterline": {
            "tiles": [
                "http://minedata.cn/data/Waterface/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
            ],
            "type": "vector"
        },
        "Worldwaterface": {
            "tiles": [
                "http://minedata.cn/data/Worldwaterface/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
            ],
            "type": "vector"
        },
        "Worldcountries": {
            "tiles": [
                "http://minedata.cn/data/Worldcountries/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
            ],
            "type": "vector"
        },
        "Waterface": {
            "tiles": [
                "http://minedata.cn/data/Waterface/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
            ],
            "type": "vector"
        },
        "Adminbound": {
            "tiles": [
                "http://minedata.cn/data/Adminbound/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
            ],
            "type": "vector"
        }
    },
    "glyphs": "http://minedata.cn/minemapapi/v1.3/fonts/{fontstack}/{range}.pbf",
    "sprite" : App.Config.appRoot + "/data/map/sprite/sprite",
    "layers": [
        {
            "id": "305e7db2535044feb87d3045a268898b",
            "maxzoom": 18.0,
            "source": "",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "background-color": "#112138"
            },
            "source-layer": "",
            "minzoom": 3.0,
            "type": "background"
        },
        {
            "id": "415474f1b13243118fb428c340b2e1fd",
            "maxzoom": 5.0,
            "source": "Worldwaterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Worldwaterface",
            "paint": {
                "fill-color": "#041023"
            },
            "minzoom": 3,
            "type": "fill"
        },
        {
            "id": "b0d99c3385ac400287b766c6674b1bd0",
            "maxzoom": 8.5,
            "source": "Worldcountries",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#17305b",
                "fill-opacity": 0.6
            },
            "source-layer": "Worldcountries",
            "minzoom": 3,
            "type": "fill"
        },
        {
            "id": "04076cfa3b38492fa9ba71a556a72aa0",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#041023"
            },
            "source-layer": "Waterface",
            "minzoom": 5.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ]
            ]
        },
        {
            "id": "c539caf5078d4d18be842d5d6143e0b6",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#042235"
            },
            "source-layer": "Landuse",
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 11]]
        },
        {
            "id": "fafd24c4496c44bc9f1a7fa1bb952936",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#0a2b3a"
            },
            "source-layer": "Landuse",
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 12]]
        },
        {
            "id": "82cb514a94f644e7b5ed4bab591a70c4",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#052442"
            },
            "source-layer": "Landuse",
            "minzoom": 12,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ]
            ]
        },
        {
            "id": "4648517cc9d242ba8be100c6d6f95882",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#072d45"
            },
            "source-layer": "Landuse",
            "minzoom": 12,
            "type": "fill",
            "filter": [
                "all",
                [
                    "in",
                    "kind",
                    30,
                    36,
                    35,
                    2
                ]
            ]
        },
        {
            "id": "f400d0d8a8dd4b0b89adf11aa8897b4c",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#032033"
            },
            "source-layer": "Landuse",
            "minzoom": 12,
            "type": "fill",
            "filter": [
                "all",
                [
                    "in",
                    "kind",
                    32,
                    34,
                    33,
                    39
                ]
            ]
        },
        {
            "id": "ef8954911a4d4a979ff94c5e2f20cc34",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#052337"
            },
            "source-layer": "Landuse",
            "minzoom": 12,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ]
            ]
        },
        {
            "id": "b7772d48b6dc4429961c793789e4ea7c",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#032439"
            },
            "source-layer": "Landuse",
            "minzoom": 12,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ]
            ]
        },
        {
            "id": "87e30f334ff240ac897ca098f9e0c803",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#0c3149",
                "fill-opacity": 0.25
            },
            "minzoom": 12,
            "type": "fill",
            "filter": [
                "all",
                [
                    "in",
                    "kind",
                    6,
                    40
                ]
            ]
        },
        {
            "id": "f9a7763dd2bf4ca193755ec78202841a",
            "maxzoom": 17.5,
            "source": "Greenface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Greenface",
            "paint": {
                "fill-color": "#0f486d"
            },
            "minzoom": 8.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "1"
                ]
            ]
        },
        {
            "id": "c4e84c22f63546688ef8d808227d523e",
            "maxzoom": 8.0,
            "source": "Greenface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#0f486d"
            },
            "source-layer": "Greenface",
            "minzoom": 5.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    ">=",
                    "area_level",
                    75
                ],
                [
                    "==",
                    "kind",
                    "1"
                ]
            ]
        },
        {
            "id": "9fecd8d3b2274f2b9acd02619839b492",
            "maxzoom": 9.0,
            "source": "Greenface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#0f486d"
            },
            "source-layer": "Greenface",
            "minzoom": 8.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "in",
                    "kind",
                    "7",
                    "9",
                    "6",
                    "8"
                ],
                [
                    ">=",
                    "area_level",
                    98
                ]
            ]
        },
        {
            "id": "bf5d9a51a5ca444d9eca72a33cc30fba",
            "maxzoom": 10.0,
            "source": "Greenface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Greenface",
            "paint": {
                "fill-color": "#0f486d"
            },
            "minzoom": 9.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "in",
                    "kind",
                    "7",
                    "9",
                    "6",
                    "8"
                ],
                [
                    ">=",
                    "area_level",
                    97
                ]
            ]
        },
        {
            "id": "06fca40f8cd14195be8dbf06b36e479f",
            "maxzoom": 12.0,
            "source": "Greenface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Greenface",
            "paint": {
                "fill-color": "#0f486d"
            },
            "minzoom": 10.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "in",
                    "kind",
                    "7",
                    "9",
                    "6",
                    "8"
                ],
                [
                    ">=",
                    "area_level",
                    90
                ]
            ]
        },
        {
            "id": "499979d1cd4745418b5dbbe412ea3d49",
            "maxzoom": 14.0,
            "source": "Greenface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#0f486d"
            },
            "source-layer": "Greenface",
            "minzoom": 12.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "in",
                    "kind",
                    "7",
                    "9",
                    "6",
                    "8"
                ],
                [
                    ">=",
                    "area_level",
                    75
                ]
            ]
        },
        {
            "id": "e16353324b6048a9ac6c115bd653a8af",
            "maxzoom": 17.5,
            "source": "Greenface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Greenface",
            "paint": {
                "fill-color": "#0f486d"
            },
            "minzoom": 14.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "in",
                    "kind",
                    "7",
                    "9",
                    "6",
                    "8"
                ]
            ]
        },
        {
            "id": "32c908d172f1452195a7881459877cd6",
            "maxzoom": 7.0,
            "source": "Waterline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#022440",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.7
                        ],
                        [
                            6,
                            0.8
                        ],
                        [
                            7,
                            1.6
                        ],
                        [
                            9,
                            1.6
                        ],
                        [
                            20,
                            10
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Waterline",
            "minzoom": 4.0,
            "type": "line"
        },
        {
            "id": "354d4d880ecd431d8ffc3588546923bb",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#022440"
            },
            "minzoom": 3.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    5
                ],
                [
                    "==",
                    "display_class",
                    8
                ]
            ]
        },
        {
            "id": "a1d5deecbf0545389b235850bbdfb893",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#022440"
            },
            "minzoom": 13.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ]
            ]
        },
        {
            "id": "9e30b8e1ded743e4a8b5d1da77982144",
            "maxzoom": 13.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#022440"
            },
            "source-layer": "Waterface",
            "minzoom": 10.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    ">=",
                    "display_class",
                    1
                ],
                [
                    ">=",
                    "area_level",
                    72
                ],
                [
                    "==",
                    "kind",
                    3
                ]
            ]
        },
        {
            "id": "04cadb0e4c824773aa22cb42d9a87ae4",
            "maxzoom": 14.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#022440"
            },
            "source-layer": "Waterface",
            "minzoom": 12.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    ">=",
                    "display_class",
                    2
                ],
                [
                    "==",
                    "kind",
                    3
                ]
            ]
        },
        {
            "id": "0f3183087ca04d5da748c22b7dd10151",
            "maxzoom": 12.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#022440"
            },
            "source-layer": "Waterface",
            "minzoom": 10.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    ">=",
                    "display_class",
                    3
                ],
                [
                    "==",
                    "kind",
                    3
                ]
            ]
        },
        {
            "id": "b9f6b778a8294f58823d9d6f8733845c",
            "maxzoom": 10.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#022440"
            },
            "source-layer": "Waterface",
            "minzoom": 9.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    ">=",
                    "display_class",
                    5
                ],
                [
                    "==",
                    "kind",
                    3
                ]
            ]
        },
        {
            "id": "796462bfe80a4b11ac9c9be2d5d61ed0",
            "maxzoom": 10.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#022440"
            },
            "minzoom": 7.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    ">=",
                    "display_class",
                    7
                ],
                [
                    "==",
                    "kind",
                    3
                ]
            ]
        },
        {
            "id": "5ef9a598eedb4aea99044f74791d3890",
            "maxzoom": 7.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#022440"
            },
            "source-layer": "Waterface",
            "minzoom": 3.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "display_class",
                    8
                ]
            ]
        },
        {
            "id": "ed8c7937ad114305ab51ffafc56ac568",
            "maxzoom": 10.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#022440"
            },
            "minzoom": 7.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "display_class",
                    -2
                ]
            ]
        },
        {
            "id": "33ed503501c2460e8b25be5b37034d1d",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#022440"
            },
            "source-layer": "Waterface",
            "minzoom": 14.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "display_class",
                    1
                ]
            ]
        },
        {
            "id": "866b61fe7d8b4a8c9fbb5b428647fb0e",
            "maxzoom": 14.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#022440"
            },
            "source-layer": "Waterface",
            "minzoom": 11.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "display_class",
                    1
                ],
                [
                    ">=",
                    "area_level",
                    10
                ]
            ]
        },
        {
            "id": "2b0e62904cff48e4987d088007b94332",
            "maxzoom": 11.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#022440"
            },
            "minzoom": 10.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "display_class",
                    1
                ],
                [
                    ">=",
                    "area_level",
                    20
                ]
            ]
        },
        {
            "id": "a939939493ed4f98943859eae4aaf5c5",
            "maxzoom": 10.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#022440"
            },
            "minzoom": 9.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "display_class",
                    1
                ],
                [
                    ">=",
                    "area_level",
                    40
                ]
            ]
        },
        {
            "id": "1b88392b7a5448b49d1b47a27ae7812e",
            "maxzoom": 9.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#022440"
            },
            "minzoom": 8.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "display_class",
                    1
                ],
                [
                    ">=",
                    "area_level",
                    85
                ]
            ]
        },
        {
            "id": "84c925ac22204c0891920aeb0d795e5a",
            "maxzoom": 8.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#022440"
            },
            "source-layer": "Waterface",
            "minzoom": 6.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "display_class",
                    4
                ],
                [
                    ">=",
                    "area_level",
                    50
                ]
            ]
        },
        {
            "id": "46fb33bcb55547538cd9f992e42ac148",
            "maxzoom": 6.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#022440"
            },
            "source-layer": "Waterface",
            "minzoom": 5.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "display_class",
                    7
                ]
            ]
        },
        {
            "id": "b010de99209b4a3694727c9ae079691d",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#022440"
            },
            "minzoom": 7.0,
            "type": "fill",
            "filter": [
                "all",
                [
                    "==",
                    "display_class",
                    -1
                ]
            ]
        },
        {
            "id": "54c7701f61e64ceab95de07c097ed1f0",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-dasharray": [
                    6,
                    3,
                    3,
                    4
                ],
                "line-color": "#09263b",
                "line-opacity": 1.0,
                "line-width": 1.0
            },
            "minzoom": 3,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ]
            ]
        },
        {
            "id": "ab41fc8efb614630bd1cf86f53139f93",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-dasharray": [
                    5,
                    3
                ],
                "line-color": "#09263b",
                "line-opacity": 1.0,
                "line-width": 1.0
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    5
                ]
            ]
        },
        {
            "id": "d939d049aed9410d8141a8576a35b3cf",
            "maxzoom": 7.0,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-dasharray": [
                    3,
                    3,
                    5,
                    5
                ],
                "line-color": "#262121",
                "line-width": {
                    "stops": [
                        [
                            3,
                            1
                        ],
                        [
                            8,
                            3
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ]
            ]
        },
        {
            "id": "71748dc24f564815861e024bc96e2ce6",
            "maxzoom": 7.0,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            3,
                            0.5
                        ],
                        [
                            8,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": [
                "all",
                [
                    "in",
                    "kind",
                    3,
                    1
                ]
            ]
        },
        {
            "id": "1d1c41c6b12f4bdfb4213cad65514af7",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                
                "line-color": "#9b9b9b",
                "line-width": 2
            },
            "minzoom": 14.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "in",
                    "kind",
                    13,
                    10,
                    8,
                    9
                ],
                [
                    "in",
                    "const_st",
                    3,
                    4
                ]
            ]
        },
        {
            "id": "03775a9cd410427eac18bb56ca7c3b18",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 14,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#09091d",
                "text-halo-width": 1,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "in",
                    "functionclass",
                    5
                ],
                [
                    "in",
                    "const_st",
                    3,
                    4
                ],
                [
                    "in",
                    "kind",
                    2,
                    1,
                    3,
                    4
                ]
            ]
        },
        {
            "id": "35cd6acc6a664ed5bf84df7ac845e532",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                
                "line-color": "#9b9b9b",
                "line-width": 2
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "in",
                    "kind",
                    2,
                    1,
                    3,
                    4
                ],
                [
                    "in",
                    "const_st",
                    3,
                    4
                ]
            ]
        },
        {
            "id": "a8aa7d41434444f28d5512068a06b7b9",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 14.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "source-layer": "Road",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 1,
                "text-color": "#09091d",
                "icon-color": "#ff0000"
            },
            "minzoom": 11.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "in",
                    "functionclass",
                    1,
                    4,
                    2,
                    3
                ],
                [
                    "in",
                    "const_st",
                    3,
                    4
                ]
            ]
        },
        {
            "id": "568dc9764f914848bacaf15a12c16dde",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                
                "line-color": "#9b9b9b",
                "line-width": 2.0
            },
            "source-layer": "Road",
            "minzoom": 11.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "in",
                    "functionclass",
                    1,
                    4,
                    2,
                    3
                ],
                [
                    "in",
                    "const_st",
                    3,
                    4
                ]
            ]
        },
        {
            "id": "5cc0ff6188ad46eea69da977cd0e5fb8",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "07d28f7ab6e84331aa0f6ff699cc10e6",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "0dd2fdba998f4d2eb5a01174bf414e40",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 12,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "011e4778adb9435fa28ceda0bab664ee",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 9,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "d783b1fe232c4b6db93fe68fe6cf8ea8",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 9,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "b85e83b82c484019b1ca3318fdc893b0",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "f0e58b6f0d314e42a5212e1b78651c48",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "8126ff5f576b49109c5a241cb67e5333",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 10,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "9f242c5f6dc24660b890b445b89a9005",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 8,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "96304ea4f99f4fada20b3c7486a93075",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "69c371712a344cb4bf28642fc3e86b3e",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "349dfa716f1d49fdacb91a5d51461458",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 8,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "e66a4ae07e0f4e46ba4cf0c3096af22f",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "e983f969b6b04c6faff54f6de21e6aa6",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "ba30e53f37ba46f4a56e6ab596dc67f4",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]

            ]
        },
        {
            "id": "ef7209bd1b3046a2b4162cd955413ef9",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "d2d3840ac2c34b0ba17ff7fe814c4554",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "31a442351a88407388352e7ee905cd41",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            3
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "7b32bc2b26514bef908592f29b965ff8",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "7257bd590ca74b978588993642fbb001",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "e7ea48552e7e4b68ad27278bf38c3f52",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 12,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "812a98b2d3c54c7fbe99f03db2c277e6",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 9,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "86c4e81832b54abcb436fa3f028aceb3",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 9,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "a03e61446d2e4fc4a9ff78f816de8700",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "a8945779aae546f9a5e946d83415d8d1",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "b890926d76014ae9a5223b7319dd221b",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 8,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "b59a1f05e2274feea7897a093c01d826",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "629f80b7374b4503a5d03def956ea3c8",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "70765f986dc4497da00f2481ef208a29",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "c836e4cc6e314fbba8601efb56985792",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "fe8b3c6b2fc34710a7e932e98b94c595",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "4098f002fb464ce2b6bc9bc3df7ff05f",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "f190dd3af5b54640b3634718589a67cc",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "fc309adf980641afb69ffb2054e8a4d4",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "e3bcb7f6633241a685ac772dace5d8cd",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "95ebb737a883430a8b66ad217dac318c",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "square"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "73415403237b4a00ade435375ab11670",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                
                "line-color": "#6f8aa9",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    13
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "9fdb62426f4a495b9f20bd6044d52ae5",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                
                "line-color": "#6f8aa9",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 9,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    13
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "bf34f7731add4bdc969002dcb7426ab8",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                
                "line-color": "#6f8aa9",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 9,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    13
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "63824cd78cb9490ebef97c0509faf24f",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                
                "line-color": "#6f8aa9",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 9,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    13
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "23f90d1aa6f348fcae668ddacfc39ad8",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                
                "line-color": "#7090b5",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    13
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "b28ab61dd5b04497abf6dcd10d60ae34",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            0.8
                        ],
                        [
                            18,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 14.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    10
                ]
            ]
        },
        {
            "id": "dd07d96a7d40450c88c5b17f651ed8cc",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            18,
                            6
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 14.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    10
                ]
            ]
        },
        {
            "id": "eb7e007e7e404faea713705919f23bc2",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            8
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 14.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    9
                ]
            ]
        },
        {
            "id": "5d6e5ec4c612405ead58a2c28db24370",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            8
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 14.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    9
                ]
            ]
        },
        {
            "id": "fd4eb47f5a9c4ce49833b1c87a56308e",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 14.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "1a62692598be4fbda7380e9cc7964df8",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "7a9e0cbfc50c4ecbad518c1f44b1e274",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "6e9ab5f68e784005b86f8052063a3722",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 7.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "782e22a61899465f9867819fa5fb4f48",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 7.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "05b507d90988442ca13186d9c323e865",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 14.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "6d7470a667df455a820b81fd311f0ed6",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "d41a9bb39824451fb80f7c4bcd628b7d",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "622b22c51ad94390aad76b137e598d4c",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "3d2ffc4a4cbd45c7ba4363da2bb62efc",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 5.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "ebfeebc6c90c4bc18106a69282aef067",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "492974b189104dc88b922c34c1a40f44",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            12,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            12,
                            0.2
                        ],
                        [
                            18,
                            1.2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "54d8d01e57904acf8066e44305b8c7be",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 11.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "9f0d0ffcec6746a29d464af46242e0ae",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "d07882c8d7f2491ca321c4ec6f5f345d",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "72abde0213734561a690aa0746170e9f",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.5
                },
                
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "93b0725ce70a44b0bd84a696cafe6446",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "cecd8b054672451b8b0af8e03c216cd7",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 11,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "91c8a86755014a8e963a741f27779a1b",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "c8b4c3b912f8463fb384848d63d37718",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "7a54ad2f279b4244b7da9322dfa4cca7",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "5eda36c9671846abae940354d198ea00",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            3
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "7d33864f20d64c8cb6b63113fef1ff52",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "e35be00d035f43beb96cc0d0857df995",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "73401d57cc8b44a985934829e70cecd6",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            9,
                            1
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "d181060ab6e54a1cb39f8f928dcdfb7e",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "0e1af11a86f64accb9df167ffb363030",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "407cf077aa544459bafe355c786f3708",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 10.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "4f921c048b304c18a9ce796e790224ff",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "6348969e60ce49c0a4a3d99b9e8963b8",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "f972ff4fe43d42fd82e9cd20591813f1",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            18,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 12,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "ac83a1da2430470388e71a04fd795248",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "4cecc80a7cfc4000a2599f34c7309fae",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 11.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "a5b0205a8e434a64aeda5b3a1b88d73c",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "15f4cc3d85cb439abde82a7f27358786",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "8c35b137c86a4e8c90b6c09b6564d516",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "85bb2e435b624c699ff3ae2564c42cd2",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "c2df7d8dfa1a48f2ba042a09d77e7979",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "bd9e81bd980242b39a876e89631a19fe",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "abed30b81cd84d0fa1be3bf3db673382",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "2306c7d10df44dad9dd43a4a597778de",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "1c64507e26b94603b7f756895e79bb8e",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 12,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "ef3e624a5d8b4f60acb71e2c8fff0a63",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "5009035ea541436a8ec58bab57cbffa7",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 9,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "66f2845d366943db89446d04873a1c7a",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "c0fbf04150634b1f81851b24c58568ea",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "7f473707cba14bf8ac41d146a27f1c72",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "20b2c0c9c5ac4be5874f7d2c2679e27c",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "1da1c4f9e4a74d72ae367849de388cd0",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#6991a0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "c517382d37ef4d8d9de6eb27d6945f75",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "c6db375c52cd4f78bc4f667fd0b8499a",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "82d61d915df742ec9d5eae40254f5413",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "96d63cf0b0de4131acf8dff988a11448",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "5fa12ee5329c40438c8ace0b3a0817fc",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "a34726f3acc24578908a487a4f8db8c8",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#021f3c",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "4fe78bceb5a04dda8c6c9c4352a7f228",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "4aed5b5774634e7f8c7d21afead3b6b4",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 12,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "45359a4c5da1445a9190f526e2055180",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "60a35de7a11f4da49833a2dc0e437872",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 9,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "218cd36200ae47299a39e263cc372335",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "b5833e405ffc424b999b06c65d4f6a91",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "d8d1f912cbb34d17922405c878607850",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "5e0b1148b8604002961985cf77133984",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "cc4a06b1850b450fa8745d8e7b3268a4",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "2d7114fab4ea4ac2909bf33b60d947b1",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "e1a9affc748441ea868425c857c5461b",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "105c84b3277a44d6a06847b4c69968b1",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "ca25311d010842c18704b6d5d23ae9f7",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "99ccf970ba62422f8765d7441fb2b1a1",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "af34c50be0d1410ca7eb7b165ac4b09e",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "38ef965e1c544630802763cb545bfb1c",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            17,
                            1
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "8c55775474724b919f1eb8c8f32de638",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "de18831fe929416d99d040a252e58f27",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 12,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "d8b7149808624235959cf360650eb259",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "82c93011444440deaea5ba79999cc28c",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "2ba37c7bec9446fcb66b2d013a391629",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "3fd74f8716de483297970b025a3451a7",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 9,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "7be90d6e4dc0490985fa37b8137e568e",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "3579c31991a548b29f05dc07666edda2",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "3fcabfc23ab54c62836901fdd46272aa",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 7.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "ca46344028634d7f85d7211e9d9a81d2",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 7.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "a780bb3d63284e0995bed433ca7be033",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "40f40bda020e44f5ad0657b0e9c1935c",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "7c651965e2f942dd9e25514d6d8d3567",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "7f4be0754c4a410cbffaa75b070598d9",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "c9495555f2c04f0fa30d671018e4c7db",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.6
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "520148a21ac64873924e69be3dae501d",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.6
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "b2ddab28a6eb46f6b6ead362936f6507",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.6
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "22830d46d9604f338a8899d73e5073b6",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.6
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "4779055615cf48879d9fd4adcc33ba8b",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.6
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "b8746e5f630a4f21ab7bdc3a7f33e661",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.6
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "ef58ff3b5880402f86b94028c1f114b7",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.6
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "d3cd962c4efb4a1f9df29e28d0dc54e4",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.6
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "fa0b269c618f401ea9a2b5995a8cd2ff",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.6
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "62c01dfc1e8246ab8bce89ae813eac17",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.6
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "bef028000c8a4da88555982977f5aa7f",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "56de02b681ee45328f2ad30f09af5153",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 12,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "1736a3c4d4d347c5a5ea393b8a9e6c7a",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "f046e1fe924947e7a158089e3203a277",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 9,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "241fa6ca73ab4dcfbdfd87a8014ce4d1",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "aa314ee6dbe543dcb2de0fd4d0486480",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "a2ea583bcc204bbd8c06b5772434cf09",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "9b9ff265354d46c19e0f81af338fdc14",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "005b114f8f744f31934343246ce275a2",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "1c5fbdcceb7b477e853a3c750d2b0f84",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            2
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 7,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "9b38f75f2b3d44c498c99007db0ed4d3",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "a2e15bb3a38f47a695927f3a42522b43",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "4a965aa5b9c2410b8a5c5c6e37f11b0a",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "958dc4da8d0f437a8bb73a1981a94a07",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.7
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "3f0875bb96b3407eb193716bc8497886",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.7
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "2e36962c92504c6e951e206695d60863",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "92fd7e2512714680870a5faf344a34bf",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "839c40829b5e4fa699228c4a2c324ea3",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "3ac32a16db7d44ee99b24e753d0c54e0",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Road",
            "minzoom": 7.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "0bb05237742642909c43e9f076592983",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 7.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "aaad28066e5c4a28994a81919eb987ef",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 12.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "73154fdc688d4bafafdf019516e1a79c",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.8
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "11d753cb199f4c43afbb015533d218cc",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.8
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "4b70d99de6ab407781409516e0524740",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.8
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "ea93676006cd411a84829ef880f97b08",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.8
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Road",
            "minzoom": 5,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "179015cbcef84bbe8e9a9f842c993e0f",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 14,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ]
            ]
        },
        {
            "id": "0e6bdcf44e194f31a8cb318e36ded8ea",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            4
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 14.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ]
            ]
        },
        {
            "id": "839f408c5bc442c4a8ce31874e03c31f",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 14.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ]
            ]
        },
        {
            "id": "21a80142562f44f7b77e8f661bce177d",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 14.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ]
            ]
        },
        {
            "id": "66a960ecbeb448efafc0d8ee2613a981",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 13,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "86b3a8789f4e4f689c5fa4c9fa872ae6",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "e59068e4918142fbb69e634ea923e3a0",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1.2
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "d450fe505e4b43bfb0d9da815047dc77",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            0.5
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "e1ff466ad81843ee9908d021989534b3",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            0.5
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "41c02e1c6f9e4627ba3fe8392c92d79e",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "3e7fbc36ba7b46a9b66c27dec9ee9957",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "90cc7ae7b5714398ab5c9ba33c964d0b",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            18,
                            12
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "55ddae873b82458ea8f74d9459c1cfaf",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "24f761b3f8ea45429141c86f851c18af",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "b182776d2b1d449780e616b856cb0d55",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "76a273238fde4158986c1ea46a9996a9",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            14,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "993b75e03f514fe89efb2631b9118c93",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            14,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "82fef27953c946ad9412506df3c06c18",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "c33196a6b33b4f17bfab82b8e01afa69",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "8600ec8d13af44388cfe0385d90464b0",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "b2fac686f14342338e9e636da0abea9c",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "3f985978a70d4c9595b74ae02134e0f1",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "e0b458aa0a8940dda164e1e757517e83",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "a826dcb422c945c5adfc761a17d49c47",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "a994e2676fae46dd9da603952a4dd9e3",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            0.5
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "a189077d3ecc44b9815c30c80eaac163",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            0.5
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "f0cd52d32a354ebfb263311a332ddf26",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            0.5
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "de59844be49947cdb6213cb6d7ed0f2f",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            0.5
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "e7f708d7801641599e4541e113a4d26d",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            0.5
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "1e469eeb4b064f2b8db25468ab37a934",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "ebbd0a2b5bb74e11aa2f57373b153810",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "51a3213618154b668d108466dd31d046",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "805324a24eaf435fa97fc0dc740bb35f",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "948cfce670114f789c2f6be48d86d129",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            32
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "0175be44739146e7a6ed54fb13ddfce4",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "289c4f4c473842279879cdaee0e8baf2",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "bf9dcd66d0ec49bab6a90340720a8904",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "b51f05530a7842f0b1d9d5c32fe90b3d",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "31d8f037839a40b0bf8de49216f56285",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "2df71c84d2b640e0ab862f428f1e74e1",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ]
            ]
        },
        {
            "id": "9c4da0148c6b497fab07d5955c7cb537",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "3292571d1feb4d47be1bfc63455d6d12",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "56c01472ef6f45e7bdd8c6154067a0fe",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "7423c83432a5495294d58bf0a6e976b2",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "8110443b105542069bb441935125038e",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "ea0ea76889484882a1422e6bf2f32560",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ]
            ]
        },
        {
            "id": "24ee6e618a0540af8480a4503c52495d",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "53e3ea2edb2841dca567d00936cdf486",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "c181098b14284b15b537e3d14bb46803",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "7344332b37be425ab37e965130598761",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "221351bb309145469aa78c2828c2e3ee",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.1
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1.2
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "5ab1a3656bc04957ab2a5eda89a9eed1",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "butt"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                },
                "line-color": "#346778",
                "line-width": {
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            18,
                            1
                        ]
                    ],
                    "base": 1
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ]
            ]
        },
        {
            "id": "a234511f83464c0591df2862072f8d3a",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    5
                ]
            ]
        },
        {
            "id": "8afb8c2421d9491796be3bff4733277f",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    4
                ]
            ]
        },
        {
            "id": "6448ef04be114382a44024fd563cbef4",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "source-layer": "Zlevel",
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    3
                ]
            ]
        },
        {
            "id": "eeb81fdbe5a042a6833b458a1be529a0",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    2
                ]
            ]
        },
        {
            "id": "5becc429dbcf4dd5bd32052db6677170",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ],
                [
                    "==",
                    "functionclass",
                    1
                ]
            ]
        },
        {
            "id": "2d5a988186db4a4a9788bf243a760535",
            "maxzoom": 17.5,
            "source": "Zlevel",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Zlevel",
            "paint": {
                "line-color": "#040d17",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            18,
                            24
                        ]
                    ],
                    "base": 1.5
                }
            },
            "minzoom": 13.0,
            "type": "line",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    ">=",
                    "zvalue",
                    1
                ]
            ]
        },
        {
            "id": "448712e8119d4ac8ac605bceddc8d981",
            "maxzoom": 16.0,
            "source": "Buildingmore",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#0c3755",
                "fill-opacity": 1.0
            },
            "source-layer": "Buildingmore",
            "minzoom": 14.0,
            "type": "fill"
        },
        {
            "id": "c1af11fdf28944509f0ff27d77a43ca3",
            "maxzoom": 17.5,
            "source": "Buildingmore",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-color": "#274a73",
                "fill-extrusion-translate-anchor": "map",
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.3,
                "fill-extrusion-translate": [
                    0,
                    0
                ],
                "fill-extrusion-height": {
                    "property": "levels",
                    "type": "identity"
                }
            },
            "source-layer": "Buildingmore",
            "minzoom": 16.0,
            "type": "fill-extrusion"
        },
        {
            "id": "99584a40b32941668796a49589c84323",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "symbol-avoid-edges": true,
                "text-field": "{name_zh}",
                "text-font": [
                    "REGULAR"
                ],
                "symbol-placement": "line"
            },
            "source-layer": "Road",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 1,
                "text-color": "#888888",
                "icon-color": "#ff0000"
            },
            "minzoom": 10.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    13
                ]
            ]
        },
        {
            "id": "c19c6126ee1f412ab449c1424c50c43d",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 11.0,
                "symbol-avoid-edges": true,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-font": [
                    "REGULAR"
                ],
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#01070f",
                "text-halo-width": 1,
                "text-color": "#888888",
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 15.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    10
                ]
            ]
        },
        {
            "id": "2af52dd1a94d4416a87e1c6341825e3a",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 11.0,
                "symbol-avoid-edges": true,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-font": [
                    "REGULAR"
                ],
                "symbol-placement": "line"
            },
            "source-layer": "Road",
            "paint": {
                "text-halo-color": "#01070f",
                "text-color": "#888888",
                "text-halo-width": 1,
                "icon-color": "#ff0000"
            },
            "minzoom": 15.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    9
                ]
            ]
        },
        {
            "id": "b150b8a5510b4928be0e3a6f5df9e4d9",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 11.0,
                "symbol-avoid-edges": true,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-font": [
                    "REGULAR"
                ],
                "symbol-placement": "line"
            },
            "source-layer": "Road",
            "paint": {
                "text-halo-color": "#01070f",
                "text-halo-width": 1,
                "text-color": "#888888",
                "icon-color": "#ff0000"
            },
            "minzoom": 15.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    8
                ]
            ]
        },
        {
            "id": "1768919c1edd4013963c8b5321a3c27b",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "symbol-avoid-edges": true,
                "text-field": "{name_zh}",
                "text-font": [
                    "REGULAR"
                ],
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#01070f",
                "text-halo-width": 1,
                "text-color": "#888888",
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 14.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    7
                ]
            ]
        },
        {
            "id": "1b9f485798ce421f8ed1d28fb358208b",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 11.0,
                "symbol-avoid-edges": true,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-font": [
                    "REGULAR"
                ],
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#01070f",
                "text-halo-width": 1,
                "text-color": "#888888",
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 10.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    6
                ]
            ]
        },
        {
            "id": "2d268a751c99448c818ca295b40ca559",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            18,
                            14
                        ]
                    ],
                    "base": 1
                },
                "symbol-avoid-edges": true,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-font": [
                    "REGULAR"
                ],
                "symbol-placement": "line"
            },
            "source-layer": "Road",
            "paint": {
                "text-halo-color": "#01070f",
                "text-color": "#888888",
                "text-halo-width": 1,
                "icon-color": "#ff0000"
            },
            "minzoom": 11.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    4
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "26f7d9efe28c418f9367caadd1dc006f",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            18,
                            14
                        ]
                    ],
                    "base": 1
                },
                "symbol-avoid-edges": true,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-font": [
                    "REGULAR"
                ],
                "symbol-placement": "line"
            },
            "source-layer": "Road",
            "paint": {
                "text-halo-color": "#01070f",
                "text-color": "#888888",
                "text-halo-width": 1.0,
                "icon-color": "#ff0000"
            },
            "minzoom": 11.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    3
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "490427bbe40245ff9d4da7c6fcedc3c2",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            18,
                            14
                        ]
                    ],
                    "base": 1
                },
                "visibility": "visible",
                "symbol-avoid-edges": true,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-allow-overlap": false,
                "text-font": [
                    "BOLD"
                ],
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#01070f",
                "text-color": "#888888",
                "text-halo-width": 1.0,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 10.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    2
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "c486c48e12224f4fab62d954c2a529eb",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            18,
                            14
                        ]
                    ],
                    "base": 1
                },
                "visibility": "visible",
                "symbol-avoid-edges": true,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-font": [
                    "BOLD"
                ],
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#01070f",
                "text-halo-width": 1.0,
                "text-color": "#888888",
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 11.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    1
                ],
                [
                    "==",
                    "const_st",
                    1
                ]
            ]
        },
        {
            "id": "f272b51adf0b4f0191588335ce082edf",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 12.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    -1,
                    -1.3
                ]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 0.5,
                "text-color": "#949090",
                "icon-color": "#ff0000"
            },
            "minzoom": 4,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kindcode",
                    "275007"
                ],
                [
                    "==",
                    "name_zh",
                    "钓鱼岛"
                ]
            ]
        },
        {
            "id": "59af7d2935a34c5da20cae58c0e0eb02",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 12.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    1,
                    -1
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-color": "#949090",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "source-layer": "Annotation",
            "minzoom": 4,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kindcode",
                    "275007"
                ],
                [
                    "==",
                    "name_zh",
                    "东沙群岛"
                ]
            ]
        },
        {
            "id": "c8c526a95d884c548953cd91081e5e26",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 12.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    -1,
                    -1
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-color": "#949090",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "source-layer": "Annotation",
            "minzoom": 4,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kindcode",
                    "275007"
                ],
                [
                    "==",
                    "name_zh",
                    "西沙群岛"
                ]
            ]
        },
        {
            "id": "ed44fe48fc7846db8f801ca6601a36ee",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 12.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    -1,
                    -1
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-color": "#949090",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "source-layer": "Annotation",
            "minzoom": 4,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kindcode",
                    "275007"
                ],
                [
                    "==",
                    "name_zh",
                    "中沙群岛"
                ]
            ]
        },
        {
            "id": "ee2835dca90e44a294ddd3d4189cbb4b",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 12.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    0,
                    -3
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-color": "#949090",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "source-layer": "Annotation",
            "minzoom": 4,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kindcode",
                    "275007"
                ],
                [
                    "==",
                    "name_zh",
                    "南沙群岛"
                ]
            ]
        },
        {
            "id": "d52e8d76a4d24c7f9c5bad17836f0201",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 12.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-max-width": 4.0,
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    0,
                    2
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-color": "#949090",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "source-layer": "Annotation",
            "minzoom": 4,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kindcode",
                    "275007"
                ],
                [
                    "==",
                    "name_zh",
                    "黄岩岛（民主礁）"
                ]
            ]
        },
        {
            "id": "5329a37d0e514f4c9680bd109d7d8400",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 12.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    0,
                    -1
                ]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 0.5,
                "text-color": "#949090",
                "icon-color": "#ff0000"
            },
            "minzoom": 4,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kindcode",
                    "275007"
                ],
                [
                    "==",
                    "name_zh",
                    "曾母暗沙"
                ]
            ]
        },
        {
            "id": "f4e3dae3797c4e00b513ca4fd34ec2a6",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-pitch-alignment": "viewport",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    2,
                    0
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-color": "#949090",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "source-layer": "Annotation",
            "minzoom": 4,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kindcode",
                    "275007"
                ],
                [
                    "==",
                    "name_zh",
                    "赤尾屿"
                ]
            ]
        },
        {
            "id": "37602f1c1c344238af6d8f1cc15dac51",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 12.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    2,
                    0
                ]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 0.5,
                "text-color": "#949090",
                "icon-color": "#ff0000"
            },
            "minzoom": 7.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kindcode",
                    "275006"
                ],
                [
                    "==",
                    "name_zh",
                    "黄尾屿"
                ]
            ]
        },
        {
            "id": "a8ae62ba34774071b323f90d547e079e",
            "maxzoom": 6.0,
            "source": "Merge_1",
            "layout": {
                "text-size": 10.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    0,
                    0
                ]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 0.5,
                "text-color": "#949090",
                "icon-color": "#ff0000"
            },
            "minzoom": 5.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kindcode",
                    "275007"
                ],
                [
                    "==",
                    "name_zh",
                    "（台湾省详细资料暂缺）"
                ]
            ]
        },
        {
            "id": "fd02b30c8dc84adeb9efdae5d83ac969",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 20.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    0,
                    0
                ]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 0.5,
                "text-color": "#949090",
                "icon-color": "#ff0000"
            },
            "minzoom": 6.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kindcode",
                    "275007"
                ],
                [
                    "==",
                    "name_zh",
                    "（台湾省详细资料暂缺）"
                ]
            ]
        },
        {
            "id": "09c2bf88904a44cb87fb47c1645bc41f",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-pitch-alignment": "viewport",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-anchor": "right",
                "text-font": [
                    "REGULAR"
                ]
            },
            "source-layer": "Villtown",
            "paint": {
                "text-halo-color": "#000202",
                "text-color": "#a5a2a2",
                "text-halo-width": 1,
                "icon-color": "#ff0000"
            },
            "minzoom": 13.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "260100"
                ],
                [
                    "==",
                    "special",
                    0
                ],
                [
                    "!in",
                    "name_zh",
                    "北代岛",
                    "万代岛",
                    "青阳岛"
                ]
            ]
        },
        {
            "id": "9b2c81fc42b342e8afca4855917d48f8",
            "maxzoom": 17.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 11.0,
                "symbol-avoid-edges": false,
                "visibility": "visible",
                "text-pitch-alignment": "viewport",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-anchor": "right",
                "text-font": [
                    "REGULAR"
                ],
                "symbol-placement": "point"
            },
            "source-layer": "Villtown",
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 1,
                "text-color": "#808080",
                "icon-color": "#ff0000"
            },
            "minzoom": 10.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "260000"
                ],
                [
                    "in",
                    "name_tag",
                    2,
                    0,
                    1
                ],
                [
                    "==",
                    "special",
                    0
                ]
            ]
        },
        {
            "id": "21fc3162fd974a0e922d89dfeec5ca29",
            "maxzoom": 10.0,
            "source": "Merge_1",
            "layout": {
                "text-size": 12.0,
                "text-pitch-alignment": "viewport",
                "symbol-avoid-edges": true,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    0,
                    1
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 1.0,
                "text-color": "#808080",
                "icon-color": "#ff0000",
                "text-translate-anchor": "map"
            },
            "source-layer": "Adminflag",
            "minzoom": 7.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    4
                ],
                [
                    "!in",
                    "name_zh",
                    "台湾",
                    "元宝区",
                    "东港市",
                    "集安市",
                    "临江市",
                    "长白朝鲜族自治县",
                    "图们市",
                    "饶河县",
                    "振兴区",
                    "振安区",
                    "呼玛县"
                ]
            ]
        },
        {
            "id": "90eac16f6067416ea2e79022b634b6e8",
            "maxzoom": 10,
            "source": "Merge_1",
            "layout": {
                "text-size": 12,
                "icon-image": "circle-brown-11",
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "symbol-avoid-edges": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "viewport",
                "text-allow-overlap": false,
                "text-anchor": "bottom",
                "text-font": [
                    "REGULAR"
                ],
                "icon-size": 0.8,
                "text-offset": [
                    0,
                    -0.3
                ]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#808080",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "minzoom": 9.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "capital",
                    3
                ],
                [
                    "==",
                    "name_zh",
                    "黑河"
                ]
            ]
        },
        {
            "id": "283908942fa3467195f34f9626f897bc",
            "maxzoom": 10,
            "source": "Merge_1",
            "layout": {
                "icon-text-fit": "none",
                "icon-image": "circle-brown-11",
                "text-pitch-alignment": "viewport",
                "symbol-avoid-edges": false,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-allow-overlap": false,
                "icon-size": 0.8,
                "icon-offset": [
                    -6,
                    0
                ],
                "text-offset": [
                    -0.8,
                    0
                ],
                "text-size": 12,
                "text-justify": "center",
                "text-ignore-placement": false,
                "text-rotation-alignment": "viewport",
                "text-anchor": "right",
                "text-font": [
                    "REGULAR"
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 0.5,
                "text-color": "#808080",
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 5.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "capital",
                    3
                ],
                [
                    "==",
                    "name_zh",
                    "丹东"
                ]
            ]
        },
        {
            "id": "bb55d906427f4759ad3b3678023f06ea",
            "maxzoom": 10.0,
            "source": "Merge_1",
            "layout": {
                "text-size": 12.0,
                "icon-image": "circle-brown-11",
                "text-pitch-alignment": "viewport",
                "symbol-avoid-edges": false,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false,
                "text-allow-overlap": false,
                "text-anchor": "bottom",
                "text-font": [
                    "REGULAR"
                ],
                "icon-size": 0.8,
                "text-offset": [
                    0,
                    -0.3
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 0.5,
                "text-color": "#808080",
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 5.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "capital",
                    3
                ],
                [
                    "!in",
                    "name_tag",
                    1,
                    3,
                    2
                ],
                [
                    "!in",
                    "name_zh",
                    "黑河",
                    "丹东"
                ]
            ]
        },
        {
            "id": "81d6e5d4114141a9acf2b58f400a1883",
            "maxzoom": 10,
            "source": "Merge_1",
            "layout": {
                "text-size": 12,
                "text-pitch-alignment": "viewport",
                "symbol-avoid-edges": false,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-max-width": 6.0,
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false,
                "text-allow-overlap": false,
                "text-anchor": "bottom",
                "text-font": [
                    "REGULAR"
                ],
                "icon-size": 0.8,
                "text-offset": [
                    0,
                    -0.3
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 0.5,
                "text-color": "#808080",
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 5,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "capital",
                    3
                ],
                [
                    "in",
                    "name_tag",
                    1,
                    3,
                    2
                ],
                [
                    "in",
                    "name_zh",
                    "延边朝鲜族自治州",
                    "德宏傣族景颇族自治州",
                    "西双版纳傣族自治州",
                    "伊犁哈萨克自治州"
                ]
            ]
        },
        {
            "id": "a12fe1081d934f488d0f4f0be2c0b1fb",
            "maxzoom": 10,
            "source": "Merge_1",
            "layout": {
                "text-size": 12,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "symbol-avoid-edges": false,
                "text-max-width": 6,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "viewport",
                "text-allow-overlap": false,
                "text-anchor": "bottom",
                "text-font": [
                    "REGULAR"
                ],
                "icon-size": 0.8,
                "text-offset": [
                    1.3,
                    1
                ]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#000202",
                "text-color": "#808080",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "minzoom": 5,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "capital",
                    3
                ],
                [
                    "in",
                    "name_tag",
                    1,
                    3,
                    2
                ],
                [
                    "==",
                    "name_zh",
                    "怒江傈僳族自治州"
                ]
            ]
        },
        {
            "id": "02831051cb3847aab64a6f5b47629737",
            "maxzoom": 10,
            "source": "Merge_1",
            "layout": {
                "text-size": 12,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "symbol-avoid-edges": false,
                "text-field": "{name_zh}",
                "text-max-width": 6,
                "text-ignore-placement": false,
                "text-rotation-alignment": "viewport",
                "text-allow-overlap": false,
                "text-anchor": "bottom",
                "text-font": [
                    "REGULAR"
                ],
                "icon-size": 0.8,
                "text-offset": [
                    2,
                    0
                ]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#000202",
                "text-color": "#808080",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "minzoom": 5,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "capital",
                    3
                ],
                [
                    "in",
                    "name_tag",
                    1,
                    3,
                    2
                ],
                [
                    "in",
                    "name_zh",
                    "塔城地区"
                ]
            ]
        },
        {
            "id": "71a4ff880b2a4d4f8f6579823491c17f",
            "maxzoom": 10.0,
            "source": "Merge_1",
            "layout": {
                "text-size": 12.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "symbol-avoid-edges": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "viewport",
                "text-anchor": "bottom",
                "text-allow-overlap": false,
                "text-font": [
                    "REGULAR"
                ],
                "icon-size": 0.8,
                "text-offset": [
                    0,
                    -0.3
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 0.5,
                "text-color": "#808080",
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 5.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "capital",
                    3
                ],
                [
                    "in",
                    "name_tag",
                    1,
                    3,
                    2
                ],
                [
                    "!in",
                    "name_zh",
                    "延边朝鲜族自治州",
                    "塔城地区",
                    "德宏傣族景颇族自治州",
                    "西双版纳傣族自治州",
                    "怒江傈僳族自治州",
                    "伊犁哈萨克自治州"
                ]
            ]
        },
        {
            "id": "afc988de0e1b4438a97c3e703939b32b",
            "maxzoom": 10.0,
            "source": "Merge_1",
            "layout": {
                "text-size": 12,
                "icon-image": "circle-red-11",
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "symbol-avoid-edges": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "viewport",
                "text-allow-overlap": false,
                "text-anchor": "right",
                "text-font": [
                    "REGULAR"
                ],
                "icon-size": 0.8,
                "text-offset": [
                    -0.4,
                    0
                ]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#000202",
                "text-color": "#8f8f8f",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "minzoom": 4,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "name_zh",
                    "澳門"
                ]
            ]
        },
        {
            "id": "306734dace49421f87379c63b8491f04",
            "maxzoom": 10.0,
            "source": "Merge_1",
            "layout": {
                "icon-image": "circle-red-11",
                "text-pitch-alignment": "viewport",
                "symbol-avoid-edges": false,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-allow-overlap": false,
                "icon-size": 0.8,
                "text-offset": [
                    0.4,
                    0
                ],
                "text-size": 14.0,
                "text-justify": "left",
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false,
                "text-anchor": "left",
                "text-font": [
                    "REGULAR"
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 0.5,
                "text-color": "#8f8f8f",
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 4.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "name_zh",
                    "香港"
                ]
            ]
        },
        {
            "id": "39645c6113b0423394d987545ba7ab95",
            "maxzoom": 10.0,
            "source": "Merge_1",
            "layout": {
                "text-size": 14.0,
                "icon-image": "circle-red-11",
                "text-pitch-alignment": "viewport",
                "symbol-avoid-edges": false,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false,
                "text-allow-overlap": false,
                "text-anchor": "bottom",
                "text-font": [
                    "REGULAR"
                ],
                "icon-size": 0.8,
                "text-offset": [
                    0,
                    -0.3
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 0.5,
                "text-color": "#8f8f8f",
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 4.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "in",
                    "capital",
                    1,
                    2
                ],
                [
                    "!in",
                    "name_zh",
                    "香港",
                    "澳門",
                    "天津"
                ]
            ]
        },
        {
            "id": "1ea68acfcc084795b6f122342c4f16a6",
            "maxzoom": 10.0,
            "source": "Merge_1",
            "layout": {
                "text-size": 14.0,
                "icon-image": "circle-red-11",
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "symbol-avoid-edges": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "viewport",
                "text-allow-overlap": false,
                "text-anchor": "left",
                "text-font": [
                    "REGULAR"
                ],
                "icon-size": 0.8,
                "text-offset": [
                    -2.5,
                    0
                ]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#000202",
                "text-color": "#8f8f8f",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "minzoom": 4.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "in",
                    "capital",
                    1,
                    2
                ],
                [
                    "==",
                    "name_zh",
                    "天津"
                ]
            ]
        },
        {
            "id": "25d8342c55274710a06c7ac464c9f0b7",
            "maxzoom": 4.0,
            "source": "Merge_1",
            "layout": {
                "text-size": 16.0,
                "icon-image": "star-11",
                "text-pitch-alignment": "viewport",
                "symbol-avoid-edges": false,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-anchor": "bottom",
                "text-font": [
                    "REGULAR"
                ],
                "icon-size": 1.2,
                "text-offset": [
                    0,
                    -0.3
                ]
            },
            "source-layer": "Adminflag",
            "paint": {
                "icon-halo-color": "#d0021b",
                "text-halo-color": "#000202",
                "text-halo-width": 1.0,
                "text-color": "#808080",
                "icon-halo-width": 10.0,
                "icon-color": "#ff0000"
            },
            "minzoom": 3,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "in",
                    "capital",
                    1
                ]
            ]
        },
        {
            "id": "a4cadd9231b044a9a411b66ddbd4e45d",
            "maxzoom": 4.0,
            "source": "Merge_1",
            "layout": {
                "text-size": 20.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ]
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#161d27",
                "text-halo-width": 2.0,
                "text-color": "#898686",
                "icon-color": "#ff0000"
            },
            "minzoom": 3,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "name_zh",
                    "中华人民共和国"
                ]
            ]
        },
        {
            "id": "f3eac2ad6f514eb999089c4e46b164bc",
            "maxzoom": 8.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 14.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "symbol-avoid-edges": false,
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-color": "#a09c9c",
                "text-halo-width": 1.0,
                "icon-color": "#ff0000"
            },
            "source-layer": "Worldannotation",
            "minzoom": 4.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "275008"
                ],
                [
                    "!=",
                    "name_zh",
                    "台湾海峡"
                ]
            ]
        },
        {
            "id": "3d6e2f078c824db689925ae94e5753b6",
            "maxzoom": 8.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 14.0,
                "text-pitch-alignment": "viewport",
                "symbol-avoid-edges": false,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    -1,
                    0
                ]
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 1.0,
                "text-color": "#a09c9c",
                "icon-color": "#ff0000"
            },
            "minzoom": 5.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "275008"
                ],
                [
                    "==",
                    "name_zh",
                    "台湾海峡"
                ]
            ]
        },
        {
            "id": "40cea26b72f245ff9ccc1180c2824fc0",
            "maxzoom": 8.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 24.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "symbol-avoid-edges": false,
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ]
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 1.0,
                "text-color": "#808080",
                "icon-color": "#ff0000"
            },
            "minzoom": 3,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "405002"
                ]
            ]
        },
        {
            "id": "092b6ab59c5b410a9045c6baacedff37",
            "maxzoom": 8.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 20.0,
                "text-pitch-alignment": "viewport",
                "visibility": "visible",
                "symbol-avoid-edges": false,
                "text-field": "{name_zh}",
                "text-rotation-alignment": "viewport",
                "text-font": [
                    "REGULAR"
                ]
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 1.0,
                "text-color": "#808080",
                "icon-color": "#ff0000"
            },
            "minzoom": 3.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "405003"
                ]
            ]
        },
        {
            "id": "6577f1dcb3ee4deebe9a253d9c4f87ef",
            "maxzoom": 11.5,
            "source": "Merge_1",
            "layout": {
                "text-size": 12,
                // "icon-image": "n-point-name-15-{zh_cnt}",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-font": [
                    "REGULAR"
                ],
                "text-offset": [
                    0,
                    0.15
                ]
            },
            "paint": {
                "text-halo-color": "#000202",
                "text-halo-width": 10.0,
                "text-color": "#808080",
                "icon-opacity": 0.85,
                "icon-color": "#030000",
                "text-translate-anchor": "map"
            },
            "source-layer": "Adminflag",
            "minzoom": 10.0,
            "type": "symbol",
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    4
                ],
                [
                    "!in",
                    "name_zh",
                    "香洲区（由澳门特别行政区实施管辖）",
                    "台湾",
                    "长白朝鲜族自治县",
                    "集安市",
                    "临江市",
                    "振兴区",
                    "元宝区",
                    "振安区",
                    "爱辉区",
                    "抚远市"
                ]
           ]
        },
        {
            "id": "construction_Layer",
            "type": "symbol",
            "interactive": true,
            "source" : "construction",
            "source-layer": "construction",
            "minzoom": 0,
            "maxzoom": 17.1,
            "layout":
                {
                    "icon-image": "icon_reddot",
                    "icon-size": 1,
                },
            "paint":
                {
                    "icon-color": "#ff2d2d",
                },

        }
    ]
};
var trafficLimitedLayer ={
    "version" : 8,
    "name" : "Bright",
    "sources" :
        {
            "platelimit" :
            {
                "type":"vector",
                "tiles":
                    ['http://fastmap.navinfo.com/smap_p/plateres/web/condition/{z}/{x}/{y}?'+ App.Config.platelimit],
            },
            "Worldannotation": {
                "tiles": ["http://minedata.cn/data/Worldannotation/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Building": {
                "tiles": ["http://minedata.cn/data/Building/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Landuse": {
                "tiles": ["http://minedata.cn/data/Landuse/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Worldislands": {
                "tiles": ["http://minedata.cn/data/Worldislands/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Ptline": {
                "tiles": ["http://minedata.cn/data/Ptline/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Villtown": {
                "tiles": ["http://minedata.cn/data/Villtown/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Greenface": {
                "tiles": ["http://minedata.cn/data/Greenface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Worldwaterface": {
                "tiles": ["http://minedata.cn/data/Worldwaterface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Waterline": {
                "tiles": ["http://minedata.cn/data/Waterline/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Subwaypolygon": {
                "tiles": ["http://minedata.cn/data/Subwaypolygon/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Ptexit": {
                "tiles": ["http://minedata.cn/data/Ptexit/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Poi": {
                "tiles": ["http://minedata.cn/data/Poi/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Waterface": {
                "tiles": ["http://minedata.cn/data/Waterface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Adminbound": {
                "tiles": ["http://minedata.cn/data/Adminbound/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Ptstop": {
                "tiles": ["http://minedata.cn/data/Ptstop/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Railway": {
                "tiles": ["http://minedata.cn/data/Railway/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Adminflag": {
                "tiles": ["http://minedata.cn/data/Adminflag/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Annotation": {
                "tiles": ["http://minedata.cn/data/Annotation/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Worldwaterline": {
                "tiles": ["http://minedata.cn/data/Worldwaterline/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Buildingmore": {
                "tiles": ["http://minedata.cn/data/Buildingmore/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Road": {
                "tiles": ["http://minedata.cn/data/Road/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Worldcountries": {
                "tiles": ["http://minedata.cn/data/Worldcountries/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            }
        },
    "glyphs": "../data/map/{fontstack}/{range}.pbf",
    "sprite" : App.Config.appRoot + "/data/map/sprite/sprite",
    "layers" : [
        {
            "id": "576a22cac9a04cefb8d4bb20c67024d8",
            "maxzoom": 22,
            "source": "",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "background-color": "#fcf9f2"
            },
            "source-layer": "",
            "minzoom": 0,
            "type": "background"
        }, {
            "id": "29ee5cec41f14f38b792c66a15881969",
            "maxzoom": 8.5,
            "source": "Worldwaterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#a6cce6"
            },
            "source-layer": "Worldwaterface",
            "minzoom": 3,
            "type": "fill"
        }, {
            "id": "0f219c7dcbb043a8b4ec5c1ebf74dabc",
            "maxzoom": 8.5,
            "source": "Worldcountries",
            "layout": {
                "visibility": "none"
            },
            "source-layer": "Worldcountries",
            "paint": {
                "fill-color": "#fcf9f2"
            },
            "minzoom": 3,
            "type": "fill"
        }, {
            "id": "be4c6cd1bc2c46aeb3bc6080de2751bf",
            "maxzoom": 8.5,
            "source": "Worldwaterline",
            "layout": {
                "line-join": "round",
                "visibility": "none",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#a6cce6",
                "line-width": 1.0
            },
            "source-layer": "Worldwaterline",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["!=", "kind", "121 "]]
        }, {
            "id": "d7d8d9bed26b483682f96e57d2a024e8",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 30.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.5,
                "text-color": "#704f17",
                "icon-color": "#ff0000"
            },
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "405002"]]
        }, {
            "id": "353eee4cdde34bcaa4ad62849051f28f",
            "maxzoom": 8.5,
            "source": "Worldislands",
            "layout": {
                "visibility": "none"
            },
            "source-layer": "Worldislands",
            "paint": {
                "fill-color": "#ffffff"
            },
            "minzoom": 3,
            "type": "fill"
        }, {
            "id": "655d364695bf4bf8bc10dcb988cbf59b",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 16,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.1,
                "text-color": "#2840b5",
                "icon-color": "#ff0000"
            },
            "minzoom": 4.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "275008"], ["!=", "name_zh", "台湾海峡"]]
        }, {
            "id": "aa92569543e74467aa293d390812c813",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 22.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.1,
                "text-color": "#2840b5",
                "icon-color": "#ff0000"
            },
            "minzoom": 3.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "405003"]]
        }, {
            "id": "a8e35d92311a434496b17447e9f26539",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 16.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-offset": [-1, 0]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#2840b5",
                "text-halo-width": 0.1,
                "icon-color": "#ff0000"
            },
            "source-layer": "Worldannotation",
            "minzoom": 5.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "275008"], ["==", "name_zh", "台湾海峡"]]
        }, {
            "id": "479111309f584b5894775d2b0883a00f",
            "maxzoom": 17.5,
            "source": "Waterline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#a6cce6",
                "line-width": 1.0
            },
            "source-layer": "Waterline",
            "minzoom": 3,
            "type": "line"
        }, {
            "id": "da01a6a0677f4a3aa55fb373f1bae4ce",
            "maxzoom": 8.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#a6cce6"
            },
            "minzoom": 4.0,
            "type": "fill",
            "filter": ["all", ["in", "kind", 3]]
        }, {
            "id": "8282071ddd934b798346093e8c2e95fb",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "none"
            },
            "paint": {
                "fill-color": "#a6cce6"
            },
            "source-layer": "Waterface",
            "minzoom": 3.0,
            "type": "fill",
            "filter": ["all", ["in", "kind", 1]]
        }, {
            "id": "7f0e554edf224faeb7c0dd0e84a0db51",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#e1d9b1",
                "line-width": {
                    "stops": [[3, 4], [8, 10]],
                    "base": 1
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["!in", "form", 8, 2], ["==", "kind", 6]]
        }, {
            "id": "88ee114c7e7a46bfa500e2f2acc33638",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#8d8465",
                "line-width": {
                    "stops": [[3, 0.5], [8, 2]],
                    "base": 1
                }
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["!in", "form", 8, 2], ["==", "kind", 6]]
        }, {
            "id": "fc2c046e556947baab39c4b3fc3e13d1",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#fbf8ee",
                "line-width": {
                    "stops": [[3, 0.2], [17, 0.2]],
                    "base": 1.2
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 2]]
        }, {
            "id": "52c5d8dca1ea4088a8d054d95b006414",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#e1d9b1",
                "line-width": {
                    "stops": [[3, 4], [8, 10]],
                    "base": 1
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 8], ["==", "kind", 6]]
        }, {
            "id": "a2317c152afb4fd98f5dece3782acd66",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-dasharray": [5, 5],
                "line-color": "#8d8465",
                "line-width": {
                    "stops": [[3, 0.5], [8, 2]],
                    "base": 1
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 8], ["==", "kind", 6]]
        }, {
            "id": "83092ebed4f34c6d9f53ca3c0eb13096",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#b7b4af",
                "line-width": 0.5
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "ee93f67ae37844f5aebe4365ad53be23",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-dasharray": [1, 2],
                "line-color": "#b7b4af",
                "line-width": {
                    "stops": [[5, 0.1], [6, 0.2], [7, 1.5], [20, 18]],
                    "base": 1.2
                }
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 7]]
        }, {
            "id": "4ab6107b023c4d4d97e4d7c74763bdde",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Annotation",
            "paint": {
                "text-color": "#222222",
                "icon-color": "#ff0000"
            },
            "minzoom": 5.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "275007"]]
        }, {
            "id": "3e4ce35e1b8849c6a7a015c93fa2bab6",
            "maxzoom": 17.5,
            "source": "Villtown",
            "layout": {
                "visibility": "none",
                "text-field": "{name_zh}"
            },
            "source-layer": "Villtown",
            "paint": {
                "icon-color": "#ff0000"
            },
            "minzoom": 9,
            "type": "symbol"
        }, {
            "id": "dcb6a12b868844b9b2fe9a57f9c83881",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 9.0,
                "visibility": "none",
                "text-field": "{name_brief}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": "#00000f",
                "icon-halo-width": 1,
                "icon-color": "#edfff7"
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 2], ["in", "functionclass", 1, 2]]
        }, {
            "id": "d98ea081dcb746d8af67fb112a4d701e",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#a6cce6"
            },
            "minzoom": 9.0,
            "type": "fill",
            "filter": ["all", ["in", "kind", 3, 4, 2], ["==", "display_class", 5]]
        }, {
            "id": "74211ea893124c7c815289c77adc2f17",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#ffe3e3"
            },
            "minzoom": 13.0,
            "type": "fill",
            "filter": ["all", ["==", "kind", 3]]
        }, {
            "id": "cf697ff69f3e4b72bdf18a4621326055",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#e6e8cf"
            },
            "minzoom": 13,
            "type": "fill",
            "filter": ["all", ["==", "kind", 5]]
        }, {
            "id": "9f6fc656a79b47d6b389b03525a79ba9",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ecf0f5"
            },
            "source-layer": "Landuse",
            "minzoom": 13.0,
            "type": "fill",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "5decd378b0ab45709fd4f99ce1c2d2d3",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#decbbe"
            },
            "minzoom": 13,
            "type": "fill",
            "filter": ["all", ["in", "kind", 37]]
        }, {
            "id": "ab1bb900ebc14c8c94bd415a20b6a969",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#9ed951"
            },
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 30]]
        }, {
            "id": "613c0982453948c0a2ebf9464d2a666f",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#e2efe6"
            },
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 31]]
        }, {
            "id": "92cc3dc9d7ab4ffeabf64633c1f4aaa8",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#e2efe6"
            },
            "source-layer": "Landuse",
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["in", "kind", 36, 2]]
        }, {
            "id": "9ce55afb2a084ed7af5a07358f39f95a",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#edf6f6"
            },
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 4]]
        }, {
            "id": "e0f00dfd26ef4b97a3d07a1469593738",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#a6cce6"
            },
            "minzoom": 11.0,
            "type": "fill",
            "filter": ["all", ["in", "display_class", 3, 4, 1, 2]]
        }, {
            "id": "cf9027786fc94d4aa7358c297584a141",
            "maxzoom": 17.5,
            "source": "Railway",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#a8a6a4",
                "line-width": {
                    "stops": [[6, 1.5], [20, 10]],
                    "base": 1.2
                }
            },
            "source-layer": "Railway",
            "minzoom": 6,
            "type": "line",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "07f6b29226cd432fa2725ec21cdfbc4e",
            "maxzoom": 17.5,
            "source": "Railway",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Railway",
            "paint": {
                "line-dasharray": [8, 8],
                "line-color": "#ffffff",
                "line-width": {
                    "stops": [[6, 0.5], [20, 8]],
                    "base": 1.2
                }
            },
            "minzoom": 6,
            "type": "line",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "4a98a98fbba4422eb63dc6768c9ed554",
            "maxzoom": 17.5,
            "source": "Greenface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#cfe7b4"
            },
            "source-layer": "Greenface",
            "minzoom": 8.0,
            "type": "fill"
        }, {
            "id": "60d750cfc5d9480ebae429f64af2bb33",
            "maxzoom": 17.5,
            "source": "Subwaypolygon",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Subwaypolygon",
            "paint": {
                "fill-color": {
                    "property": "color",
                    "type": "identity"
                },
                "fill-opacity": 0.6
            },
            "minzoom": 16.0,
            "type": "fill"
        }, {
            "id": "361e9ea3ee664e9b9daf5d56c7603bd1",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [[15, 2], [20, 5]],
                    "base": 1.2
                },
                "line-color": "#f9d195",
                "line-width": 0.6
            },
            "source-layer": "Road",
            "minzoom": 15.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 5]]
        }, {
            "id": "3c90599699254bdfb8797dba00beed24",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#ffffff",
                "line-width": {
                    "stops": [[15, 2], [20, 5]],
                    "base": 1.2
                }
            },
            "minzoom": 15,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 5]]
        }, {
            "id": "eebcc3f0f90d4bcba8ebc2c9efd34d38",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#f9ecc1",
                "line-width": {
                    "stops": [[5, 0.7], [6, 1], [20, 10]],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 11.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 4]]
        }, {
            "id": "4dd8a2998f3e4597b066aa02d0893fea",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [[9, 1], [20, 6]],
                    "base": 1
                },
                "line-color": "#f9ca87",
                "line-width": 0.8
            },
            "minzoom": 10.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 3]]
        }, {
            "id": "19dc8ace37e64c0b957af9b058b6a9c0",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#f9ecc1",
                "line-width": {
                    "stops": [[9, 1.2], [20, 6]],
                    "base": 1
                }
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 3]]
        }, {
            "id": "dbe9cde2c2a44bf9832af6fc314b9836",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [[7, 1.2], [9, 1.2], [20, 6]],
                    "base": 1
                },
                "line-color": "#ff7600",
                "line-width": 0.8
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 2]]
        }, {
            "id": "3ae236b2cf7645ef86afcd0022223d7a",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#ffd467",
                "line-width": {
                    "stops": [[7, 1.5], [9, 1.6], [20, 8]],
                    "base": 1
                }
            },
            "minzoom": 7.0,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 2]]
        }, {
            "id": "ed3a8eb5fdf746c1b76ecdcaaf01cad0",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [[5, 0.7], [6, 0.8], [7, 1.4], [9, 1.4], [20, 8]],
                    "base": 1
                },
                "line-color": "#ff6d00",
                "line-width": 0.8
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 1]]
        }, {
            "id": "e8f8468a96c3419290e8a1a5bfb90632",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": {
                    "stops": [[5, "#ffb35b"], [8, "#ffb35b"], [20, "#ffb35b"]],
                    "base": 1
                },
                "line-width": {
                    "stops": [[5, 0.7], [6, 0.8], [7, 1.6], [9, 1.6], [20, 10]],
                    "base": 1
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 1]]
        }, {
            "id": "05415035370046d59b23d0bf4936153a",
            "maxzoom": 17.0,
            "source": "Buildingmore",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Buildingmore",
            "paint": {
                "fill-color": "#dcdecd",
                "fill-opacity": 0.6
            },
            "minzoom": 16,
            "type": "fill"
        }, {
            "id": "c5d7e16d300b4d61ba411d494f198865",
            "maxzoom": 17.5,
            "source": "Buildingmore",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Buildingmore",
            "paint": {
                "fill-extrusion-color": "#dcdecd",
                "fill-extrusion-translate-anchor": "map",
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.6,
                "fill-extrusion-height": {
                    "property": "levels",
                    "type": "identity"
                },
                "fill-extrusion-translate": [0, 0]
            },
            "minzoom": 17,
            "type": "fill-extrusion"
        }, {
            "id": "0706626751d4471e95466fdbb0241cb7",
            "maxzoom": 17.5,
            "source": "Ptline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Ptline",
            "paint": {
                "line-color": "#ffffff",
                "line-width": 3.6
            },
            "minzoom": 10,
            "type": "line",
            "filter": ["all", ["==", "line_type", 2], ["==", "status", 0]]
        }, {
            "id": "a63d823be09c4dbba41114555a30935f",
            "maxzoom": 17.5,
            "source": "Ptline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": {
                    "property": "color",
                    "type": "identity"
                },
                "line-opacity": 0.6,
                "line-width": {
                    "stops": [[10, 1.8], [20, 4]],
                    "base": 1.2
                }
            },
            "source-layer": "Ptline",
            "minzoom": 10,
            "type": "line",
            "filter": ["all", ["==", "line_type", 2], ["==", "status", 0]]
        },{
            "id": "c647f7f79e9947ed833c8ec8544c30be",
            "maxzoom": 17.5,
            "source": "Building",
            "layout": {
                "visibility": "none"
            },
            "paint": {
                "fill-extrusion-color": "#FFEFD5",
                "fill-extrusion-translate-anchor": "map",
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 1,
                "fill-extrusion-height": {
                    "property": "levels",
                    "type": "identity"
                },
                "fill-extrusion-translate": [0, 0]
            },
            "source-layer": "Building",
            "minzoom": 12,
            "type": "fill-extrusion"
        },{
            "id": "f514e7f040154cbd87535f4477f401b6",
            "maxzoom": 17.5,
            "source": "Railway",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "source-layer": "Railway",
            "paint": {
                "text-color": "#464646",
                "icon-color": "#ff0000"
            },
            "minzoom": 6,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 1]]
        },{
            "id": "6c92bf7f953047c7bdac1a7b83befab4",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 14.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "120201"], [">=", "rank", 1]]
        }, {
            "id": "10629e6309bc4618b884e1e0dfbece3d",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 11.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "160205"], [">=", "rank", 3]]
        }, {
            "id": "9ad5db7fc802469b881706f6d16e8e6d",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 11.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "180308"]]
        }, {
            "id": "3c5f8a6c51cf4678975287dbe8b6d549",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#17f9e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 14.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "125140"], [">=", "rank", 7]]
        }, {
            "id": "aa02d7a9a9db4a5faadf707f1034133f",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 12.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "200103"], [">=", "rank", 3]]
        }, {
            "id": "b44ebe2f72864400b586ec70752feacb",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "minzoom": 13.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "200103"], [">=", "rank", 3]]
        },{
            "id": "3c7f6d34241244f19191df4925b8fce4",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-ignore-placement": false,
                "text-offset": [0, 1]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 16.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "230208"]]
        }, {
            "id": "1fe6764e90eb4fb5889ccd2b2ed2de3d",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "text-justify": "center",
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [0, 0]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 11,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "275017"], [">=", "rank", 8]]
        },  {
            "id": "61fe65af63a24fe69563d6d4a3f8558f",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "icon-image": "Tiananmen",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Annotation",
            "minzoom": 10.0,
            "type": "symbol",
            "filter": ["all", ["==", "name_zh", "天安门"]]
        }, {
            "id": "91143e6a929e4facbd5de0f4f1131785",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 10,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "180400"], [">=", "rank", 8]]
        }, {
            "id": "0b7aa1943e1b45f49071327e936b3b62",
            "maxzoom": 17.5,
            "source": "Poi",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000",
                "text-translate": [0, 4]
            },
            "source-layer": "Poi",
            "minzoom": 16.0,
            "type": "symbol",
            "filter": ["all", ["==", "level", "B1"], ["==", "kindcode", "110101"]]
        }, {
            "id": "1a6e58c1c1f74dcbb93425b1a883f8b0",
            "maxzoom": 14.0,
            "source": "Poi",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Poi",
            "minzoom": 11.0,
            "type": "symbol",
            "filter": ["all", ["==", "name_zh", "故宫"], ["==", "level", "A"]]
        }, {
            "id": "e323d12e63c040ddb657b816c2f0ee97",
            "maxzoom": 17.5,
            "source": "Poi",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "icon-size": 0.8,
                "text-offset": [0, 1]
            },
            "source-layer": "Poi",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#c4b29f",
                "text-translate": [0, 4]
            },
            "minzoom": 16,
            "type": "symbol",
            "filter": ["all", ["==", "level", "B1"], ["==", "kindcode", "150101"]]
        }, {
            "id": "9bdac4b4a653439ca1094f330526ccc4",
            "maxzoom": 17.5,
            "source": "Ptstop",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Ptstop",
            "paint": {
                "icon-color": "#e67a7f"
            },
            "minzoom": 16.0,
            "type": "symbol",
            "filter": ["all", ["==", "stationtype", 0], ["==", "status", 0]]
        }, {
            "id": "806c59ecc18a48d69cb64a4384e08f11",
            "maxzoom": 17.5,
            "source": "Ptline",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.0,
                "text-color": "#00215d",
                "icon-color": "#ff0000"
            },
            "source-layer": "Ptline",
            "minzoom": 12.0,
            "type": "symbol",
            "filter": ["all", ["==", "line_type", 2], ["==", "status", 0]]
        }, {
            "id": "af9bbc1e5922420eb2cc37f8a19be4ab",
            "maxzoom": 17.5,
            "source": "Ptstop",
            "layout": {
                "text-size": 13.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "center",
                "text-offset": [0, 1]
            },
            "source-layer": "Ptstop",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.3,
                "icon-color": "#171bf0",
                "text-translate": [0, 10]
            },
            "minzoom": 13.0,
            "type": "symbol",
            "filter": ["all", ["==", "status", 0], ["==", "stationtype", 1], ["==", "istransfer", 1]]
        }, {
            "id": "6f35a4ea3add451f8f6d642b81ad61ba",
            "maxzoom": 17.5,
            "source": "Ptstop",
            "layout": {
                "text-size": 13,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "center",
                "text-offset": [0, 1]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.3,
                "icon-color": "#171bf0",
                "text-translate": [0, 10]
            },
            "source-layer": "Ptstop",
            "minzoom": 13,
            "type": "symbol",
            "filter": ["all", ["==", "status", 0], ["==", "stationtype", 1], ["==", "istransfer", 0]]
        }, {
            "id": "3701865cf253474180e1210f36fa0b11",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 10,
                "visibility": "visible",
                "text-field": "{name_brief}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f98100",
                "text-halo-width": 10,
                "text-color": "#ffffff",
                "icon-halo-width": 1,
                "icon-color": "#3c8724"
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 4], ["in", "functionclass", 1, 2]]
        }, {
            "id": "83b880a892234a4697826a963dd70ea7",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 10,
                "visibility": "visible",
                "text-field": "{name_brief}",
                "text-rotation-alignment": "viewport",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#ff1b00",
                "text-halo-width": 10.0,
                "text-color": "#ffffff",
                "icon-halo-width": 1,
                "icon-color": "#72ff1b"
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 3], ["in", "functionclass", 1, 2]]
        }, {
            "id": "f53414e8f6664e83b5edd0304cb85407",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 10.0,
                "icon-keep-upright": true,
                "visibility": "visible",
                "symbol-avoid-edges": true,
                "text-pitch-alignment": "map",
                "text-field": "{name_brief}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "viewport",
                "icon-rotation-alignment": "map",
                "text-anchor": "center",
                "text-allow-overlap": false,
                "symbol-placement": "line",
                "text-offset": [0, 0]
            },
            "source-layer": "Road",
            "paint": {
                "text-halo-color": "#008100",
                "text-halo-width": 10.0,
                "text-color": "#ffffff",
                "icon-translate-anchor": "map",
                "icon-halo-width": 1.0,
                "icon-color": "#3c8724"
            },
            "minzoom": 8.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 1], ["in", "functionclass", 1, 2]]
        }, {
            "id": "8ef993d712e04d77b4c9906529783dc3",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "symbol",
            "filter": ["all", ["in", "kind", 1, 3], ["in", "functionclass", 1, 2]]
        }, {
            "id": "b886859ca16749eea3eeab6ec7da2f2c",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 10.0,
            "type": "symbol",
            "filter": ["all", ["in", "functionclass", 1, 2], ["!in", "kind", 1, 3, 4]]
        }, {
            "id": "6a96546830c641909d5af114b656ec69",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 11,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 15.0,
            "type": "symbol",
            "filter": ["all", ["in", "functionclass", 4]]
        }, {
            "id": "d36f2f522ffa42f7a07f1a84bd983f67",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 11,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 13.0,
            "type": "symbol",
            "filter": ["all", ["in", "functionclass", 3]]
        }, {
            "id": "2dd712a134d844a9aa6eadb8b1338bec",
            "maxzoom": 11.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "paint": {
                "text-halo-color": "#5e94e4",
                "text-halo-width": 10.0,
                "text-color": "#ffffff",
                "icon-color": "#ff0000",
                "text-translate-anchor": "map"
            },
            "source-layer": "Adminflag",
            "minzoom": 9.0,
            "type": "symbol",
            "filter": ["all", ["==", "type", 4]]
        }, {
            "id": "b25198d1071c4f01ba526c97c75b6039",
            "maxzoom": 9.0,
            "source": "Adminflag",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.0,
                "text-color": "#222222",
                "icon-color": "#ff0000",
                "text-translate-anchor": "map"
            },
            "source-layer": "Adminflag",
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["==", "type", 4]]
        }, {
            "id": "d0d70a04d05744858f145e7b9100beea",
            "maxzoom": 11.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 14.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "map",
                "text-ignore-placement": false,
                "text-allow-overlap": false,
                "text-anchor": "bottom",
                "icon-size": 0.8,
                "text-offset": [0, -0.3]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#222222",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "minzoom": 6.0,
            "type": "symbol",
            "filter": ["all", ["==", "capital", 3]]
        }, {
            "id": "969ccac65a9a421fa831bd8b1929d0e7",
            "maxzoom": 11.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 14.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "map",
                "text-anchor": "bottom",
                "text-allow-overlap": false,
                "icon-size": 0.8,
                "text-offset": [0, -0.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.5,
                "text-color": "#222222",
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 4.0,
            "type": "symbol",
            "filter": ["all", ["==", "capital", 2], ["!=", "name_zh", "香港,澳门"]]
        }, {
            "id": "8bb6384c79b842909f1b686fa21fce89",
            "maxzoom": 8.0,
            "source": "Adminflag",
            "layout": {
                "text-size": {
                    "stops": [[3, 16], [17, 24]],
                    "base": 1
                },
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "bottom",
                "icon-size": 1.5,
                "text-offset": [0, -0.3]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#000000",
                "text-halo-width": 0.1,
                "text-color": "#222222",
                "icon-color": "#ff0000"
            },
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["in", "capital", 1]]
        }, {
            "id": "83f8c3117101411a9880915321e850de",
            "maxzoom": 9.0,
            "source": "Adminflag",
            "layout": {
                "text-size": {
                    "stops": [[3, 16], [17, 24]],
                    "base": 1
                },
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "bottom",
                "icon-size": 0.8,
                "text-offset": [0, -0.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#222222",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 8.0,
            "type": "symbol",
            "filter": ["all", ["in", "capital", 1]]
        }, {
            "id": "3b0a797e9a1245be8a5d7c297fb61829",
            "maxzoom": 3.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 20.0,
                "visibility": "visible",
                "text-justify": "right",
                "text-field": "{name_zh}",
                "text-offset": [2, 1]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#ee0000",
                "text-halo-width": 2.0,
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["in", "capital", 0], ["==", "type", 0]]
        }

    ]
};

var scenery ={
    "version" : 8,
    "name" : "Bright",
    "sources" :
        {
            "Worldannotation": {
                "tiles": ["http://minedata.cn/data/Worldannotation/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Building": {
                "tiles": ["http://minedata.cn/data/Building/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Landuse": {
                "tiles": ["http://minedata.cn/data/Landuse/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Worldislands": {
                "tiles": ["http://minedata.cn/data/Worldislands/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Ptline": {
                "tiles": ["http://minedata.cn/data/Ptline/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Villtown": {
                "tiles": ["http://minedata.cn/data/Villtown/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Greenface": {
                "tiles": ["http://minedata.cn/data/Greenface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Worldwaterface": {
                "tiles": ["http://minedata.cn/data/Worldwaterface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Waterline": {
                "tiles": ["http://minedata.cn/data/Waterline/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Subwaypolygon": {
                "tiles": ["http://minedata.cn/data/Subwaypolygon/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Ptexit": {
                "tiles": ["http://minedata.cn/data/Ptexit/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Poi": {
                "tiles": ["http://minedata.cn/data/Poi/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Waterface": {
                "tiles": ["http://minedata.cn/data/Waterface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Adminbound": {
                "tiles": ["http://minedata.cn/data/Adminbound/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Ptstop": {
                "tiles": ["http://minedata.cn/data/Ptstop/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Railway": {
                "tiles": ["http://minedata.cn/data/Railway/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Adminflag": {
                "tiles": ["http://minedata.cn/data/Adminflag/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Annotation": {
                "tiles": ["http://minedata.cn/data/Annotation/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Worldwaterline": {
                "tiles": ["http://minedata.cn/data/Worldwaterline/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Buildingmore": {
                "tiles": ["http://minedata.cn/data/Buildingmore/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Road": {
                "tiles": ["http://minedata.cn/data/Road/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "Worldcountries": {
                "tiles": ["http://minedata.cn/data/Worldcountries/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
                "type": "vector"
            },
            "poiNew" :{
                "type" : "vector",
                "tiles": ["http://192.168.15.41:9999/smapapi/scenic/pbf/poi/{z}/{x}/{y}"],
                'minzoom':7,
                'maxzoom':12
            },
            "carportline":{
                "type" : "vector",
                "tiles": ["http://192.168.15.41:9999/smapapi/scenic/pbf/carportline/{z}/{x}/{y}"]
            },
            "outarea" :{
                "type" : "vector",
                "tiles": ["http://192.168.15.41:9999/smapapi/scenic/pbf/outarea/{z}/{x}/{y}"]
            },
            "route":{
                "type" : "vector",
                "tiles": ["http://192.168.15.41:9999/smapapi/scenic/pbf/route/{z}/{x}/{y}"]
            },

        },
    "glyphs": "../data/map/{fontstack}/{range}.pbf",
    "sprite" : App.Config.appRoot + "/data/map/sprite/sprite",
    "layers" : [
        {
            "id": "576a22cac9a04cefb8d4bb20c67024d8",
            "maxzoom": 22,
            "source": "",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "background-color": "#fcf9f2"
            },
            "source-layer": "",
            "minzoom": 0,
            "type": "background"
        }, {
            "id": "29ee5cec41f14f38b792c66a15881969",
            "maxzoom": 8.5,
            "source": "Worldwaterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#a6cce6"
            },
            "source-layer": "Worldwaterface",
            "minzoom": 3,
            "type": "fill"
        }, {
            "id": "0f219c7dcbb043a8b4ec5c1ebf74dabc",
            "maxzoom": 8.5,
            "source": "Worldcountries",
            "layout": {
                "visibility": "none"
            },
            "source-layer": "Worldcountries",
            "paint": {
                "fill-color": "#fcf9f2"
            },
            "minzoom": 3,
            "type": "fill"
        }, {
            "id": "be4c6cd1bc2c46aeb3bc6080de2751bf",
            "maxzoom": 8.5,
            "source": "Worldwaterline",
            "layout": {
                "line-join": "round",
                "visibility": "none",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#a6cce6",
                "line-width": 1.0
            },
            "source-layer": "Worldwaterline",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["!=", "kind", "121 "]]
        }, {
            "id": "d7d8d9bed26b483682f96e57d2a024e8",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 30.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.5,
                "text-color": "#704f17",
                "icon-color": "#ff0000"
            },
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "405002"]]
        }, {
            "id": "353eee4cdde34bcaa4ad62849051f28f",
            "maxzoom": 8.5,
            "source": "Worldislands",
            "layout": {
                "visibility": "none"
            },
            "source-layer": "Worldislands",
            "paint": {
                "fill-color": "#ffffff"
            },
            "minzoom": 3,
            "type": "fill"
        }, {
            "id": "655d364695bf4bf8bc10dcb988cbf59b",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 16,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.1,
                "text-color": "#2840b5",
                "icon-color": "#ff0000"
            },
            "minzoom": 4.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "275008"], ["!=", "name_zh", "台湾海峡"]]
        }, {
            "id": "aa92569543e74467aa293d390812c813",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 22.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.1,
                "text-color": "#2840b5",
                "icon-color": "#ff0000"
            },
            "minzoom": 3.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "405003"]]
        }, {
            "id": "a8e35d92311a434496b17447e9f26539",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 16.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-offset": [-1, 0]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#2840b5",
                "text-halo-width": 0.1,
                "icon-color": "#ff0000"
            },
            "source-layer": "Worldannotation",
            "minzoom": 5.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "275008"], ["==", "name_zh", "台湾海峡"]]
        }, {
            "id": "479111309f584b5894775d2b0883a00f",
            "maxzoom": 17.5,
            "source": "Waterline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#a6cce6",
                "line-width": 1.0
            },
            "source-layer": "Waterline",
            "minzoom": 3,
            "type": "line"
        }, {
            "id": "da01a6a0677f4a3aa55fb373f1bae4ce",
            "maxzoom": 8.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#a6cce6"
            },
            "minzoom": 4.0,
            "type": "fill",
            "filter": ["all", ["in", "kind", 3]]
        }, {
            "id": "8282071ddd934b798346093e8c2e95fb",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "none"
            },
            "paint": {
                "fill-color": "#a6cce6"
            },
            "source-layer": "Waterface",
            "minzoom": 3.0,
            "type": "fill",
            "filter": ["all", ["in", "kind", 1]]
        }, {
            "id": "7f0e554edf224faeb7c0dd0e84a0db51",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#e1d9b1",
                "line-width": {
                    "stops": [[3, 4], [8, 10]],
                    "base": 1
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["!in", "form", 8, 2], ["==", "kind", 6]]
        }, {
            "id": "88ee114c7e7a46bfa500e2f2acc33638",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#8d8465",
                "line-width": {
                    "stops": [[3, 0.5], [8, 2]],
                    "base": 1
                }
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["!in", "form", 8, 2], ["==", "kind", 6]]
        }, {
            "id": "fc2c046e556947baab39c4b3fc3e13d1",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#fbf8ee",
                "line-width": {
                    "stops": [[3, 0.2], [17, 0.2]],
                    "base": 1.2
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 2]]
        }, {
            "id": "52c5d8dca1ea4088a8d054d95b006414",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#e1d9b1",
                "line-width": {
                    "stops": [[3, 4], [8, 10]],
                    "base": 1
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 8], ["==", "kind", 6]]
        }, {
            "id": "a2317c152afb4fd98f5dece3782acd66",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-dasharray": [5, 5],
                "line-color": "#8d8465",
                "line-width": {
                    "stops": [[3, 0.5], [8, 2]],
                    "base": 1
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 8], ["==", "kind", 6]]
        }, {
            "id": "83092ebed4f34c6d9f53ca3c0eb13096",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#b7b4af",
                "line-width": 0.5
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "ee93f67ae37844f5aebe4365ad53be23",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-dasharray": [1, 2],
                "line-color": "#b7b4af",
                "line-width": {
                    "stops": [[5, 0.1], [6, 0.2], [7, 1.5], [20, 18]],
                    "base": 1.2
                }
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 7]]
        }, {
            "id": "4ab6107b023c4d4d97e4d7c74763bdde",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Annotation",
            "paint": {
                "text-color": "#222222",
                "icon-color": "#ff0000"
            },
            "minzoom": 5.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "275007"]]
        }, {
            "id": "3e4ce35e1b8849c6a7a015c93fa2bab6",
            "maxzoom": 17.5,
            "source": "Villtown",
            "layout": {
                "visibility": "none",
                "text-field": "{name_zh}"
            },
            "source-layer": "Villtown",
            "paint": {
                "icon-color": "#ff0000"
            },
            "minzoom": 9,
            "type": "symbol"
        }, {
            "id": "dcb6a12b868844b9b2fe9a57f9c83881",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 9.0,
                "visibility": "none",
                "text-field": "{name_brief}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": "#00000f",
                "icon-halo-width": 1,
                "icon-color": "#edfff7"
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 2], ["in", "functionclass", 1, 2]]
        }, {
            "id": "d98ea081dcb746d8af67fb112a4d701e",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#a6cce6"
            },
            "minzoom": 9.0,
            "type": "fill",
            "filter": ["all", ["in", "kind", 3, 4, 2], ["==", "display_class", 5]]
        }, {
            "id": "74211ea893124c7c815289c77adc2f17",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#ffe3e3"
            },
            "minzoom": 13.0,
            "type": "fill",
            "filter": ["all", ["==", "kind", 3]]
        }, {
            "id": "cf697ff69f3e4b72bdf18a4621326055",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#e6e8cf"
            },
            "minzoom": 13,
            "type": "fill",
            "filter": ["all", ["==", "kind", 5]]
        }, {
            "id": "9f6fc656a79b47d6b389b03525a79ba9",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ecf0f5"
            },
            "source-layer": "Landuse",
            "minzoom": 13.0,
            "type": "fill",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "5decd378b0ab45709fd4f99ce1c2d2d3",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#decbbe"
            },
            "minzoom": 13,
            "type": "fill",
            "filter": ["all", ["in", "kind", 37]]
        }, {
            "id": "ab1bb900ebc14c8c94bd415a20b6a969",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#9ed951"
            },
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 30]]
        }, {
            "id": "613c0982453948c0a2ebf9464d2a666f",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#e2efe6"
            },
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 31]]
        }, {
            "id": "92cc3dc9d7ab4ffeabf64633c1f4aaa8",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#e2efe6"
            },
            "source-layer": "Landuse",
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["in", "kind", 36, 2]]
        }, {
            "id": "9ce55afb2a084ed7af5a07358f39f95a",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#edf6f6"
            },
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 4]]
        }, {
            "id": "e0f00dfd26ef4b97a3d07a1469593738",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#a6cce6"
            },
            "minzoom": 11.0,
            "type": "fill",
            "filter": ["all", ["in", "display_class", 3, 4, 1, 2]]
        }, {
            "id": "cf9027786fc94d4aa7358c297584a141",
            "maxzoom": 17.5,
            "source": "Railway",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#a8a6a4",
                "line-width": {
                    "stops": [[6, 1.5], [20, 10]],
                    "base": 1.2
                }
            },
            "source-layer": "Railway",
            "minzoom": 6,
            "type": "line",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "07f6b29226cd432fa2725ec21cdfbc4e",
            "maxzoom": 17.5,
            "source": "Railway",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Railway",
            "paint": {
                "line-dasharray": [8, 8],
                "line-color": "#ffffff",
                "line-width": {
                    "stops": [[6, 0.5], [20, 8]],
                    "base": 1.2
                }
            },
            "minzoom": 6,
            "type": "line",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "4a98a98fbba4422eb63dc6768c9ed554",
            "maxzoom": 17.5,
            "source": "Greenface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#cfe7b4"
            },
            "source-layer": "Greenface",
            "minzoom": 8.0,
            "type": "fill"
        }, {
            "id": "60d750cfc5d9480ebae429f64af2bb33",
            "maxzoom": 17.5,
            "source": "Subwaypolygon",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Subwaypolygon",
            "paint": {
                "fill-color": {
                    "property": "color",
                    "type": "identity"
                },
                "fill-opacity": 0.6
            },
            "minzoom": 16.0,
            "type": "fill"
        }, {
            "id": "361e9ea3ee664e9b9daf5d56c7603bd1",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [[15, 2], [20, 5]],
                    "base": 1.2
                },
                "line-color": "#f9d195",
                "line-width": 0.6
            },
            "source-layer": "Road",
            "minzoom": 15.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 5]]
        }, {
            "id": "3c90599699254bdfb8797dba00beed24",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#ffffff",
                "line-width": {
                    "stops": [[15, 2], [20, 5]],
                    "base": 1.2
                }
            },
            "minzoom": 15,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 5]]
        }, {
            "id": "eebcc3f0f90d4bcba8ebc2c9efd34d38",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#f9ecc1",
                "line-width": {
                    "stops": [[5, 0.7], [6, 1], [20, 10]],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 11.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 4]]
        }, {
            "id": "4dd8a2998f3e4597b066aa02d0893fea",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [[9, 1], [20, 6]],
                    "base": 1
                },
                "line-color": "#f9ca87",
                "line-width": 0.8
            },
            "minzoom": 10.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 3]]
        }, {
            "id": "19dc8ace37e64c0b957af9b058b6a9c0",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#f9ecc1",
                "line-width": {
                    "stops": [[9, 1.2], [20, 6]],
                    "base": 1
                }
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 3]]
        }, {
            "id": "dbe9cde2c2a44bf9832af6fc314b9836",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [[7, 1.2], [9, 1.2], [20, 6]],
                    "base": 1
                },
                "line-color": "#ff7600",
                "line-width": 0.8
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 2]]
        }, {
            "id": "3ae236b2cf7645ef86afcd0022223d7a",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#ffd467",
                "line-width": {
                    "stops": [[7, 1.5], [9, 1.6], [20, 8]],
                    "base": 1
                }
            },
            "minzoom": 7.0,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 2]]
        }, {
            "id": "ed3a8eb5fdf746c1b76ecdcaaf01cad0",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [[5, 0.7], [6, 0.8], [7, 1.4], [9, 1.4], [20, 8]],
                    "base": 1
                },
                "line-color": "#ff6d00",
                "line-width": 0.8
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 1]]
        }, {
            "id": "e8f8468a96c3419290e8a1a5bfb90632",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": {
                    "stops": [[5, "#ffb35b"], [8, "#ffb35b"], [20, "#ffb35b"]],
                    "base": 1
                },
                "line-width": {
                    "stops": [[5, 0.7], [6, 0.8], [7, 1.6], [9, 1.6], [20, 10]],
                    "base": 1
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 1]]
        }, {
            "id": "05415035370046d59b23d0bf4936153a",
            "maxzoom": 17.0,
            "source": "Buildingmore",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Buildingmore",
            "paint": {
                "fill-color": "#dcdecd",
                "fill-opacity": 0.6
            },
            "minzoom": 16,
            "type": "fill"
        }, {
            "id": "c5d7e16d300b4d61ba411d494f198865",
            "maxzoom": 17.5,
            "source": "Buildingmore",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Buildingmore",
            "paint": {
                "fill-extrusion-color": "#dcdecd",
                "fill-extrusion-translate-anchor": "map",
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.6,
                "fill-extrusion-height": {
                    "property": "levels",
                    "type": "identity"
                },
                "fill-extrusion-translate": [0, 0]
            },
            "minzoom": 17,
            "type": "fill-extrusion"
        }, {
            "id": "0706626751d4471e95466fdbb0241cb7",
            "maxzoom": 17.5,
            "source": "Ptline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Ptline",
            "paint": {
                "line-color": "#ffffff",
                "line-width": 3.6
            },
            "minzoom": 10,
            "type": "line",
            "filter": ["all", ["==", "line_type", 2], ["==", "status", 0]]
        }, {
            "id": "a63d823be09c4dbba41114555a30935f",
            "maxzoom": 17.5,
            "source": "Ptline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": {
                    "property": "color",
                    "type": "identity"
                },
                "line-opacity": 0.6,
                "line-width": {
                    "stops": [[10, 1.8], [20, 4]],
                    "base": 1.2
                }
            },
            "source-layer": "Ptline",
            "minzoom": 10,
            "type": "line",
            "filter": ["all", ["==", "line_type", 2], ["==", "status", 0]]
        },{
            "id": "c647f7f79e9947ed833c8ec8544c30be",
            "maxzoom": 17.5,
            "source": "Building",
            "layout": {
                "visibility": "none"
            },
            "paint": {
                "fill-extrusion-color": "#FFEFD5",
                "fill-extrusion-translate-anchor": "map",
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 1,
                "fill-extrusion-height": {
                    "property": "levels",
                    "type": "identity"
                },
                "fill-extrusion-translate": [0, 0]
            },
            "source-layer": "Building",
            "minzoom": 12,
            "type": "fill-extrusion"
        },{
            "id": "f514e7f040154cbd87535f4477f401b6",
            "maxzoom": 17.5,
            "source": "Railway",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "source-layer": "Railway",
            "paint": {
                "text-color": "#464646",
                "icon-color": "#ff0000"
            },
            "minzoom": 6,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 1]]
        },{
            "id": "6c92bf7f953047c7bdac1a7b83befab4",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 14.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "120201"], [">=", "rank", 1]]
        }, {
            "id": "10629e6309bc4618b884e1e0dfbece3d",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 11.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "160205"], [">=", "rank", 3]]
        }, {
            "id": "9ad5db7fc802469b881706f6d16e8e6d",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 11.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "180308"]]
        }, {
            "id": "3c5f8a6c51cf4678975287dbe8b6d549",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#17f9e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 14.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "125140"], [">=", "rank", 7]]
        }, {
            "id": "aa02d7a9a9db4a5faadf707f1034133f",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 12.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "200103"], [">=", "rank", 3]]
        }, {
            "id": "b44ebe2f72864400b586ec70752feacb",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "minzoom": 13.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "200103"], [">=", "rank", 3]]
        },{
            "id": "3c7f6d34241244f19191df4925b8fce4",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-ignore-placement": false,
                "text-offset": [0, 1]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 16.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "230208"]]
        }, {
            "id": "1fe6764e90eb4fb5889ccd2b2ed2de3d",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "text-justify": "center",
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [0, 0]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 11,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "275017"], [">=", "rank", 8]]
        },  {
            "id": "61fe65af63a24fe69563d6d4a3f8558f",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "icon-image": "Tiananmen",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Annotation",
            "minzoom": 10.0,
            "type": "symbol",
            "filter": ["all", ["==", "name_zh", "天安门"]]
        }, {
            "id": "91143e6a929e4facbd5de0f4f1131785",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 10,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "180400"], [">=", "rank", 8]]
        }, {
            "id": "0b7aa1943e1b45f49071327e936b3b62",
            "maxzoom": 17.5,
            "source": "Poi",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000",
                "text-translate": [0, 4]
            },
            "source-layer": "Poi",
            "minzoom": 16.0,
            "type": "symbol",
            "filter": ["all", ["==", "level", "B1"], ["==", "kindcode", "110101"]]
        }, {
            "id": "1a6e58c1c1f74dcbb93425b1a883f8b0",
            "maxzoom": 14.0,
            "source": "Poi",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Poi",
            "minzoom": 11.0,
            "type": "symbol",
            "filter": ["all", ["==", "name_zh", "故宫"], ["==", "level", "A"]]
        }, {
            "id": "e323d12e63c040ddb657b816c2f0ee97",
            "maxzoom": 17.5,
            "source": "Poi",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "icon-size": 0.8,
                "text-offset": [0, 1]
            },
            "source-layer": "Poi",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#c4b29f",
                "text-translate": [0, 4]
            },
            "minzoom": 16,
            "type": "symbol",
            "filter": ["all", ["==", "level", "B1"], ["==", "kindcode", "150101"]]
        }, {
            "id": "9bdac4b4a653439ca1094f330526ccc4",
            "maxzoom": 17.5,
            "source": "Ptstop",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Ptstop",
            "paint": {
                "icon-color": "#e67a7f"
            },
            "minzoom": 16.0,
            "type": "symbol",
            "filter": ["all", ["==", "stationtype", 0], ["==", "status", 0]]
        }, {
            "id": "806c59ecc18a48d69cb64a4384e08f11",
            "maxzoom": 17.5,
            "source": "Ptline",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.0,
                "text-color": "#00215d",
                "icon-color": "#ff0000"
            },
            "source-layer": "Ptline",
            "minzoom": 12.0,
            "type": "symbol",
            "filter": ["all", ["==", "line_type", 2], ["==", "status", 0]]
        }, {
            "id": "af9bbc1e5922420eb2cc37f8a19be4ab",
            "maxzoom": 17.5,
            "source": "Ptstop",
            "layout": {
                "text-size": 13.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "center",
                "text-offset": [0, 1]
            },
            "source-layer": "Ptstop",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.3,
                "icon-color": "#171bf0",
                "text-translate": [0, 10]
            },
            "minzoom": 13.0,
            "type": "symbol",
            "filter": ["all", ["==", "status", 0], ["==", "stationtype", 1], ["==", "istransfer", 1]]
        }, {
            "id": "6f35a4ea3add451f8f6d642b81ad61ba",
            "maxzoom": 17.5,
            "source": "Ptstop",
            "layout": {
                "text-size": 13,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "center",
                "text-offset": [0, 1]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.3,
                "icon-color": "#171bf0",
                "text-translate": [0, 10]
            },
            "source-layer": "Ptstop",
            "minzoom": 13,
            "type": "symbol",
            "filter": ["all", ["==", "status", 0], ["==", "stationtype", 1], ["==", "istransfer", 0]]
        }, {
            "id": "3701865cf253474180e1210f36fa0b11",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 10,
                "visibility": "visible",
                "text-field": "{name_brief}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f98100",
                "text-halo-width": 10,
                "text-color": "#ffffff",
                "icon-halo-width": 1,
                "icon-color": "#3c8724"
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 4], ["in", "functionclass", 1, 2]]
        }, {
            "id": "83b880a892234a4697826a963dd70ea7",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 10,
                "visibility": "visible",
                "text-field": "{name_brief}",
                "text-rotation-alignment": "viewport",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#ff1b00",
                "text-halo-width": 10.0,
                "text-color": "#ffffff",
                "icon-halo-width": 1,
                "icon-color": "#72ff1b"
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 3], ["in", "functionclass", 1, 2]]
        }, {
            "id": "f53414e8f6664e83b5edd0304cb85407",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 10.0,
                "icon-keep-upright": true,
                "visibility": "visible",
                "symbol-avoid-edges": true,
                "text-pitch-alignment": "map",
                "text-field": "{name_brief}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "viewport",
                "icon-rotation-alignment": "map",
                "text-anchor": "center",
                "text-allow-overlap": false,
                "symbol-placement": "line",
                "text-offset": [0, 0]
            },
            "source-layer": "Road",
            "paint": {
                "text-halo-color": "#008100",
                "text-halo-width": 10.0,
                "text-color": "#ffffff",
                "icon-translate-anchor": "map",
                "icon-halo-width": 1.0,
                "icon-color": "#3c8724"
            },
            "minzoom": 8.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 1], ["in", "functionclass", 1, 2]]
        }, {
            "id": "8ef993d712e04d77b4c9906529783dc3",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "symbol",
            "filter": ["all", ["in", "kind", 1, 3], ["in", "functionclass", 1, 2]]
        }, {
            "id": "b886859ca16749eea3eeab6ec7da2f2c",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 10.0,
            "type": "symbol",
            "filter": ["all", ["in", "functionclass", 1, 2], ["!in", "kind", 1, 3, 4]]
        }, {
            "id": "6a96546830c641909d5af114b656ec69",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 11,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 15.0,
            "type": "symbol",
            "filter": ["all", ["in", "functionclass", 4]]
        }, {
            "id": "d36f2f522ffa42f7a07f1a84bd983f67",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 11,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 13.0,
            "type": "symbol",
            "filter": ["all", ["in", "functionclass", 3]]
        }, {
            "id": "2dd712a134d844a9aa6eadb8b1338bec",
            "maxzoom": 11.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "paint": {
                "text-halo-color": "#5e94e4",
                "text-halo-width": 10.0,
                "text-color": "#ffffff",
                "icon-color": "#ff0000",
                "text-translate-anchor": "map"
            },
            "source-layer": "Adminflag",
            "minzoom": 9.0,
            "type": "symbol",
            "filter": ["all", ["==", "type", 4]]
        }, {
            "id": "b25198d1071c4f01ba526c97c75b6039",
            "maxzoom": 9.0,
            "source": "Adminflag",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.0,
                "text-color": "#222222",
                "icon-color": "#ff0000",
                "text-translate-anchor": "map"
            },
            "source-layer": "Adminflag",
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["==", "type", 4]]
        }, {
            "id": "d0d70a04d05744858f145e7b9100beea",
            "maxzoom": 11.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 14.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "map",
                "text-ignore-placement": false,
                "text-allow-overlap": false,
                "text-anchor": "bottom",
                "icon-size": 0.8,
                "text-offset": [0, -0.3]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#222222",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "minzoom": 6.0,
            "type": "symbol",
            "filter": ["all", ["==", "capital", 3]]
        }, {
            "id": "969ccac65a9a421fa831bd8b1929d0e7",
            "maxzoom": 11.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 14.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "map",
                "text-anchor": "bottom",
                "text-allow-overlap": false,
                "icon-size": 0.8,
                "text-offset": [0, -0.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.5,
                "text-color": "#222222",
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 4.0,
            "type": "symbol",
            "filter": ["all", ["==", "capital", 2], ["!=", "name_zh", "香港,澳门"]]
        }, {
            "id": "8bb6384c79b842909f1b686fa21fce89",
            "maxzoom": 8.0,
            "source": "Adminflag",
            "layout": {
                "text-size": {
                    "stops": [[3, 16], [17, 24]],
                    "base": 1
                },
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "bottom",
                "icon-size": 1.5,
                "text-offset": [0, -0.3]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#000000",
                "text-halo-width": 0.1,
                "text-color": "#222222",
                "icon-color": "#ff0000"
            },
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["in", "capital", 1]]
        }, {
            "id": "83f8c3117101411a9880915321e850de",
            "maxzoom": 9.0,
            "source": "Adminflag",
            "layout": {
                "text-size": {
                    "stops": [[3, 16], [17, 24]],
                    "base": 1
                },
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "bottom",
                "icon-size": 0.8,
                "text-offset": [0, -0.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#222222",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 8.0,
            "type": "symbol",
            "filter": ["all", ["in", "capital", 1]]
        }, {
            "id": "3b0a797e9a1245be8a5d7c297fb61829",
            "maxzoom": 3.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 20.0,
                "visibility": "visible",
                "text-justify": "right",
                "text-field": "{name_zh}",
                "text-offset": [2, 1]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#ee0000",
                "text-halo-width": 2.0,
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["in", "capital", 0], ["==", "type", 0]]
        },   {
            id: 'poiNew_layer',
            type: 'symbol',
            interactive: true,
            "source" : "poiNew",
            'source-layer': 'poi',
            minzoom: 6,
            layout:
                {
                    'icon-image': 'museum-15',
                    // "text-field": "{name}",
                    // 'text-size':12,
                    // "text-offset":[0,1.5],
                    // "text-justify": "center",
                    "visibility": "visible"
                },
            paint:
                {
                    'icon-color': '#ff2d2d',
                    "text-halo-width": 0.5,
                    "text-color": "#704f17",
                },
            filter: ["==", "sight_level", 5 ]
        },
        {
            id: 'poiNew_layer4A',
            type: 'symbol',
            interactive: true,
            "source" : "poiNew",
            'source-layer': 'poi',
            minzoom: 9,
            layout:
                {
                    'icon-image': 'museum-15',
                    // "text-field": "{name}",
                    // 'text-size':12,
                    // "text-offset":[0,1.5],
                    // "text-justify": "center",
                    "visibility": "visible"
                },
            paint:
                {
                    'icon-color': '#ff2d2d',
                    "text-halo-width": 0.5,
                    "text-color": "#704f17",
                },
            filter: ["in", "sight_level",5,4 ]
        },
        {
            id: 'poiNew_layerAll',
            type: 'symbol',
            interactive: true,
            "source" : "poiNew",
            'source-layer': 'poi',
            minzoom: 11,
            layout:
                {
                    'icon-image': 'museum-15',
                    // "text-field": "{name}",
                    // 'text-size':12,
                    // "text-offset":[0,1.5],
                    // "text-justify": "center",
                    "visibility": "visible"
                },
            paint:
                {
                    'icon-color': '#ff2d2d',
                    "text-halo-width": 0.5,
                    "text-color": "#704f17",
                }
        },
        {
            id: "outarea_layer",
            maxzoom: 17,
            interactive: true,
            'source': "outarea",
            'source-layer': "outarea",
            layout: {
                "visibility": "none"
            },
            paint: {
                "fill-color": "#f5eaaf"
            },
            minzoom: 3,
            type: "fill"
        },
        {
            id: "carportline_layer",
            maxzoom: 17,
            interactive: true,
            'source': "carportline",
            'source-layer': "carportline",
            layout: {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            paint: {
                "line-color": "#61A191",
                "line-width": 1.0
            },
            minzoom: 3,
            type: "line"
        }
    ]
};

var productDay = {
    "version" : 8,
    "name" : "Bright",
    "sources" :
      {
          "increLink" :
            {
                "type":"vector",
                "tiles":
                  ['http://fastmap.navinfo.com/smapapi/data/increlink/{z}/{x}/{y}/?ak=Navinfo1!&province={province}&end_time={end_time}'],
            },
          "increPoi" :
            {
                "type":"vector",
                "tiles":
                  ['http://fastmap.navinfo.com/smapapi/data/increpoi/{z}/{x}/{y}?ak=Navinfo1!&province={province}&end_time={end_time}'],
            },
          "Worldannotation": {
              "tiles": ["http://minedata.cn/data/Worldannotation/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Building": {
              "tiles": ["http://minedata.cn/data/Building/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Landuse": {
              "tiles": ["http://minedata.cn/data/Landuse/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Worldislands": {
              "tiles": ["http://minedata.cn/data/Worldislands/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Ptline": {
              "tiles": ["http://minedata.cn/data/Ptline/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Villtown": {
              "tiles": ["http://minedata.cn/data/Villtown/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Greenface": {
              "tiles": ["http://minedata.cn/data/Greenface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Worldwaterface": {
              "tiles": ["http://minedata.cn/data/Worldwaterface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Waterline": {
              "tiles": ["http://minedata.cn/data/Waterline/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Subwaypolygon": {
              "tiles": ["http://minedata.cn/data/Subwaypolygon/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Ptexit": {
              "tiles": ["http://minedata.cn/data/Ptexit/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Poi": {
              "tiles": ["http://minedata.cn/data/Poi/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Waterface": {
              "tiles": ["http://minedata.cn/data/Waterface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Adminbound": {
              "tiles": ["http://minedata.cn/data/Adminbound/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Ptstop": {
              "tiles": ["http://minedata.cn/data/Ptstop/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Railway": {
              "tiles": ["http://minedata.cn/data/Railway/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Adminflag": {
              "tiles": ["http://minedata.cn/data/Adminflag/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Annotation": {
              "tiles": ["http://minedata.cn/data/Annotation/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Worldwaterline": {
              "tiles": ["http://minedata.cn/data/Worldwaterline/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Buildingmore": {
              "tiles": ["http://minedata.cn/data/Buildingmore/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Road": {
              "tiles": ["http://minedata.cn/data/Road/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          },
          "Worldcountries": {
              "tiles": ["http://minedata.cn/data/Worldcountries/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716"],
              "type": "vector"
          }
      },
    "glyphs": "../data/map/{fontstack}/{range}.pbf",
    "sprite" : App.Config.appRoot + "/data/map/sprite/sprite",
    "layers" : [
        {
            "id": "576a22cac9a04cefb8d4bb20c67024d8",
            "maxzoom": 22,
            "source": "",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "background-color": "#fcf9f2"
            },
            "source-layer": "",
            "minzoom": 0,
            "type": "background"
        }, {
            "id": "29ee5cec41f14f38b792c66a15881969",
            "maxzoom": 8.5,
            "source": "Worldwaterface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#a6cce6"
            },
            "source-layer": "Worldwaterface",
            "minzoom": 3,
            "type": "fill"
        }, {
            "id": "0f219c7dcbb043a8b4ec5c1ebf74dabc",
            "maxzoom": 8.5,
            "source": "Worldcountries",
            "layout": {
                "visibility": "none"
            },
            "source-layer": "Worldcountries",
            "paint": {
                "fill-color": "#fcf9f2"
            },
            "minzoom": 3,
            "type": "fill"
        }, {
            "id": "be4c6cd1bc2c46aeb3bc6080de2751bf",
            "maxzoom": 8.5,
            "source": "Worldwaterline",
            "layout": {
                "line-join": "round",
                "visibility": "none",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#a6cce6",
                "line-width": 1.0
            },
            "source-layer": "Worldwaterline",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["!=", "kind", "121 "]]
        }, {
            "id": "d7d8d9bed26b483682f96e57d2a024e8",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 30.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.5,
                "text-color": "#704f17",
                "icon-color": "#ff0000"
            },
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "405002"]]
        }, {
            "id": "353eee4cdde34bcaa4ad62849051f28f",
            "maxzoom": 8.5,
            "source": "Worldislands",
            "layout": {
                "visibility": "none"
            },
            "source-layer": "Worldislands",
            "paint": {
                "fill-color": "#ffffff"
            },
            "minzoom": 3,
            "type": "fill"
        }, {
            "id": "655d364695bf4bf8bc10dcb988cbf59b",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 16,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.1,
                "text-color": "#2840b5",
                "icon-color": "#ff0000"
            },
            "minzoom": 4.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "275008"], ["!=", "name_zh", "台湾海峡"]]
        }, {
            "id": "aa92569543e74467aa293d390812c813",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 22.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Worldannotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.1,
                "text-color": "#2840b5",
                "icon-color": "#ff0000"
            },
            "minzoom": 3.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "405003"]]
        }, {
            "id": "a8e35d92311a434496b17447e9f26539",
            "maxzoom": 8.5,
            "source": "Worldannotation",
            "layout": {
                "text-size": 16.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-offset": [-1, 0]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#2840b5",
                "text-halo-width": 0.1,
                "icon-color": "#ff0000"
            },
            "source-layer": "Worldannotation",
            "minzoom": 5.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", "275008"], ["==", "name_zh", "台湾海峡"]]
        }, {
            "id": "479111309f584b5894775d2b0883a00f",
            "maxzoom": 17.5,
            "source": "Waterline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#a6cce6",
                "line-width": 1.0
            },
            "source-layer": "Waterline",
            "minzoom": 3,
            "type": "line"
        }, {
            "id": "da01a6a0677f4a3aa55fb373f1bae4ce",
            "maxzoom": 8.0,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#a6cce6"
            },
            "minzoom": 4.0,
            "type": "fill",
            "filter": ["all", ["in", "kind", 3]]
        }, {
            "id": "8282071ddd934b798346093e8c2e95fb",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "none"
            },
            "paint": {
                "fill-color": "#a6cce6"
            },
            "source-layer": "Waterface",
            "minzoom": 3.0,
            "type": "fill",
            "filter": ["all", ["in", "kind", 1]]
        }, {
            "id": "7f0e554edf224faeb7c0dd0e84a0db51",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#e1d9b1",
                "line-width": {
                    "stops": [[3, 4], [8, 10]],
                    "base": 1
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["!in", "form", 8, 2], ["==", "kind", 6]]
        }, {
            "id": "88ee114c7e7a46bfa500e2f2acc33638",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#8d8465",
                "line-width": {
                    "stops": [[3, 0.5], [8, 2]],
                    "base": 1
                }
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["!in", "form", 8, 2], ["==", "kind", 6]]
        }, {
            "id": "fc2c046e556947baab39c4b3fc3e13d1",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#fbf8ee",
                "line-width": {
                    "stops": [[3, 0.2], [17, 0.2]],
                    "base": 1.2
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 2]]
        }, {
            "id": "52c5d8dca1ea4088a8d054d95b006414",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-color": "#e1d9b1",
                "line-width": {
                    "stops": [[3, 4], [8, 10]],
                    "base": 1
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 8], ["==", "kind", 6]]
        }, {
            "id": "a2317c152afb4fd98f5dece3782acd66",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Adminbound",
            "paint": {
                "line-dasharray": [5, 5],
                "line-color": "#8d8465",
                "line-width": {
                    "stops": [[3, 0.5], [8, 2]],
                    "base": 1
                }
            },
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 8], ["==", "kind", 6]]
        }, {
            "id": "83092ebed4f34c6d9f53ca3c0eb13096",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#b7b4af",
                "line-width": 0.5
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "ee93f67ae37844f5aebe4365ad53be23",
            "maxzoom": 8.5,
            "source": "Adminbound",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-dasharray": [1, 2],
                "line-color": "#b7b4af",
                "line-width": {
                    "stops": [[5, 0.1], [6, 0.2], [7, 1.5], [20, 18]],
                    "base": 1.2
                }
            },
            "source-layer": "Adminbound",
            "minzoom": 3,
            "type": "line",
            "filter": ["all", ["==", "form", 7]]
        }, {
            "id": "4ab6107b023c4d4d97e4d7c74763bdde",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "source-layer": "Annotation",
            "paint": {
                "text-color": "#222222",
                "icon-color": "#ff0000"
            },
            "minzoom": 5.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "275007"]]
        }, {
            "id": "3e4ce35e1b8849c6a7a015c93fa2bab6",
            "maxzoom": 17.5,
            "source": "Villtown",
            "layout": {
                "visibility": "none",
                "text-field": "{name_zh}"
            },
            "source-layer": "Villtown",
            "paint": {
                "icon-color": "#ff0000"
            },
            "minzoom": 9,
            "type": "symbol"
        }, {
            "id": "dcb6a12b868844b9b2fe9a57f9c83881",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 9.0,
                "visibility": "none",
                "text-field": "{name_brief}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": "#00000f",
                "icon-halo-width": 1,
                "icon-color": "#edfff7"
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 2], ["in", "functionclass", 1, 2]]
        }, {
            "id": "d98ea081dcb746d8af67fb112a4d701e",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#a6cce6"
            },
            "minzoom": 9.0,
            "type": "fill",
            "filter": ["all", ["in", "kind", 3, 4, 2], ["==", "display_class", 5]]
        }, {
            "id": "74211ea893124c7c815289c77adc2f17",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#ffe3e3"
            },
            "minzoom": 13.0,
            "type": "fill",
            "filter": ["all", ["==", "kind", 3]]
        }, {
            "id": "cf697ff69f3e4b72bdf18a4621326055",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#e6e8cf"
            },
            "minzoom": 13,
            "type": "fill",
            "filter": ["all", ["==", "kind", 5]]
        }, {
            "id": "9f6fc656a79b47d6b389b03525a79ba9",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ecf0f5"
            },
            "source-layer": "Landuse",
            "minzoom": 13.0,
            "type": "fill",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "5decd378b0ab45709fd4f99ce1c2d2d3",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#decbbe"
            },
            "minzoom": 13,
            "type": "fill",
            "filter": ["all", ["in", "kind", 37]]
        }, {
            "id": "ab1bb900ebc14c8c94bd415a20b6a969",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#9ed951"
            },
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 30]]
        }, {
            "id": "613c0982453948c0a2ebf9464d2a666f",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#e2efe6"
            },
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 31]]
        }, {
            "id": "92cc3dc9d7ab4ffeabf64633c1f4aaa8",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#e2efe6"
            },
            "source-layer": "Landuse",
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["in", "kind", 36, 2]]
        }, {
            "id": "9ce55afb2a084ed7af5a07358f39f95a",
            "maxzoom": 17.5,
            "source": "Landuse",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Landuse",
            "paint": {
                "fill-color": "#edf6f6"
            },
            "minzoom": 12,
            "type": "fill",
            "filter": ["all", ["==", "kind", 4]]
        }, {
            "id": "e0f00dfd26ef4b97a3d07a1469593738",
            "maxzoom": 17.5,
            "source": "Waterface",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Waterface",
            "paint": {
                "fill-color": "#a6cce6"
            },
            "minzoom": 11.0,
            "type": "fill",
            "filter": ["all", ["in", "display_class", 3, 4, 1, 2]]
        }, {
            "id": "cf9027786fc94d4aa7358c297584a141",
            "maxzoom": 17.5,
            "source": "Railway",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#a8a6a4",
                "line-width": {
                    "stops": [[6, 1.5], [20, 10]],
                    "base": 1.2
                }
            },
            "source-layer": "Railway",
            "minzoom": 6,
            "type": "line",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "07f6b29226cd432fa2725ec21cdfbc4e",
            "maxzoom": 17.5,
            "source": "Railway",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Railway",
            "paint": {
                "line-dasharray": [8, 8],
                "line-color": "#ffffff",
                "line-width": {
                    "stops": [[6, 0.5], [20, 8]],
                    "base": 1.2
                }
            },
            "minzoom": 6,
            "type": "line",
            "filter": ["all", ["==", "kind", 1]]
        }, {
            "id": "4a98a98fbba4422eb63dc6768c9ed554",
            "maxzoom": 17.5,
            "source": "Greenface",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#cfe7b4"
            },
            "source-layer": "Greenface",
            "minzoom": 8.0,
            "type": "fill"
        }, {
            "id": "60d750cfc5d9480ebae429f64af2bb33",
            "maxzoom": 17.5,
            "source": "Subwaypolygon",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Subwaypolygon",
            "paint": {
                "fill-color": {
                    "property": "color",
                    "type": "identity"
                },
                "fill-opacity": 0.6
            },
            "minzoom": 16.0,
            "type": "fill"
        }, {
            "id": "361e9ea3ee664e9b9daf5d56c7603bd1",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [[15, 2], [20, 5]],
                    "base": 1.2
                },
                "line-color": "#ffcc33",
                "line-opacity": 0.5,
                "line-width": 0.6
            },
            "source-layer": "Road",
            "minzoom": 15.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 5]]
        }, {
            "id": "3c90599699254bdfb8797dba00beed24",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#ffcc33",
                "line-opacity": 0.5,
                "line-width": {
                    "stops": [[15, 2], [20, 5]],
                    "base": 1.2
                }
            },
            "minzoom": 15,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 5]]
        }, {
            "id": "eebcc3f0f90d4bcba8ebc2c9efd34d38",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#ffcc33",
                "line-opacity": 0.5,
                "line-width": {
                    "stops": [[5, 0.7], [6, 1], [20, 10]],
                    "base": 1.2
                }
            },
            "source-layer": "Road",
            "minzoom": 11.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 4]]
        }, {
            "id": "4dd8a2998f3e4597b066aa02d0893fea",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [[9, 1], [20, 6]],
                    "base": 1
                },
                "line-color": "#f9ca87",
                "line-width": 0.8
            },
            "minzoom": 10.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 3]]
        }, {
            "id": "19dc8ace37e64c0b957af9b058b6a9c0",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#ffcc33",
                "line-opacity": 0.5,
                "line-width": {
                    "stops": [[9, 1.2], [20, 6]],
                    "base": 1
                }
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": ["all", ["in", "functionclass", 3]]
        }, {
            "id": "dbe9cde2c2a44bf9832af6fc314b9836",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-gap-width": {
                    "stops": [[7, 1.2], [9, 1.2], [20, 6]],
                    "base": 1
                },
                "line-color": "#ff7600",
                "line-width": 0.8
            },
            "source-layer": "Road",
            "minzoom": 8.0,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 2]]
        }, {
            "id": "3ae236b2cf7645ef86afcd0022223d7a",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color": "#ffcc33",
                "line-opacity": 0.5,
                "line-width": {
                    "stops": [[7, 1.5], [9, 1.6], [20, 8]],
                    "base": 1
                }
            },
            "minzoom": 7.0,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 2]]
        }, {
            "id": "ed3a8eb5fdf746c1b76ecdcaaf01cad0",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-gap-width": {
                    "stops": [[5, 0.7], [6, 0.8], [7, 1.4], [9, 1.4], [20, 8]],
                    "base": 1
                },
                "line-color": "#ff6d00",
                "line-width": 0.8
            },
            "minzoom": 8.0,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 1]]
        }, {
            "id": "e8f8468a96c3419290e8a1a5bfb90632",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Road",
            "paint": {
                "line-color":"#ffcc33",
                "line-width": {
                    "stops": [[5, 0.7], [6, 0.8], [7, 1.6], [9, 1.6], [20, 10]],
                    "base": 1
                }
            },
            "minzoom": 5,
            "type": "line",
            "filter": ["all", ["==", "functionclass", 1]]
        }, {
            "id": "05415035370046d59b23d0bf4936153a",
            "maxzoom": 17.0,
            "source": "Buildingmore",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Buildingmore",
            "paint": {
                "fill-color": "#dcdecd",
                "fill-opacity": 0.6
            },
            "minzoom": 16,
            "type": "fill"
        }, {
            "id": "c5d7e16d300b4d61ba411d494f198865",
            "maxzoom": 17.5,
            "source": "Buildingmore",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Buildingmore",
            "paint": {
                "fill-extrusion-color": "#dcdecd",
                "fill-extrusion-translate-anchor": "map",
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.6,
                "fill-extrusion-height": {
                    "property": "levels",
                    "type": "identity"
                },
                "fill-extrusion-translate": [0, 0]
            },
            "minzoom": 17,
            "type": "fill-extrusion"
        }, {
            "id": "0706626751d4471e95466fdbb0241cb7",
            "maxzoom": 17.5,
            "source": "Ptline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "source-layer": "Ptline",
            "paint": {
                "line-color": "#ffffff",
                "line-width": 3.6
            },
            "minzoom": 10,
            "type": "line",
            "filter": ["all", ["==", "line_type", 2], ["==", "status", 0]]
        }, {
            "id": "a63d823be09c4dbba41114555a30935f",
            "maxzoom": 17.5,
            "source": "Ptline",
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": {
                    "property": "color",
                    "type": "identity"
                },
                "line-opacity": 0.6,
                "line-width": {
                    "stops": [[10, 1.8], [20, 4]],
                    "base": 1.2
                }
            },
            "source-layer": "Ptline",
            "minzoom": 10,
            "type": "line",
            "filter": ["all", ["==", "line_type", 2], ["==", "status", 0]]
        },{
            "id": "c647f7f79e9947ed833c8ec8544c30be",
            "maxzoom": 17.5,
            "source": "Building",
            "layout": {
                "visibility": "none"
            },
            "paint": {
                "fill-extrusion-color": "#FFEFD5",
                "fill-extrusion-translate-anchor": "map",
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 1,
                "fill-extrusion-height": {
                    "property": "levels",
                    "type": "identity"
                },
                "fill-extrusion-translate": [0, 0]
            },
            "source-layer": "Building",
            "minzoom": 12,
            "type": "fill-extrusion"
        },{
            "id": "f514e7f040154cbd87535f4477f401b6",
            "maxzoom": 17.5,
            "source": "Railway",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "source-layer": "Railway",
            "paint": {
                "text-color": "#464646",
                "icon-color": "#ff0000"
            },
            "minzoom": 6,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 1]]
        },{
            "id": "6c92bf7f953047c7bdac1a7b83befab4",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 14.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "120201"], [">=", "rank", 1]]
        }, {
            "id": "10629e6309bc4618b884e1e0dfbece3d",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 11.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "160205"], [">=", "rank", 3]]
        }, {
            "id": "9ad5db7fc802469b881706f6d16e8e6d",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 11.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "180308"]]
        }, {
            "id": "3c5f8a6c51cf4678975287dbe8b6d549",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#17f9e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 14.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "125140"], [">=", "rank", 7]]
        }, {
            "id": "aa02d7a9a9db4a5faadf707f1034133f",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 12.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "200103"], [">=", "rank", 3]]
        }, {
            "id": "b44ebe2f72864400b586ec70752feacb",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "minzoom": 13.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "200103"], [">=", "rank", 3]]
        },{
            "id": "3c7f6d34241244f19191df4925b8fce4",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-ignore-placement": false,
                "text-offset": [0, 1]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#1760e4",
                "text-translate": [0, 0]
            },
            "source-layer": "Annotation",
            "minzoom": 16.0,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "230208"]]
        }, {
            "id": "1fe6764e90eb4fb5889ccd2b2ed2de3d",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "text-justify": "center",
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [0, 0]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 11,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "275017"], [">=", "rank", 8]]
        },  {
            "id": "61fe65af63a24fe69563d6d4a3f8558f",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12.0,
                "icon-image": "Tiananmen",
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Annotation",
            "minzoom": 10.0,
            "type": "symbol",
            "filter": ["all", ["==", "name_zh", "天安门"]]
        }, {
            "id": "91143e6a929e4facbd5de0f4f1131785",
            "maxzoom": 17.5,
            "source": "Annotation",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-optional": false,
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-offset": [0, 1.3]
            },
            "source-layer": "Annotation",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.8,
                "text-color": "#544946",
                "icon-color": "#ff0000",
                "text-translate": [0, 0]
            },
            "minzoom": 10,
            "type": "symbol",
            "filter": ["all", ["==", "kindcode", "180400"], [">=", "rank", 8]]
        }, {
            "id": "0b7aa1943e1b45f49071327e936b3b62",
            "maxzoom": 17.5,
            "source": "Poi",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000",
                "text-translate": [0, 4]
            },
            "source-layer": "Poi",
            "minzoom": 16.0,
            "type": "symbol",
            "filter": ["all", ["==", "level", "B1"], ["==", "kindcode", "110101"]]
        }, {
            "id": "1a6e58c1c1f74dcbb93425b1a883f8b0",
            "maxzoom": 14.0,
            "source": "Poi",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-offset": [0, 1.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Poi",
            "minzoom": 11.0,
            "type": "symbol",
            "filter": ["all", ["==", "name_zh", "故宫"], ["==", "level", "A"]]
        }, {
            "id": "e323d12e63c040ddb657b816c2f0ee97",
            "maxzoom": 17.5,
            "source": "Poi",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "icon-size": 0.8,
                "text-offset": [0, 1]
            },
            "source-layer": "Poi",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#544946",
                "text-halo-width": 0.8,
                "icon-color": "#c4b29f",
                "text-translate": [0, 4]
            },
            "minzoom": 16,
            "type": "symbol",
            "filter": ["all", ["==", "level", "B1"], ["==", "kindcode", "150101"]]
        }, {
            "id": "9bdac4b4a653439ca1094f330526ccc4",
            "maxzoom": 17.5,
            "source": "Ptstop",
            "layout": {
                "visibility": "visible"
            },
            "source-layer": "Ptstop",
            "paint": {
                "icon-color": "#e67a7f"
            },
            "minzoom": 16.0,
            "type": "symbol",
            "filter": ["all", ["==", "stationtype", 0], ["==", "status", 0]]
        }, {
            "id": "806c59ecc18a48d69cb64a4384e08f11",
            "maxzoom": 17.5,
            "source": "Ptline",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.0,
                "text-color": "#00215d",
                "icon-color": "#ff0000"
            },
            "source-layer": "Ptline",
            "minzoom": 12.0,
            "type": "symbol",
            "filter": ["all", ["==", "line_type", 2], ["==", "status", 0]]
        }, {
            "id": "af9bbc1e5922420eb2cc37f8a19be4ab",
            "maxzoom": 17.5,
            "source": "Ptstop",
            "layout": {
                "text-size": 13.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "center",
                "text-offset": [0, 1]
            },
            "source-layer": "Ptstop",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.3,
                "icon-color": "#171bf0",
                "text-translate": [0, 10]
            },
            "minzoom": 13.0,
            "type": "symbol",
            "filter": ["all", ["==", "status", 0], ["==", "stationtype", 1], ["==", "istransfer", 1]]
        }, {
            "id": "6f35a4ea3add451f8f6d642b81ad61ba",
            "maxzoom": 17.5,
            "source": "Ptstop",
            "layout": {
                "text-size": 13,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "center",
                "text-offset": [0, 1]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.3,
                "icon-color": "#171bf0",
                "text-translate": [0, 10]
            },
            "source-layer": "Ptstop",
            "minzoom": 13,
            "type": "symbol",
            "filter": ["all", ["==", "status", 0], ["==", "stationtype", 1], ["==", "istransfer", 0]]
        }, {
            "id": "3701865cf253474180e1210f36fa0b11",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 10,
                "visibility": "visible",
                "text-field": "{name_brief}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f98100",
                "text-halo-width": 10,
                "text-color": "#ffffff",
                "icon-halo-width": 1,
                "icon-color": "#3c8724"
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 4], ["in", "functionclass", 1, 2]]
        }, {
            "id": "83b880a892234a4697826a963dd70ea7",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 10,
                "visibility": "visible",
                "text-field": "{name_brief}",
                "text-rotation-alignment": "viewport",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#ff1b00",
                "text-halo-width": 10.0,
                "text-color": "#ffffff",
                "icon-halo-width": 1,
                "icon-color": "#72ff1b"
            },
            "source-layer": "Road",
            "minzoom": 8,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 3], ["in", "functionclass", 1, 2]]
        }, {
            "id": "f53414e8f6664e83b5edd0304cb85407",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 10.0,
                "icon-keep-upright": true,
                "visibility": "visible",
                "symbol-avoid-edges": true,
                "text-pitch-alignment": "map",
                "text-field": "{name_brief}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "viewport",
                "icon-rotation-alignment": "map",
                "text-anchor": "center",
                "text-allow-overlap": false,
                "symbol-placement": "line",
                "text-offset": [0, 0]
            },
            "source-layer": "Road",
            "paint": {
                "text-halo-color": "#008100",
                "text-halo-width": 10.0,
                "text-color": "#ffffff",
                "icon-translate-anchor": "map",
                "icon-halo-width": 1.0,
                "icon-color": "#3c8724"
            },
            "minzoom": 8.0,
            "type": "symbol",
            "filter": ["all", ["==", "kind", 1], ["in", "functionclass", 1, 2]]
        }, {
            "id": "8ef993d712e04d77b4c9906529783dc3",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 9.0,
            "type": "symbol",
            "filter": ["all", ["in", "kind", 1, 3], ["in", "functionclass", 1, 2]]
        }, {
            "id": "b886859ca16749eea3eeab6ec7da2f2c",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 11.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 10.0,
            "type": "symbol",
            "filter": ["all", ["in", "functionclass", 1, 2], ["!in", "kind", 1, 3, 4]]
        }, {
            "id": "6a96546830c641909d5af114b656ec69",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 11,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 15.0,
            "type": "symbol",
            "filter": ["all", ["in", "functionclass", 4]]
        }, {
            "id": "d36f2f522ffa42f7a07f1a84bd983f67",
            "maxzoom": 17.5,
            "source": "Road",
            "layout": {
                "text-size": 11,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "symbol-placement": "line"
            },
            "paint": {
                "text-halo-color": "#f5eaaf",
                "text-color": "#774512",
                "text-halo-width": 0.8,
                "icon-color": "#ff0000"
            },
            "source-layer": "Road",
            "minzoom": 13.0,
            "type": "symbol",
            "filter": ["all", ["in", "functionclass", 3]]
        }, {
            "id": "2dd712a134d844a9aa6eadb8b1338bec",
            "maxzoom": 11.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 12,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "paint": {
                "text-halo-color": "#5e94e4",
                "text-halo-width": 10.0,
                "text-color": "#ffffff",
                "icon-color": "#ff0000",
                "text-translate-anchor": "map"
            },
            "source-layer": "Adminflag",
            "minzoom": 9.0,
            "type": "symbol",
            "filter": ["all", ["==", "type", 4]]
        }, {
            "id": "b25198d1071c4f01ba526c97c75b6039",
            "maxzoom": 9.0,
            "source": "Adminflag",
            "layout": {
                "text-size": 12.0,
                "visibility": "visible",
                "text-field": "{name_zh}"
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.0,
                "text-color": "#222222",
                "icon-color": "#ff0000",
                "text-translate-anchor": "map"
            },
            "source-layer": "Adminflag",
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["==", "type", 4]]
        }, {
            "id": "d0d70a04d05744858f145e7b9100beea",
            "maxzoom": 11.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 14.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-rotation-alignment": "map",
                "text-ignore-placement": false,
                "text-allow-overlap": false,
                "text-anchor": "bottom",
                "icon-size": 0.8,
                "text-offset": [0, -0.3]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#222222",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "minzoom": 6.0,
            "type": "symbol",
            "filter": ["all", ["==", "capital", 3]]
        }, {
            "id": "969ccac65a9a421fa831bd8b1929d0e7",
            "maxzoom": 11.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 14.0,
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-ignore-placement": false,
                "text-rotation-alignment": "map",
                "text-anchor": "bottom",
                "text-allow-overlap": false,
                "icon-size": 0.8,
                "text-offset": [0, -0.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.5,
                "text-color": "#222222",
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 4.0,
            "type": "symbol",
            "filter": ["all", ["==", "capital", 2], ["!=", "name_zh", "香港,澳门"]]
        }, {
            "id": "8bb6384c79b842909f1b686fa21fce89",
            "maxzoom": 8.0,
            "source": "Adminflag",
            "layout": {
                "text-size": {
                    "stops": [[3, 16], [17, 24]],
                    "base": 1
                },
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "bottom",
                "icon-size": 1.5,
                "text-offset": [0, -0.3]
            },
            "source-layer": "Adminflag",
            "paint": {
                "text-halo-color": "#000000",
                "text-halo-width": 0.1,
                "text-color": "#222222",
                "icon-color": "#ff0000"
            },
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["in", "capital", 1]]
        }, {
            "id": "83f8c3117101411a9880915321e850de",
            "maxzoom": 9.0,
            "source": "Adminflag",
            "layout": {
                "text-size": {
                    "stops": [[3, 16], [17, 24]],
                    "base": 1
                },
                "visibility": "visible",
                "text-field": "{name_zh}",
                "text-anchor": "bottom",
                "icon-size": 0.8,
                "text-offset": [0, -0.3]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#222222",
                "text-halo-width": 0.5,
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 8.0,
            "type": "symbol",
            "filter": ["all", ["in", "capital", 1]]
        }, {
            "id": "3b0a797e9a1245be8a5d7c297fb61829",
            "maxzoom": 3.5,
            "source": "Adminflag",
            "layout": {
                "text-size": 20.0,
                "visibility": "visible",
                "text-justify": "right",
                "text-field": "{name_zh}",
                "text-offset": [2, 1]
            },
            "paint": {
                "text-halo-color": "#ffffff",
                "text-color": "#ee0000",
                "text-halo-width": 2.0,
                "icon-color": "#ff0000"
            },
            "source-layer": "Adminflag",
            "minzoom": 3,
            "type": "symbol",
            "filter": ["all", ["in", "capital", 0], ["==", "type", 0]]
        },
        {
            id: '814ddfab58b34cb0b65ae49912a86cc7',
            maxzoom: 18,
            source: 'increLink',
            layout: {
                'line-join': 'round',
                'line-cap': 'butt',
            },
            paint: {
                'line-gap-width': {
                    stops: [[5, 1.8], [9, 1.8], [20, 9]],
                    base: 1.1,
                },
                'line-color': 'blue',
                'line-width': 1,
            },
            'source-layer': 'link_incre',
            minzoom: 1,
            type: 'line',
        },
        {
            id: '818ddfab58b34cb0b65a949912a86cc7',
            type: 'symbol',
            source: 'increPoi',
            interactive: true,
            'source-layer': 'poi_incre',
            minzoom: 3,
            maxzoom: 17,
            layout: {
                'icon-image': 'cat',
            },
            paint: {
                'icon-color': '#ef0909',
            },
        },]
};