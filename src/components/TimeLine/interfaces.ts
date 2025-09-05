export type EventsData = {
  id: string
  date: number
  description: string
}

export type TimeLineDataProps = {
  title: string
  events: Array<EventsData>
}

export type TimeLineProps = {
  title: string
  data: Array<TimeLineDataProps>
}
