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
    "sources" :
        {
            "construction" :
                {
                    "type":"vector",
                    "tiles":
                        ['http://fastmap.navinfo.com/smap_c/web/construction/tile/{z}/{x}/{y}'],
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
            "id": "construction_Layer",
            "type": "symbol",
            "interactive": true,
            "source" : "construction",
            "source-layer": "construction",
            "minzoom": 0,
            "maxzoom": 17.1,
            "layout":
                {
                    "icon-image": "constructionIcon",
                    "icon-size": 0.4,
                },
            "paint":
                {
                    "icon-color": "#ff2d2d",
                },

        }]
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
        },{
            "id": 'polygon_Limited_Layer',
            "type": 'fill',
            "source" : "platelimit",
            'source-layer': 'platelimit_polygon',
            "minzoom": 5,
            "maxzoom": 17.1,
            'layout': {},
            'paint': {
                'fill-color': '#FF0000',
                'fill-opacity': 0.2,
            }

        },{
            "id": 'line_Limited_Layer',
            "type": 'line',
            "source" : "platelimit",
            'source-layer': 'platelimit_line',
            "minzoom": 5,
            "maxzoom": 17.1,
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#FF0000",
                "line-width": {
                    "stops": [[6, 1.5], [20, 10]],
                    "base": 1.2
                },
            },

        },

    ]
};

var scenery ={
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
            },
            "toll":{
                "tiles": ["http://fs.navinfo.com/smapapi/tollgate/{z}/{x}/{y}"],
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
        },{
            "id": 'polygon_Limited_Layer',
            "type": 'fill',
            "source" : "platelimit",
            'source-layer': 'platelimit_polygon',
            "minzoom": 5,
            "maxzoom": 17.1,
            'layout': {},
            'paint': {
                'fill-color': '#FF0000',
                'fill-opacity': 0.2,
            }

        },{
            "id": 'line_Limited_Layer',
            "type": 'line',
            "source" : "platelimit",
            'source-layer': 'platelimit_line',
            "minzoom": 5,
            "maxzoom": 17.1,
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#FF0000",
                "line-width": {
                    "stops": [[6, 1.5], [20, 10]],
                    "base": 1.2
                },
            },

        },
        {
            "id": "scenery_test",
            "source" : "toll",
            'source-layer': 'toll',
            "type": "symbol",
            "minzoom": 0,
            "maxzoom": 17.1,
            "layout":
                {
                    "icon-image": "Tiananmen",
                    "icon-size":1

                },
            "paint":
                {
                    'icon-color': '#ff2d2d',

                },

        },
    ]
};