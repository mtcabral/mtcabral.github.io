jQuery("#simulation")
  .on("click", ".t-6cae5a75-4816-4a82-9d78-b99010614eb0 .click", function(event, data) {
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
    } else if(jFirer.is("#t-Image_3")) {
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
    } else if(jFirer.is("#t-Playlists")) {
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
    } else if(jFirer.is("#t-Albums")) {
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
    } else if(jFirer.is("#t-Bands")) {
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
    } else if(jFirer.is("#t-TopAlbums")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Title",
                    "value": "Favorites"
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
  .on("pageload", ".t-6cae5a75-4816-4a82-9d78-b99010614eb0 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#t-Label_1",
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