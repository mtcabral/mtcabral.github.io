jQuery("#simulation")
  .on("drag", ".s-e61f7ac7-386e-40dd-a483-4e2888182eb5 .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-dianne")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-dianne",
                    "type": "movewithcursor",
                    "containment": false
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
  .on("dragend", ".s-e61f7ac7-386e-40dd-a483-4e2888182eb5 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-e61f7ac7-386e-40dd-a483-4e2888182eb5 .dragend", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-dianne")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-start"))),
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0e2b78f5-7d5d-4d5b-a4ef-3f8f07c8cd7d"
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
  .on("dragend", ".s-e61f7ac7-386e-40dd-a483-4e2888182eb5 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });