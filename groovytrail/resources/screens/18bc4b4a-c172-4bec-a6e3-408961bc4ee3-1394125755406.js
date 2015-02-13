jQuery("#simulation")
  .on("drag", ".s-18bc4b4a-c172-4bec-a6e3-408961bc4ee3 .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Ellipse_1",
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
  .on("dragend", ".s-18bc4b4a-c172-4bec-a6e3-408961bc4ee3 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-18bc4b4a-c172-4bec-a6e3-408961bc4ee3 .dragend", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-Image_6"))),
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
  .on("dragend", ".s-18bc4b4a-c172-4bec-a6e3-408961bc4ee3 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });