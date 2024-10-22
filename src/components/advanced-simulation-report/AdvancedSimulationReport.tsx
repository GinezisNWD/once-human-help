import classes from './AdvancedSimulationReport.module.css'
import { ISimulationReport } from '../../models/IStats'

interface AdvancedSimulationReportProps { reports: ISimulationReport[] }

export function AdvancedSimulationReport({ reports }: AdvancedSimulationReportProps) {

  return (
    <div className='container'>

      <div className={classes.reports}>

        {reports.map((report, index) => {
          return (
            <div className={classes.reports__report} key={index}>
              <div className={classes.reports__basic}>
                <div>

                  Total: {report.totalDamage}
                </div>
                <div>

                  Weapon Damage: {report.weaponDamage}
                </div>
                <div>

                  Elemental Damage: {report.elementalDamage}
                </div>
              </div>



              <div className={classes.reports__row}>
                {report.detailedDpsCheck.map((elem, index) => (

                  <div className={classes.reports__shot} key={index}>

                    <p className={classes.reports__shotNumber}>{index + 1}</p>

                    {elem.additionalArray && elem.additionalArray.length > 0 ?
                      <div>
                        {elem.additionalArray.map((elem, index) => (
                          <p className={[
                            classes.reports__damage,
                            elem.isWeakspot ? classes.reports__damage_weakspot : '',
                            elem.isCrit ? classes.reports__damage_crit : '',
                          ].join(' ')}
                            key={index}
                          >
                            {elem.damage}
                          </p>
                        ))}

                      </div>
                      :
                      <p className={[
                        classes.reports__damage,
                        elem.isWeakspot ? classes.reports__damage_weakspot : '',
                        elem.isCrit ? classes.reports__damage_crit : '',
                      ].join(' ')}>{elem.damage}</p>}



                    <p className={[
                      classes.reports__damage,
                      classes.reports__damage_elemental,
                      elem.isKeywordWeakspot ? classes.reports__damage_weakspot : '',
                      elem.isKeywordCrit ? classes.reports__damage_crit : '',
                    ].join(' ')}> {elem.keywordDamage || ''}</p>


                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
