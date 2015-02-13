jQuery("#simulation")
  .on("drag", ".s-67eb6f76-b736-4cab-856c-f34956fd8fd5 .drag", function(event, data) {
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
  .on("dragend", ".s-67eb6f76-b736-4cab-856c-f34956fd8fd5 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-67eb6f76-b736-4cab-856c-f34956fd8fd5 .dragend", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-checkpoint_3"))),
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a56117ee-436a-4c6b-9aed-965128ff49d6"
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
  .on("dragend", ".s-67eb6f76-b736-4cab-856c-f34956fd8fd5 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });