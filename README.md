# User Story Throughput/Velocity Chart

This app plots the velocity or throughput of User Stories based on their AcceptedDate.  Metrics can be calculated using story counts or story points.  The x-axis granularity is configurable (months/quarters/years).  This app includes the standard query box and filtering component to enable further slicing and dicing of data.

## Installation and Settings
The app is installed as a Custom HTML App ([see help documentation](https://help.rallydev.com/custom-html))
Once the app is installed, use the gear menu on the app panel and select "Edit App Settings".

#### Aggregate By
Available values include Count or Story Points (Plan Estimate).

#### Bucket By
Pick the timeframe for which to generate values along the x-axis.  User Stories will be aggregated into these buckets based on the value of their AcceptedDate field.  Available options include month, quarter and year.

#### Query
In addition to the advanced filtering component in the app, you can write your own complex filter queries. [Extensive documentation](https://help.rallydev.com/grid-queries?basehost=https://rally1.rallydev.com) is available. This might be useful if you want to always limit the chart to certain complex criteria.
