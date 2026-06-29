* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Inter, system-ui, sans-serif;
    background: #eef2f7;
    color: #1f2937;
}

.app-shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #111827;
    color: white;
}

.brand {
    font-weight: 700;
    font-size: 1.15rem;
}

.nav-actions {
    display: flex;
    gap: 0.75rem;
}

main.content {
    flex: 1;
    width: min(1120px, 100%);
    margin: 2rem auto;
    padding: 0 1rem;
}

.page {
    width: 100%;
}

.hidden {
    display: none;
}

.hero-card,
.card {
    background: white;
    border-radius: 24px;
    padding: 2rem;
    box-shadow: 0 24px 80px rgba(15, 23, 42, 0.08);
}

.hero-card {
    text-align: center;
}

.hero-card h1 {
    margin-top: 0;
    margin-bottom: 0.75rem;
}

.button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
}

.btn,
button {
    border: none;
    cursor: pointer;
    border-radius: 999px;
    padding: 0.9rem 1.4rem;
    font-weight: 700;
}

.btn-primary,
button.btn-primary {
    background: #2563eb;
    color: white;
}

.btn-secondary,
button.btn-secondary {
    background: #475569;
    color: white;
}

label {
    display: block;
    font-size: 0.95rem;
    margin: 1rem 0 0.45rem;
    font-weight: 600;
}

input[type="text"],
input[type="email"],
input[type="password"],
select,
textarea {
    width: 100%;
    padding: 0.95rem 1rem;
    border-radius: 14px;
    border: 1px solid #d1d5db;
    background: #f8fafc;
    font-size: 0.95rem;
}

textarea {
    resize: vertical;
}

.question-block {
    margin-bottom: 1.25rem;
    padding: 1.25rem;
    border-radius: 18px;
    background: #f8fbff;
    border: 1px solid #dbeafe;
}

.question-block h3 {
    margin-top: 0;
    font-size: 1rem;
}

.question-block label {
    display: block;
    margin: 0.6rem 0;
    cursor: pointer;
    font-weight: 500;
}

input[type="radio"] {
    margin-right: 0.75rem;
}

.result-box {
    padding: 1.5rem;
    background: #eff6ff;
    border-radius: 18px;
    border: 1px solid #bfdbfe;
}

.toast {
    position: fixed;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 1.4rem;
    border-radius: 16px;
    background: rgba(15, 23, 42, 0.95);
    color: white;
    box-shadow: 0 12px 40px rgba(15, 23, 42, 0.22);
}

.admin-grid {
    display: grid;
    grid-template-columns: minmax(280px, 1fr) minmax(280px, 1fr);
    gap: 1.5rem;
}

.question-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.question-list li {
    padding: 0.9rem 1rem;
    border-radius: 14px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    margin-bottom: 0.85rem;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    text-align: left;
    padding: 0.85rem 0.6rem;
    border-bottom: 1px solid #e2e8f0;
}

th {
    color: #475569;
    font-weight: 700;
}

.hint {
    margin-top: 1rem;
    color: #475569;
}

@media (max-width: 800px) {
    .admin-grid {
        grid-template-columns: 1fr;
    }
}