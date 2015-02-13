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
  .on("dragend", ".s-67eb6f76-b736-4cab-856c-f34956fd8fd5 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });