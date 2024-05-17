import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  const {vaccinationCoverageDetails} = props

  return (
    <div>
      <h1>Vaccination Coverage</h1>
      <BarChart
        data={vaccinationCoverageDetails}
        width={900}
        height={400}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineData"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
            fontSize: 15,
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0.5,
            fontSize: 15,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
            paddingTop:20,
            textAlign: 'center',
          }}
        />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" radius={[10,10,0,0]} barSize="20%" />
        <Bar dataKey="dose2" name="Dose 2" fill="#f54394" radius={[5,5,0,0]} barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
