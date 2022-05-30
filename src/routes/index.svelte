<script lang='ts'>
  // import pkg from '@carbon/charts-svelte'
  // const { LineChart } = pkg
  import LineChart from '@carbon/charts-svelte/src/LineChart.svelte'
  import type { LineChartOptions } from '@carbon/charts/interfaces'

  import '@carbon/charts/styles.css'

  enum Alignments {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right'
  }

  enum ScaleTypes {
    LINEAR = 'linear',
    TIME = 'time'
  }

  const data = [
    {
      group: 'Attendees',
      attendees: 314,
      month_start: '2020-12-01T05:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 324,
      month_start: '2021-01-01T05:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 258,
      month_start: '2021-02-01T05:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 281,
      month_start: '2021-03-01T05:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 245,
      month_start: '2021-04-01T04:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 290,
      month_start: '2021-05-01T04:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 341,
      month_start: '2021-06-01T04:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 360,
      month_start: '2021-07-01T04:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 339,
      month_start: '2021-08-01T04:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 293,
      month_start: '2021-09-01T04:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 362,
      month_start: '2021-10-01T04:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 338,
      month_start: '2021-11-01T04:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 301,
      month_start: '2021-12-01T05:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 308,
      month_start: '2022-01-01T05:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 287,
      month_start: '2022-02-01T05:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 336,
      month_start: '2022-03-01T05:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 361,
      month_start: '2022-04-01T04:00:00+00:00'
    },
    {
      group: 'Attendees',
      attendees: 337,
      month_start: '2022-05-01T04:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 4170,
      month_start: '2020-12-01T05:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 4550,
      month_start: '2021-01-01T05:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 3345,
      month_start: '2021-02-01T05:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 5565,
      month_start: '2021-03-01T05:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 4690,
      month_start: '2021-04-01T04:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 4900,
      month_start: '2021-05-01T04:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 4355,
      month_start: '2021-06-01T04:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 5390,
      month_start: '2021-07-01T04:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 4790,
      month_start: '2021-08-01T04:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 2695,
      month_start: '2021-09-01T04:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 2710,
      month_start: '2021-10-01T04:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 4915,
      month_start: '2021-11-01T04:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 6330,
      month_start: '2021-12-01T05:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 5720,
      month_start: '2022-01-01T05:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 7185,
      month_start: '2022-02-01T05:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 8910,
      month_start: '2022-03-01T05:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 11845,
      month_start: '2022-04-01T04:00:00+00:00'
    },
    {
      group: 'Revenue',
      revenue: 8145,
      month_start: '2022-05-01T04:00:00+00:00'
    }
  ]

  const options = <LineChartOptions> {
    tooltip: {
      valueFormatter: (value: any, category: string) => {
        if (category == 'Revenue')
          return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', notation: 'compact', maximumSignificantDigits: 3, maximumFractionDigits: 0 })
        if (category == 'Attendees')
          return value.toLocaleString('en-US', { notation: 'compact', maximumSignificantDigits: 3, maximumFractionDigits: 0 })
        if (category == 'Date') 
          return value.toLocaleDateString('en-US')
      }
    },
    axes: {
      bottom: {
        mapsTo: 'month_start',
        title: 'Date',
        scaleType: ScaleTypes.TIME // 'time'
      },
      left: {
        mapsTo: 'revenue',
        title: 'Revenue',
        scaleType: ScaleTypes.LINEAR, //'linear',
        main: true,
        correspondingDatasets: [
          'Revenue'
        ]
      },
      right: {
        mapsTo: 'attendees',
        title: 'Attendees',
        scaleType: ScaleTypes.LINEAR, // 'linear',
        correspondingDatasets: [
          'Attendees'
        ]
      }
    },
    curve: 'curveMonotoneX',
    height: '500px',
    toolbar: {
      enabled: false
    }
  }
</script>

<h1>LineChart Example</h1>
<LineChart {data} {options} />
