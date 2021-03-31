export type RootState = {
	days: Day[]
}

type SleepQuality =
	'Restful' |
	'Fitful' |
	'Unknown'

type MoodValue =
	-1 |
	-0.5 |
	0 |
	0.5 |
	1

export type Day = {
	sleep: number
	sleepQuality: SleepQuality

	morning: number
	morningCheckin: MoodValue

	afternoon: number
	afternoonCheckin: MoodValue

	evening: number
	eveningCheckin: MoodValue
}