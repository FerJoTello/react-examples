import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Expenses from "./views/Expenses/Expenses"
import Invoices from "./views/Invoices/Invoices"
import Invoice from './components/Invoice/Invoice';

import { BrowserRouter, Routes, Route } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route index element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice!</p>
              </main>
            } />
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 not found :c</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

