<template>
  <div class="full-calendar">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
import { defineComponent, watch } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

let eventGuid = 0;
export function createEventId() {
  return String(eventGuid++);
}

export default defineComponent({
  components: {
    FullCalendar,
  },
  props: {
    externalEvents: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      calendarOptions: {
        locale: "vi",
        buttonText: {
          today: "Hôm nay",
          month: "Tháng",
          week: "Tuần",
          day: "Ngày",
        },
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        initialView: "dayGridMonth",
        events: this.externalEvents,
        editable: true,
        selectable: true,
        dayMaxEvents: true,
        weekends: true,
        eventClick: this.handleEventClick,
      },
    };
  },
  watch: {
    externalEvents: {
      handler(newEvents) {
        this.calendarOptions.events = newEvents;
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleEventClick(clickInfo) {
      window.location.href = clickInfo.event.url;
    },
  },
});
</script>
