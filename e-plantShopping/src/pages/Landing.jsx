import { useNavigate } from 'react-router-dom'


export default function Landing() {
    const navigate = useNavigate()
    return (
        <section className="landing">
            <div className="landing-overlay">
                <h1>Paradise Nursery</h1>
                <p>Houseplants for every space—aromatic, medicinal, and air‑purifying favorites.</p>
                <button className="btn" onClick={() => navigate('/plants')}>Get Started</button>
            </div>
        </section>
    )
}