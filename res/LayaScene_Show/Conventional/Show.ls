{
	"version":"LAYASCENE3D:02",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"Show",
			"ambientColor":[
				0.9056604,
				0.9056604,
				0.9056604
			],
			"reflectionDecodingFormat":1,
			"reflection":"Assets/Scenes/ShowGIReflection.ltcb.ls",
			"reflectionIntensity":1,
			"ambientMode":0,
			"ambientSphericalHarmonicsIntensity":1,
			"lightmaps":[],
			"enableFog":false,
			"fogStart":0,
			"fogRange":300,
			"fogColor":[
				0.5,
				0.5,
				0.5
			]
		},
		"child":[
			{
				"type":"Camera",
				"instanceID":0,
				"props":{
					"name":"Main Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-16.04,
						0.8,
						5.084359
					],
					"rotation":[
						0.0368848,
						0.7084632,
						0.03712894,
						-0.7038047
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":3,
					"orthographic":true,
					"orthographicVerticalSize":22.74,
					"fieldOfView":60,
					"enableHDR":true,
					"nearPlane":0.1,
					"farPlane":500,
					"viewport":[
						0,
						0,
						1,
						1
					],
					"clearColor":[
						0.3033108,
						0.5724787,
						0.9056604,
						0
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"DirectionLight",
				"instanceID":1,
				"props":{
					"name":"Directional Light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-11.79818,
						6.705789,
						5.943612
					],
					"rotation":[
						-0.2901966,
						-0.6221639,
						-0.2669486,
						0.6763406
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1,
					"lightmapBakedType":0,
					"color":[
						1,
						0.9568627,
						0.8392157
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"Sprite3D",
				"instanceID":2,
				"props":{
					"name":"InstrumentPoint",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0,
						5
					],
					"rotation":[
						0,
						0.3311732,
						0,
						-0.94357
					],
					"scale":[
						1.5,
						1.5,
						1.5
					]
				},
				"components":[
					{
						"type":"Animator",
						"layers":[
							{
								"name":"Base Layer",
								"weight":0,
								"blendingMode":0,
								"states":[
									{
										"name":"skinshow",
										"clipPath":"Assets/Arts/Animation/skinshow-skinshow.lani"
									}
								]
							}
						],
						"cullingMode":0,
						"playOnWake":true
					}
				],
				"child":[]
			},
			{
				"type":"Sprite3D",
				"instanceID":3,
				"props":{
					"name":"effect_show",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						2.995412,
						0,
						5.002617
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					]
				},
				"components":[],
				"child":[
					{
						"type":"ShuriKenParticle3D",
						"instanceID":4,
						"props":{
							"name":"Particle System",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale":[
								1,
								1,
								1
							],
							"main":{
								"randomSeed":2.751809E+09,
								"bases":{
									"isPerformanceMode":true,
									"startLifetimeConstant":1,
									"startLifetimeConstantMax":1,
									"startSpeedConstant":0,
									"startSpeedConstantMax":0,
									"startSizeConstant":12,
									"startSizeConstantMax":12,
									"startColorType":2,
									"maxParticles":1000
								},
								"vector3s":{
									"startSizeConstantSeparate":[
										12,
										1,
										1
									],
									"startSizeConstantMaxSeparate":[
										12,
										1,
										1
									]
								},
								"vector4s":{
									"startColorConstant":[
										1,
										0.9238702,
										0,
										0.4705882
									],
									"startColorConstantMin":[
										1,
										0.6831585,
										0,
										0.1960784
									],
									"startColorConstantMax":[
										1,
										0.9238702,
										0,
										0.4705882
									]
								}
							},
							"emission":{
								"bases":{
									"enable":true,
									"emissionRate":5
								}
							},
							"shape":{
								"shapeType":2,
								"bases":{
									"enable":true,
									"radius":0.0001,
									"angle":0,
									"emitType":0
								}
							},
							"colorOverLifetime":{
								"bases":{
									"enable":true
								},
								"color":{
									"type":1,
									"gradient":{
										"alphas":[
											{
												"key":0,
												"value":0
											},
											{
												"key":0.4941176,
												"value":1
											},
											{
												"key":1,
												"value":0
											}
										]
									},
									"gradientMax":{
										"alphas":[
											{
												"key":0,
												"value":0
											},
											{
												"key":0.4941176,
												"value":1
											},
											{
												"key":1,
												"value":0
											}
										]
									}
								}
							},
							"rotationOverLifetime":{
								"bases":{
									"enable":true
								},
								"angularVelocity":{
									"type":2,
									"constant":1.047198,
									"constantMin":-1.047198,
									"constantMax":1.047198,
									"constantSeparate":[
										0,
										0,
										-1.047198
									],
									"constantMinSeparate":[
										0,
										0,
										-1.047198
									],
									"constantMaxSeparate":[
										0,
										0,
										1.047198
									]
								}
							},
							"renderer":{
								"resources":{
									"material":"Assets/Arts/Effects/Materials/glow_02.lmat"
								}
							}
						},
						"components":[],
						"child":[]
					},
					{
						"type":"ShuriKenParticle3D",
						"instanceID":5,
						"props":{
							"name":"Particle System (1)",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale":[
								1,
								1,
								1
							],
							"main":{
								"randomSeed":3.719061E+09,
								"bases":{
									"isPerformanceMode":true,
									"startLifetimeConstant":1,
									"startLifetimeConstantMax":1,
									"startSpeedConstant":0,
									"startSpeedConstantMax":0,
									"startSizeConstant":10,
									"startSizeConstantMax":10,
									"startRotationType":2,
									"startRotationConstant":6.283185,
									"startRotationConstantMax":6.283185,
									"maxParticles":1000
								},
								"vector3s":{
									"startSizeConstantSeparate":[
										10,
										1,
										1
									],
									"startSizeConstantMaxSeparate":[
										10,
										1,
										1
									],
									"startRotationConstantSeparate":[
										0,
										0,
										-6.283185
									],
									"startRotationConstantMaxSeparate":[
										0,
										0,
										-6.283185
									]
								},
								"vector4s":{
									"startColorConstant":[
										1,
										0.903612,
										0,
										0.1764706
									],
									"startColorConstantMax":[
										1,
										0.903612,
										0,
										0.1764706
									]
								}
							},
							"emission":{
								"bases":{
									"enable":true,
									"emissionRate":2
								}
							},
							"shape":{
								"shapeType":2,
								"bases":{
									"enable":true,
									"radius":0.0001,
									"angle":0,
									"emitType":0
								}
							},
							"colorOverLifetime":{
								"bases":{
									"enable":true
								},
								"color":{
									"type":1,
									"gradient":{
										"alphas":[
											{
												"key":0,
												"value":1
											},
											{
												"key":0.5264668,
												"value":0.9852941
											},
											{
												"key":1,
												"value":0
											}
										]
									},
									"gradientMax":{
										"alphas":[
											{
												"key":0,
												"value":1
											},
											{
												"key":0.5264668,
												"value":0.9852941
											},
											{
												"key":1,
												"value":0
											}
										]
									}
								}
							},
							"sizeOverLifetime":{
								"bases":{
									"enable":true
								},
								"size":{
									"type":0,
									"gradient":{
										"sizes":[
											{
												"key":0,
												"value":0.2157745
											},
											{
												"key":1,
												"value":1
											}
										]
									},
									"gradientX":{
										"sizes":[
											{
												"key":0,
												"value":0.2157745
											},
											{
												"key":1,
												"value":1
											}
										]
									},
									"gradientMax":{
										"sizes":[
											{
												"key":0,
												"value":0.2157745
											},
											{
												"key":1,
												"value":1
											}
										]
									},
									"gradientXMax":{
										"sizes":[
											{
												"key":0,
												"value":0.2157745
											},
											{
												"key":1,
												"value":1
											}
										]
									}
								}
							},
							"renderer":{
								"resources":{
									"material":"Assets/Arts/Effects/Materials/blast_ring_gold.lmat"
								}
							}
						},
						"components":[],
						"child":[]
					},
					{
						"type":"ShuriKenParticle3D",
						"instanceID":6,
						"props":{
							"name":"Particle System (2)",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								-1.1,
								0,
								0
							],
							"rotation":[
								0,
								0.7071068,
								0,
								-0.7071068
							],
							"scale":[
								1,
								1,
								1
							],
							"main":{
								"randomSeed":3.279955E+09,
								"bases":{
									"isPerformanceMode":true,
									"duration":1,
									"startLifetimeType":2,
									"startLifetimeConstant":1,
									"startLifetimeConstantMin":1.5,
									"startLifetimeConstantMax":1,
									"startSpeedType":2,
									"startSpeedConstantMin":2,
									"startSizeType":2,
									"startSizeConstantMin":2,
									"startRotationType":2,
									"startRotationConstant":6.283185,
									"startRotationConstantMax":6.283185,
									"maxParticles":1000
								},
								"vector3s":{
									"startSizeConstantMinSeparate":[
										2,
										1,
										1
									],
									"startRotationConstantSeparate":[
										0,
										0,
										-6.283185
									],
									"startRotationConstantMaxSeparate":[
										0,
										0,
										-6.283185
									]
								}
							},
							"emission":{
								"bases":{
									"enable":true,
									"emissionRate":5
								},
								"bursts":[
									{
										"time":0,
										"min":0,
										"max":0
									}
								]
							},
							"shape":{
								"shapeType":2,
								"bases":{
									"enable":true,
									"angle":1.396263,
									"emitType":0
								}
							},
							"colorOverLifetime":{
								"bases":{
									"enable":true
								},
								"color":{
									"type":1,
									"gradient":{
										"alphas":[
											{
												"key":0,
												"value":1
											},
											{
												"key":0.5264668,
												"value":0.9852941
											},
											{
												"key":1,
												"value":0
											}
										]
									},
									"gradientMax":{
										"alphas":[
											{
												"key":0,
												"value":1
											},
											{
												"key":0.5264668,
												"value":0.9852941
											},
											{
												"key":1,
												"value":0
											}
										]
									}
								}
							},
							"sizeOverLifetime":{
								"bases":{
									"enable":true
								},
								"size":{
									"type":0,
									"gradient":{
										"sizes":[
											{
												"key":0,
												"value":1
											},
											{
												"key":1,
												"value":0.5145264
											}
										]
									},
									"gradientX":{
										"sizes":[
											{
												"key":0,
												"value":1
											},
											{
												"key":1,
												"value":0.5145264
											}
										]
									},
									"gradientMax":{
										"sizes":[
											{
												"key":0,
												"value":1
											},
											{
												"key":1,
												"value":0.5145264
											}
										]
									},
									"gradientXMax":{
										"sizes":[
											{
												"key":0,
												"value":1
											},
											{
												"key":1,
												"value":0.5145264
											}
										]
									}
								}
							},
							"rotationOverLifetime":{
								"bases":{
									"enable":true
								},
								"angularVelocity":{
									"type":2,
									"constant":3.490659,
									"constantMin":-2.617994,
									"constantMax":3.490659,
									"constantSeparate":[
										0,
										0,
										-3.490659
									],
									"constantMinSeparate":[
										0,
										0,
										-2.617994
									],
									"constantMaxSeparate":[
										0,
										0,
										3.490659
									]
								}
							},
							"renderer":{
								"resources":{
									"material":"Assets/Arts/Effects/Materials/effect_star.lmat"
								}
							}
						},
						"components":[],
						"child":[]
					}
				]
			}
		]
	}
}