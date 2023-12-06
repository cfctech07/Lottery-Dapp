import style from '../styles/PotCard.module.css'
import truncateEthAddress from 'truncate-eth-address'
import { useAppContext } from '../context/context'
import Image from 'next/image';

const PotCard = () => {
  const { lotteryId, lastWinner, lotteryPot, enterLottery, pickWinner } =
    useAppContext()

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperimage}>
        <div className={style.title}>
          Lottery{' '}
          <span className={style.textAccent}>#{lotteryId ? lotteryId : '1'}</span>
        </div>
        <div className={style.pot}>
          Pot 🍯: <span className={style.goldAccent}>{lotteryPot} ETH</span>
        </div>
        <div className={style.recentWinnerTitle}>🏆Last Winners🏆</div>
        {!lastWinner.length ? (
          <div className={style.winner}>No winner yet</div>
        ) : (
          lastWinner.length > 0 && (
            <div className={style.winner}>
              {truncateEthAddress(lastWinner[lastWinner.length - 1])}
            </div>
          )
        )}
        <div className={style.buttonwrapper}>
          <div className={style.btn} onClick={enterLottery}>
            Enter
          </div>
          <div className={style.btn2} onClick={pickWinner}>
            Pick Winner!
          </div>
        </div>
      </div>
    </div>
  )
}
export default PotCard
