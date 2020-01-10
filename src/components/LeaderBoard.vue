<template>
  <Card>
    <div class="col-xs-12">
      <h3>Your statistics</h3>
      <div class="row">
        <div class="col-6 total">
          <div class="row">{{ translationStats.total }}</div>
          <div class="row">Total</div>
        </div>
        <div class="col-6 monthtotal">
          <div class="row">{{ translationStats.monthTotal }}</div>
          <div class="row">This month</div>
        </div>
      </div>
      <div class="row">
        <svg height="50" viewBox="0 0 1000 50">
          <g>
            <rect
              v-for="data in translationGraphData"
              :key="data.x"
              :x="data.x"
              :y="data.y"
              :width="data.width"
              :height="data.height"
              style="fill:#a2a9b1"
            />
          </g>
        </svg>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "./mediawiki.ui/Card";
import { mapState } from "vuex";

export default {
  name: "LeaderBoard",
  data: () => ({
    title: "Need help translating?"
  }),
  components: {
    Card
  },
  computed: {
    ...mapState({
      translationStats: state => state.translator.translationStats
    }),
    translationGraphData: function() {
      const graphData = [];
      if (!this.translationStats.publishTrend) {
        return [];
      }
      let monthKeys = Object.keys(this.translationStats.publishTrend).sort();
      const height = 50;
      // Spacing between bars in bar chart
      const spacing = 4;
      const barWidth = 6;
      let max = 0;
      monthKeys.forEach(month => {
        max = Math.max(max, this.translationStats.publishTrend[month].delta);
      });

      let offsetX = spacing;
      // One height unit relative to maximum number of contributions
      const segment = (height - spacing) / max;

      monthKeys.forEach(month => {
        // Last bar in chart is displayed using progressive color (Accent50) from WikimediaUI color palette
        graphData.push({
          x: offsetX,
          y: height - this.translationStats.publishTrend[month].delta * segment,
          width: barWidth,
          height: this.translationStats.publishTrend[month].delta * segment
        });
        offsetX += barWidth + spacing;
      });
      return graphData;
    }
  },
  created: function() {
    this.$store.dispatch("translator/init");
  }
};
</script>
