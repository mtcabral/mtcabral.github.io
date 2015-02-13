jQuery("#simulation")
  .on("click", ".t-d6e3dc51-3551-4ae1-9940-ccc6e3c58314 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Shadow")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-Shadow",
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#t-Nav_lateral",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": -240,
                    "effect": {
                      "type": "none",
                      "easing": "easeOutQuad",
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
    } else if(jFirer.is("#t-Menu_icon")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-Shadow",
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#t-Nav_lateral",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": 0,
                    "effect": {
                      "type": "none",
                      "easing": "easeOutQuad",
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
    } else if(jFirer.is("#t-Saved")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Title",
                    "value": "Playlists"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-Shadow",
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#t-Nav_lateral",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": -240,
                    "effect": {
                      "type": "none",
                      "easing": "easeOutQuad",
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
    } else if(jFirer.is("#t-latest")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Title",
                    "value": "Albums"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-Shadow",
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#t-Nav_lateral",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": -240,
                    "effect": {
                      "type": "none",
                      "easing": "easeOutQuad",
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
    } else if(jFirer.is("#t-Profile")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Title",
                    "value": "Bands"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-Shadow",
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#t-Nav_lateral",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": -240,
                    "effect": {
                      "type": "none",
                      "easing": "easeOutQuad",
                      "duration": 500
                    }
                  }
                },
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
    } else if(jFirer.is("#t-Home")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Title",
                    "value": "Top Albums"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-Shadow",
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#t-Nav_lateral",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": -240,
                    "effect": {
                      "type": "none",
                      "easing": "easeOutQuad",
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
    } else if(jFirer.is("#t-details")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Title",
                    "value": "Top Albums"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-Shadow",
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#t-Nav_lateral",
                    "type": "movetoposition",
                    "containment": false,
                    "top": 0,
                    "left": -240,
                    "effect": {
                      "type": "none",
                      "easing": "easeOutQuad",
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
  .on("pageload", ".t-d6e3dc51-3551-4ae1-9940-ccc6e3c58314 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Page_title")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#t-Page_title",
                    "value": {
                      "datatype": "variable",
                      "element": "Title"
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