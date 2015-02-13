jQuery("#simulation")
  .on("click", ".s-b107c292-d618-44ed-92b9-c0e4c8f26e0b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Background")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Login_Panel",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 316,
                    "left": 35,
                    "effect": {
                      "type": "none",
                      "easing": "easeOutCubic",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d0e2c4c-9895-4620-b4af-179ed4d56ff5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d0e2c4c-9895-4620-b4af-179ed4d56ff5"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d0e2c4c-9895-4620-b4af-179ed4d56ff5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b107c292-d618-44ed-92b9-c0e4c8f26e0b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Save_Button")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_11"
                },{
                  "target": "#s-Input_12"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Login",
                    "transition": "slideandfade"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Save_Button",
                    "effect": {
                      "type": "bounce",
                      "duration": 100
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-passtext1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_11"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-passtext2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_12"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Logo")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Login_Panel",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 316,
                    "left": 35,
                    "effect": {
                      "type": "none",
                      "easing": "easeOutCubic",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-b107c292-d618-44ed-92b9-c0e4c8f26e0b .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes": {
                        "opacity": "0.26"
                      }
                    }
                  },{
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=26)",
                        "filter": "alpha(opacity=26)"
                      }
                    }
                  },{
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=26)",
                        "filter": "alpha(opacity=26)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Login_Panel",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 150,
                    "left": 35,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_11",
                    "value": ""
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-passtext1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes": {
                        "opacity": "0.26"
                      }
                    }
                  },{
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=26)",
                        "filter": "alpha(opacity=26)"
                      }
                    }
                  },{
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=26)",
                        "filter": "alpha(opacity=26)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Login_Panel",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 150,
                    "left": 35,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_10",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes": {
                        "opacity": "0.26"
                      }
                    }
                  },{
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=26)",
                        "filter": "alpha(opacity=26)"
                      }
                    }
                  },{
                    "#s-b107c292-d618-44ed-92b9-c0e4c8f26e0b #s-Logo": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=26)",
                        "filter": "alpha(opacity=26)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Login_Panel",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 150,
                    "left": 35,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_12",
                    "value": ""
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-passtext2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-b107c292-d618-44ed-92b9-c0e4c8f26e0b .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Password",
                    "value": {
                      "target": "#s-Input_11"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Username",
                    "value": {
                      "target": "#s-Input_10"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });