jQuery("#simulation")
  .on("drag", ".s-151bd419-5efc-4b88-8d0a-d06ddceec1f1 .drag", function(event, data) {
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
  .on("dragend", ".s-151bd419-5efc-4b88-8d0a-d06ddceec1f1 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-151bd419-5efc-4b88-8d0a-d06ddceec1f1 .dragend", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-dianne")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (jimUtil.intersect(jQuery.Event(event), jEvent.getEventTarget("#s-checkpoint_1"))),
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b676d1da-8382-4a7a-beaf-999903cd6987"
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
  .on("dragend", ".s-151bd419-5efc-4b88-8d0a-d06ddceec1f1 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });