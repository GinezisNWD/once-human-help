import { ISimulationReport } from '../../models/IStats'

interface AdvancedSimulationReportProps { reports: ISimulationReport[] }

export function AdvancedSimulationReport({ reports }: AdvancedSimulationReportProps) {

  return (
    <div>
      {reports.map((report, index) => {
        return (
          <div key={index}>
            <div>
              Total: {report.totalDamage} Weapon Damage: {report.weaponDamage} Elemental Damage: {report.elementalDamage}
            </div>

            <div style={{ display: 'flex' }}>
              {report.detailedDpsCheck.map((elem, index) => (
                <div key={index}>
                  <div>{index + 1}</div>
                  <div>{elem.damage}</div>
                  <div style={{ color: 'blue' }}> {elem.keywordDamage || ''}</div>


                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
