import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

type RecordRow = { gender?: string, net_revenue?: string, year_month?: string }

export default function GenderMonthlySalesChart() {
  const [chartData, setChartData] = useState<any>(null)

  useEffect(() => {
    fetch('/data/cleaned_output.json')
      .then(r => r.json())
      .then((data: RecordRow[]) => {
        const monthsSet = new Set<string>()
        data.forEach(r => { if (r.year_month) monthsSet.add(r.year_month) })
        const months = Array.from(monthsSet).sort()
        const defaults = ['2025-01','2025-02','2025-03','2025-04','2025-05','2025-06','2025-07','2025-08','2025-09','2025-10','2025-11','2025-12']
        const labels = months.length ? months : defaults

        const sumBy = (gender: string) => labels.map(m =>
          data.filter(d => (d.year_month === m) && (String(d.gender).trim() === gender))
              .reduce((s, x) => s + (parseFloat(String(x.net_revenue || '0')) || 0), 0)
        )

        const male = sumBy('ชาย')
        const female = sumBy('หญิง')
        const unknown = sumBy('')

        setChartData({
          labels,
          datasets: [
            { label: 'ชาย', data: male, backgroundColor: 'rgba(54,162,235,0.7)' },
            { label: 'หญิง', data: female, backgroundColor: 'rgba(255,99,132,0.7)' },
            ...(unknown.some(v=>v>0) ? [{ label: 'ไม่ระบุ', data: unknown, backgroundColor: 'rgba(201,203,207,0.7)' }] : [])
          ]
        })
      })
      .catch(err => { console.error(err); setChartData({ labels: [], datasets: [] }) })
  }, [])

  if (!chartData) return <div>กำลังโหลดข้อมูล...</div>

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">ยอดขายรายเดือน แยกตามเพศ</h2>
      <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
    </div>
  )
}
