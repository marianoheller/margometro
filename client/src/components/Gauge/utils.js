import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import themeAnimated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(themeAnimated);

export const capValue = (min, max) => value => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export const createChart = domName => {
  // create chart
  let chart = am4core.create(domName, am4charts.GaugeChart);
  chart.innerRadius = am4core.percent(82);
  chart.responsive.enabled = true;

  /**
   * Normal axis
   */

  let axis = chart.xAxes.push(new am4charts.ValueAxis());
  axis.min = 0;
  axis.max = 100;
  axis.strictMinMax = true;
  axis.renderer.radius = am4core.percent(80);
  axis.renderer.inside = true;
  axis.renderer.line.strokeOpacity = 1;
  axis.renderer.ticks.template.strokeOpacity = 1;
  axis.renderer.ticks.template.length = 10;
  axis.renderer.grid.template.disabled = true;
  axis.renderer.labels.template.fontSize = "0.5rem";
  axis.renderer.labels.template.radius = 20;
  axis.renderer.labels.template.adapter.add("text", text => `${text}%`);

  /**
   * Axis for ranges
   */

  let colorSet = new am4core.ColorSet();

  let axis2 = chart.xAxes.push(new am4charts.ValueAxis());
  axis2.min = 0;
  axis2.max = 100;
  axis2.renderer.innerRadius = 10;
  axis2.strictMinMax = true;
  axis2.renderer.labels.template.disabled = true;
  axis2.renderer.ticks.template.disabled = true;
  axis2.renderer.grid.template.disabled = true;

  let range0 = axis2.axisRanges.create();
  range0.value = 0;
  range0.endValue = 50;
  range0.axisFill.fillOpacity = 1;
  range0.axisFill.fill = colorSet.getIndex(0);

  let range1 = axis2.axisRanges.create();
  range1.value = 50;
  range1.endValue = 100;
  range1.axisFill.fillOpacity = 1;
  range1.axisFill.fill = colorSet.getIndex(2);

  /**
   * Label
   */
  let label = chart.radarContainer.createChild(am4core.Label);
  label.isMeasured = false;
  label.fontSize = 20;
  label.x = am4core.percent(50);
  label.y = am4core.percent(100);
  label.horizontalCenter = "middle";
  label.verticalCenter = "bottom";
  label.text = "50%";

  /**
   * Hand
   */
  let hand = chart.hands.push(new am4charts.ClockHand());
  hand.axis = axis2;
  hand.innerRadius = am4core.percent(20);
  hand.startWidth = 10;
  hand.pin.disabled = true;
  hand.value = 50;

  hand.events.on("propertychanged", ev => {
    range0.endValue = ev.target.value;
    range1.value = ev.target.value;
    axis2.invalidate();
  });

  return {
    label,
    hand
  };
};
