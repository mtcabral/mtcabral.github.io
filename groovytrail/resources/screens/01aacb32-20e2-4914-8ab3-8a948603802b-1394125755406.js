jQuery("#simulation")
  .on("drag", ".s-01aacb32-20e2-4914-8ab3-8a948603802b .drag", function(event, data) {
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
  .on("dragend", ".s-01aacb32-20e2-4914-8ab3-8a948603802b .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-01aacb32-20e2-4914-8ab3-8a948603802b .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });