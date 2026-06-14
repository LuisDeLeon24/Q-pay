import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowButton from '../../components/ArrowButton'
import Toast from '../../components/Toast'
import { useMockApp } from '../../context/MockAppContext'
import './GeneratePage.css'

const MONTHS = [1, 2, 3, 4, 5, 6, 9, 12, 18, 24]

export default function GeneratePage() {
  const navigate = useNavigate()
  const { setLastGenerated } = useMockApp()
  const [amount, setAmount] = useState('')
  const [months, setMonths] = useState(6)
  const [interest, setInterest] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  const handleSubmit = () => {
    const interestNum = parseFloat(interest) || 0
    if (interestNum > 40) {
      setToastVisible(true)
      setTimeout(() => setToastVisible(false), 3000)
      return
    }

    const amountNum = parseFloat(amount)
    if (!amountNum || amountNum <= 0) return

    const installments = months
    const installmentAmount = Math.ceil((amountNum * (1 + interestNum / 100)) / installments)

    setLastGenerated({
      amount: amountNum,
      months,
      interest: interestNum,
      installments,
      installmentAmount,
      code: Math.random().toString(36).substring(2, 14).toUpperCase(),
    })

    navigate('/app/detail?mode=lender')
  }

  return (
    <div className="generate-page page-narrow">
      <h1 className="generate-title animate-fade-up">Generar</h1>

      <div className="generate-fields">
        <div className="generate-field animate-fade-up animate-fade-up-delay-1">
          <label>Quiero Prestar</label>
          <div className="generate-input-row">
            <span className="generate-prefix">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder=""
            />
          </div>
          <div className="generate-underline" />
        </div>

        <div className="generate-field animate-fade-up animate-fade-up-delay-2">
          <label>A un plazo de</label>
          <div className="generate-select-row">
            <select
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="generate-select"
            >
              {MONTHS.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <span className="generate-unit">Meses</span>
          </div>
        </div>

        <div className="generate-field animate-fade-up animate-fade-up-delay-3">
          <label>Con interes de</label>
          <div className="generate-input-row generate-input-row-reverse">
            <span className="generate-suffix">%</span>
            <input
              type="number"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              max={40}
            />
          </div>
          <div className="generate-underline" />
        </div>
      </div>

      <div className="generate-actions animate-fade-up animate-fade-up-delay-4">
        <ArrowButton onClick={handleSubmit} />
      </div>

      <Toast message="Ups, no puedes poner mas de 40%" visible={toastVisible} />
    </div>
  )
}
