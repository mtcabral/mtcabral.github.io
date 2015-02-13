jQuery("#simulation")
  .on("click", ".s-9d0e2c4c-9895-4620-b4af-179ed4d56ff5 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Bands",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Bands",
                        "value": {
                          "target": "#s-Input_1"
                        }
                      }
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
    } else if(jFirer.is(".s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Band_variable",
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "Bands",
                      "element": "#s-Bands"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "back",
                    "value": "1"
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
                    "target": "screens/0e2b78f5-7d5d-4d5b-a4ef-3f8f07c8cd7d",
                    "transition": "slideleft"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Bands_1",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Bands",
                        "value": {
                          "target": "#s-Input_2"
                        }
                      }
                    }
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Bands_1",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Bands",
                        "value": {
                          "target": "#s-Input_2"
                        }
                      }
                    }
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Bands_1",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Bands",
                        "value": {
                          "target": "#s-Input_2"
                        }
                      }
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
    } else if(jFirer.is(".s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Band_variable",
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "Bands",
                      "element": "#s-Bands_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "back",
                    "value": "1"
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
                    "target": "screens/0e2b78f5-7d5d-4d5b-a4ef-3f8f07c8cd7d",
                    "transition": "slideleft"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Band_variable",
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "Bands",
                      "element": "#s-Bands_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "back",
                    "value": "1"
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
                    "target": "screens/0e2b78f5-7d5d-4d5b-a4ef-3f8f07c8cd7d",
                    "transition": "slideleft"
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Band_variable",
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "Bands",
                      "element": "#s-Bands_1"
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "back",
                    "value": "1"
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
                    "target": "screens/0e2b78f5-7d5d-4d5b-a4ef-3f8f07c8cd7d",
                    "transition": "slideleft"
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
    jFirer.parents("tr.datarow").trigger("click");
  })
  .on("click", ".s-9d0e2c4c-9895-4620-b4af-179ed4d56ff5 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Search_icon")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimResize",
                    "parameter": {
                      "target": "#s-Panel_3",
                      "width": {
                        "type": "exprvalue",
                        "value": "320"
                      },
                      "height": {
                        "type": "exprvalue",
                        "value": "80"
                      },
                      "effect": {
                        "type": "none",
                        "easing": "swing",
                        "duration": 500
                      }
                    }
                  }
                ]
              }
            ]
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("focusin", ".s-9d0e2c4c-9895-4620-b4af-179ed4d56ff5 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_1",
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
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
    }
  });