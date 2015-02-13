jQuery("#simulation")
  .on("drag", ".s-385a93b1-8296-495e-9610-612dde4eae45 .drag", function(event, data) {
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
  .on("dragend", ".s-385a93b1-8296-495e-9610-612dde4eae45 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-385a93b1-8296-495e-9610-612dde4eae45 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });