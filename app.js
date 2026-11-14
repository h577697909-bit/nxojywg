const transactions = [
  { id: 'txn_live_01', order: 'P202611142NNUS6FDVQ5J', time: '2026/11/14 10:44:23', amount: '110.98', currency: 'USD', method: 'PayPal', status: 'pending', statusText: '待支付', risk: '待评估', customer: '—' },
  { id: 'txn_live_02', order: 'P20261114KKEKFT8GA6VY', time: '2026/11/14 10:44:18', amount: '93.96', currency: 'USD', method: '8025', status: 'pending', statusText: '待支付', risk: '待评估', customer: '—' },
  { id: 'txn_live_03', order: 'c4640e4a-d540-49be-a1dd-252aa26137ef', time: '2026/11/14 10:43:49', amount: '54.37', currency: 'USD', method: 'Card', status: 'pending', statusText: '待支付', risk: '待评估', customer: '—' },
  { id: 'txn_live_04', order: 'P202611148A6EM5NDR4H8', time: '2026/11/14 10:43:01', amount: '50.31', currency: 'USD', method: 'Card', status: 'pending', statusText: '待支付', risk: '待评估', customer: '—' },
  { id: 'txn_live_05', order: 'P20261114RT9QUXT868FB', time: '2026/11/14 10:42:56', amount: '50.31', currency: 'USD', method: 'Card', status: 'failed', statusText: '支付失败', risk: '待评估', customer: '—' },
  { id: 'txn_live_06', order: 'pp_3a94ecff-4696-4863-82e7-4d6229bab8bf', time: '2026/11/14 10:40:22', amount: '29.97', currency: 'USD', method: 'PayPal', status: 'pending', statusText: '待支付', risk: '待评估', customer: '—' },
  { id: 'txn_live_07', order: 'cus_P20261114QQQ9RASU5YQD', time: '2026/11/14 10:39:54', amount: '45.86', currency: 'USD', method: 'Card', status: 'success', statusText: '支付成功', risk: '低风险', customer: '—' }
];

const disputes = [
  { id: 'dst_hkpdq2zmrho58knvyg8', deadline: '2026-11-29', days: 14, amount: '0.5200', reason: 'FRAUDULENT', reasonText: '未经授权的交易(欺诈)', stage: 'PRE_ARBITRATION', stageText: '预仲裁', status: 'PENDING_DECISION', statusText: '待定', order: 'P20261110PR8CRAR67695', updated: '2026-11-14 14:39', createdAt: '2026/11/14 8:00:00', deadlineAt: '2026/11/29 8:00:00', mode: '-', code: '', currency: 'GBP', userName: '', issuerComment: '', merchant: 'HBXH', transactionType: '', description: '', arn: '', brand: '', userId: 'S20261110EO5J7Q7JGWX4', transactionId: '', transactionAmount: '45.3700 GBP', merchantDescriptor: 'BRIVESSA TECH LTD', cvc: '', email: 'maresills@aol.com', cardCountry: 'US', bank: 'CAPITAL ONE, NATIONAL ASSOCIATION', paymentStatus: 'Success', method: 'card (visa)', avs: 'Y', methodNumber: '40034481', ip: '2a06:98c0:3600::103', billingName: 'Mary Ann Sills', billingAddress: '26 Fetters Blvd', billingCountry: 'US', recipientName: 'Mary Ann Sills', recipientPhone: '484-883-2450' },
  { id: 'dst_4ph8m1c2jz7q0kvn', deadline: '2026-11-29', days: 14, amount: '42.9000', reason: 'FRAUDULENT', reasonText: '未经授权的交易(欺诈)', stage: 'PRE_CHARGEBACK', stageText: '预拒付', status: 'ACCEPTED', statusText: '已接受', order: 'P20261025BHY847CZNAHQ', updated: '2026-11-14 14:07', createdAt: '2026/11/14 8:00:00', deadlineAt: '2026/11/29 8:00:00', currency: 'USD' },
  { id: 'dst_n5w9r2c6k1m8q4tx', deadline: '2026-11-29', days: 14, amount: '40.1900', reason: 'PRODUCT_UNACCEPTABLE', reasonText: '商品/服务不符', stage: 'PRE_CHARGEBACK', stageText: '预拒付', status: 'ACCEPTED', statusText: '已接受', order: '61c546e0-e3d8-428a-a859-6a93d66c6fd9', updated: '2026-11-14 14:07', createdAt: '2026/11/14 8:00:00', deadlineAt: '2026/11/29 8:00:00', currency: 'USD' },
  { id: 'dst_7j2p9m4v6x1c8qhz', deadline: '2026-11-29', days: 14, amount: '86.1500', reason: 'FRAUDULENT', reasonText: '未经授权的交易(欺诈)', stage: 'PRE_CHARGEBACK', stageText: '预拒付', status: 'ACCEPTED', statusText: '已接受', order: '7765f2b2-cdc5-445c-9b09-ff4deb50c9dc', updated: '2026-11-14 14:07', createdAt: '2026/11/14 8:00:00', deadlineAt: '2026/11/29 8:00:00', currency: 'USD' },
  { id: 'dst_b8q1n6v3m0k5rx2c', deadline: '2026-11-28', days: 13, amount: '40.8800', reason: 'FRAUDULENT', reasonText: '未经授权的交易(欺诈)', stage: 'PRE_CHARGEBACK', stageText: '预拒付', status: 'ACCEPTED', statusText: '已接受', order: 'a71bf254-6428-4705-8508-b10669e4a1d5', updated: '2026-11-13 08:12', createdAt: '2026/11/13 8:00:00', deadlineAt: '2026/11/28 8:00:00', currency: 'USD' },
  { id: 'dst_0z4h7p2m9c5v1knx', deadline: '2026-11-28', days: 13, amount: '35.0400', reason: 'FRAUDULENT', reasonText: '未经授权的交易(欺诈)', stage: 'PRE_CHARGEBACK', stageText: '预拒付', status: 'ACCEPTED', statusText: '已接受', order: 'P20261111QSKPWPD4HDV6', updated: '2026-11-14 08:10', createdAt: '2026/11/13 8:00:00', deadlineAt: '2026/11/28 8:00:00', currency: 'USD' }
];

const alerts = [
  { time: '今天 15:46', id: 'ALT-6F8A91', source: 'Ethoca', type: 'FRAUD', amount: '128.90 USD', mid: 'NORTHWIND-US', card: 'Visa · 4242', status: '未处理', match: '已匹配' },
  { time: '今天 14:20', id: 'ALT-2C44E0', source: 'RDR', type: 'DISPUTE', amount: '79.99 USD', mid: 'NORTHWIND-US', card: 'MC · 9021', status: '处理中', match: '已匹配' },
  { time: '今天 12:08', id: 'ALT-91DB72', source: 'CDRN', type: 'FRAUD', amount: '52.10 GBP', mid: 'NORTHWIND-UK', card: 'Visa · 1188', status: '已处理', match: '已匹配' },
  { time: '今天 09:34', id: 'ALT-3E02BD', source: 'Ethoca', type: 'INQUIRY', amount: '199.00 EUR', mid: 'NORTHWIND-EU', card: 'Visa · 6651', status: '未处理', match: '未匹配' },
  { time: '昨天 23:17', id: 'ALT-55A7C2', source: 'RDR', type: 'DISPUTE', amount: '45.00 USD', mid: 'NORTHWIND-US', card: 'MC · 4038', status: '已处理', match: '已匹配' }
];

const dashboardAlerts = [
  { id: '3a200099-8936-4b8e-97f8-db9f65c06e89', type: 'DISPUTE', time: '2024/6/6 18:40:19', descriptor: 'OTT*SUNRISE SUN', source: 'Ethoca', status: '已处理' },
  { id: '89d87864-d483-4933-b311-563071a46fff', type: 'DISPUTE', time: '2024/6/5 19:23:24', descriptor: 'ONALLA', source: 'RDR', status: '已处理' },
  { id: 'c65e93fc-f860-4518-826c-c638d8fec388', type: 'DISPUTE', time: '2024/6/5 19:08:46', descriptor: 'OTT*SUNRISE SUN', source: 'RDR', status: '已处理' },
  { id: '74b28f03-ab58-455f-90fe-7bd15edb98a1', type: 'DISPUTE', time: '2024/6/5 18:10:11', descriptor: 'OTT*SUNRISE SUN', source: 'Ethoca', status: '已处理' }
];

const logEntries = [
  { id: 'req_f3a81d', order: 'NX20261113-89341', time: '16:20:31', endpoint: '/v1/payments', code: 200, duration: '286 ms', merchant: 'MRC-DEMO-01', success: true },
  { id: 'req_4cd091', order: 'NX20261113-89340', time: '16:18:06', endpoint: '/v1/payments', code: 200, duration: '312 ms', merchant: 'MRC-DEMO-01', success: true },
  { id: 'req_861aa0', order: 'NX20261113-89339', time: '16:16:52', endpoint: '/v1/payments', code: 422, duration: '196 ms', merchant: 'MRC-DEMO-02', success: false },
  { id: 'req_3bb8f2', order: 'NX20261113-89338', time: '16:12:18', endpoint: '/v1/webhooks/payment', code: 200, duration: '118 ms', merchant: 'MRC-DEMO-01', success: true },
  { id: 'req_9d77e4', order: 'NX20261113-89337', time: '16:08:42', endpoint: '/v1/payments', code: 504, duration: '5000 ms', merchant: 'MRC-DEMO-03', success: false }
];

const app = document.querySelector('#app');
const navItems = [...document.querySelectorAll('[data-page]')];
const appShell = document.querySelector('.app-shell');
const loginScreen = document.querySelector('#login-screen');
const loginForm = document.querySelector('#login-form');
const loginAccount = document.querySelector('#login-account');
const loginPassword = document.querySelector('#login-password');
const loginError = document.querySelector('#login-error');
let isAuthenticated = false;

function money(value, currency = 'USD') {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
}

function pageHeader(title, description, actions = '') {
  return `<header class="page-header">
    <div class="page-title"><div class="breadcrumb">跨境支付网关 / <b>${title}</b></div><h1>${title}</h1><p>${description}</p></div>
    <div class="header-actions">${actions}</div>
  </header>`;
}

function metric(label, value, change, trend = 'up', foot = '较昨日', icon = '↗') {
  return `<article class="metric-card">
    <div class="metric-main"><span class="metric-icon">${icon}</span><div class="metric-copy"><span>${label}</span><strong class="metric-value">${value}</strong></div></div>
    ${change || foot ? `<div class="metric-foot"><span class="trend-${trend}">${change}</span><span>${foot}</span></div>` : ''}
  </article>`;
}

function statusClass(text) {
  if (/^2\d\d$/.test(text) || /成功|已处理|已接受|已匹配|Enable|正常/.test(text)) return 'success';
  if (/^[45]\d\d$/.test(text) || /失败|高风险|未匹配|暂停/.test(text)) return 'failed';
  if (/待|需要|未处理|即将/.test(text)) return 'warning';
  if (/中|争议/.test(text)) return 'info';
  return 'muted';
}

function status(text) { return `<span class="status ${statusClass(text)}">${text}</span>`; }

function pagination(total) {
  return `<div class="pagination"><span>共 ${total} 条记录 · 每页 20 条</span><div class="page-buttons"><button>‹</button><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>12</button><button>›</button></div></div>`;
}

function chartSvg(mode = 'transaction') {
  const isRisk = mode === 'risk';
  const points = isRisk ? [[42,151],[150,123],[260,166],[370,95],[480,137],[590,66],[705,109]] : [[42,180],[150,137],[260,151],[370,82],[480,103],[590,60],[705,91]];
  const linePath = points.map(([x,y], index) => `${index ? 'L' : 'M'}${x} ${y}`).join(' ');
  const areaPath = `${linePath} L705 213 L42 213 Z`;
  return `<div class="chart-wrap ${isRisk ? 'risk-trend' : ''}">
    <div class="chart-legend"><span>${isRisk ? '风控预警数量（笔）' : '交易金额（USD）'}</span></div>
    <svg class="line-chart" viewBox="0 0 760 260" role="img" aria-label="最近七天${isRisk ? '风控预警' : '交易'}趋势">
      <defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#497ed8" stop-opacity=".16"/><stop offset="1" stop-color="#497ed8" stop-opacity="0"/></linearGradient></defs>
      <g class="chart-grid"><line x1="42" x2="735" y1="45" y2="45"/><line x1="42" x2="735" y1="95" y2="95"/><line x1="42" x2="735" y1="145" y2="145"/><line x1="42" x2="735" y1="195" y2="195"/></g>
      <path class="chart-area" d="${areaPath}"/>
      <path class="chart-line" d="${linePath}"/>
      <g>${points.map(([x,y]) => `<circle class="chart-dot" cx="${x}" cy="${y}" r="4"/>`).join('')}</g>
      <g class="chart-axis"><text x="32" y="218">${isRisk ? '0' : '$0'}</text><text x="25" y="198">${isRisk ? '3' : '$10k'}</text><text x="25" y="148">${isRisk ? '6' : '$20k'}</text><text x="25" y="98">${isRisk ? '9' : '$30k'}</text><text x="25" y="48">${isRisk ? '12' : '$40k'}</text><text x="34" y="242">11/07</text><text x="141" y="242">11/08</text><text x="251" y="242">11/09</text><text x="361" y="242">11/10</text><text x="471" y="242">11/11</text><text x="581" y="242">11/12</text><text x="687" y="242">11/13</text></g>
    </svg>
  </div>`;
}

function transactionRows(limit = transactions.length) {
  return transactions.slice(0, limit).map(t => `<tr>
    <td><span class="mono">${t.id}</span></td>
    <td><strong>${t.order}</strong></td>
    <td class="amount">${t.amount}</td>
    <td>${t.currency}</td>
    <td>${status(t.statusText)}</td>
    <td>${t.method}</td>
    <td><div class="table-actions"><button class="button text small" data-detail="transaction" data-id="${t.id}">查看详情</button>${t.status === 'success' ? `<button class="button ghost small" data-action="refund" data-id="${t.id}">退款</button>` : ''}</div></td>
  </tr>`).join('');
}

function dashboardTransactionRows(limit = 5) {
  return transactions.slice(0, limit).map(t => `<tr>
    <td>${t.time}</td>
    <td><strong>${t.order}</strong></td>
    <td class="amount">${t.amount} ${t.currency}</td>
    <td>${t.method}</td>
    <td>${status(t.statusText)}</td>
    <td><button class="button text small" data-detail="transaction" data-id="${t.id}">查看详情</button></td>
  </tr>`).join('');
}

function dashboardPage() {
  return `${pageHeader('概览面板','查看您的跨境支付业务整体情况。','')}
    <section class="metric-grid dashboard-metrics">
      ${metric('今日交易额', money(26624.70), '-45.67%', 'down', '较昨日', '↘')}
      ${metric('风控今日预警总数', '8', '-24', 'down', '较昨日', '↘')}
      ${metric('风控账户余额', '($47,293.50)', '', 'flat', '', '$')}
    </section>
    <section class="grid-2-1">
      <article class="card dashboard-trend-card"><div class="card-head"><div class="dashboard-trend-heading"><h2 id="dashboard-trend-title">交易额（美元）</h2><div class="dashboard-trend-switch" role="tablist" aria-label="趋势类型"><button class="active" type="button" role="tab" aria-selected="true" data-dashboard-trend="transaction">交易趋势</button><button type="button" role="tab" aria-selected="false" data-dashboard-trend="risk">风控趋势</button></div></div><div class="segmented"><button class="active">7 天</button><button>30 天</button><button>90 天</button></div></div><div class="card-body" id="dashboard-trend-chart">${chartSvg()}</div></article>
      <article class="card"><div class="card-head"><div><h2>支付方式分布</h2></div></div><div class="payment-pie-layout"><div class="payment-pie" role="img" aria-label="Card 50%，PayPal 30%，8025 20%"></div><div class="payment-pie-legend">${[['Card','#376fd3','50%'],['PayPal','#7d9fe0','30%'],['8025','#c3d2ee','20%']].map(x => `<div class="legend-item" style="--dot:${x[1]}"><i></i><span>${x[0]}</span><b>${x[2]}</b></div>`).join('')}</div></div></article>
    </section>
    <section class="table-card dashboard-trades"><div class="table-toolbar"><div><strong>最近交易</strong></div><button class="button text small" data-page-jump="transactions">查看全部</button></div><div class="table-scroll"><table><thead><tr><th>时间</th><th>订单号</th><th>金额</th><th>支付方式</th><th>状态</th><th>操作</th></tr></thead><tbody>${dashboardTransactionRows(5)}</tbody></table></div></section>
    <section class="grid-2-1 dashboard-lower">
      <article class="table-card"><div class="table-toolbar"><div><strong>最近预警</strong></div><button class="button text small" data-page-jump="alerts">查看全部</button></div><div class="table-scroll"><table><thead><tr><th>Alert ID</th><th>预警类型</th><th>预警时间</th><th>对账单描述符</th><th>来源</th><th>状态</th></tr></thead><tbody>${dashboardAlerts.map(a => `<tr><td class="mono">${a.id}</td><td>${a.type}</td><td>${a.time}</td><td>${a.descriptor}</td><td>${a.source}</td><td>${status(a.status)}</td></tr>`).join('')}</tbody></table></div></article>
      <article class="card quick-actions-card"><div class="card-head"><div><h2>快速操作</h2></div></div><div class="quick-action-list"><button data-page-jump="transactions"><span>▤</span><strong>交易查询</strong><b>→</b></button><button data-page-jump="alerts"><span>◇</span><strong>预警处理</strong><b>→</b></button></div></article>
    </section>`;
}

function transactionsPage() {
  return `${pageHeader('交易查询','查询、筛选并查看全部支付交易。',`<button class="button primary">导出交易清单</button>`)}
    <section class="filter-card transaction-filter">
      <div class="transaction-search"><input class="search-control" placeholder="请输入查询"></div>
      <div class="transaction-filter-grid">
        <div class="field"><label>支付类型</label><select class="select-control"><option>-- 全部 --</option><option>Card</option><option>PayPal</option><option>CashApp</option><option>8025</option></select></div>
        <div class="field"><label>交易状态</label><select class="select-control"><option>-- 全部 --</option><option>支付成功</option><option>支付失败</option><option>待支付</option></select></div>
        <div class="field"><label>时间</label><input class="date-control" value="2026-10-16 - 2026-11-14"></div>
        <button class="button primary transaction-query-button">查询</button>
      </div>
    </section>
    <section class="table-card transaction-table"><div class="table-scroll"><table><thead><tr><th>交易编号</th><th>订单号</th><th>交易金额</th><th>交易币种</th><th>交易状态</th><th>支付类型</th><th><button class="table-column-config" data-action="customize-columns">⚙ 自定义列</button></th></tr></thead><tbody>${transactionRows()}</tbody></table></div>${pagination(4829)}</section>`;
}

function disputeRateChartSvg() {
  const labels = ['10/15','10/16','10/17','10/18','10/19','10/20','10/21','10/22','10/23','10/24','10/25','10/26','10/27','10/28','10/29','10/30','10/31','11/01','11/02','11/03','11/04','11/05','11/06','11/07','11/08','11/09','11/10','11/11','11/12','11/13','11/14'];
  const values = [1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1];
  const points = values.map((value, index) => {
    const x = 46 + index * (824 / (values.length - 1));
    const y = value ? 45 : 220;
    return [x, y];
  });
  const path = points.map(([x,y], index) => `${index ? 'L' : 'M'}${x.toFixed(1)} ${y}`).join(' ');
  return `<svg class="dispute-rate-chart" viewBox="0 0 900 285" role="img" aria-label="2026年10月15日至11月14日争议率趋势">
    <g class="dispute-chart-grid">${[45,80,115,150,185,220].map(y => `<line x1="46" y1="${y}" x2="870" y2="${y}"/>`).join('')}${labels.map((_,index) => { const x=46+index*(824/(labels.length-1)); return `<line x1="${x.toFixed(1)}" y1="45" x2="${x.toFixed(1)}" y2="220"/>`; }).join('')}</g>
    <g class="dispute-chart-y"><text x="7" y="49">0.0100</text><text x="7" y="84">0.0080</text><text x="7" y="119">0.0060</text><text x="7" y="154">0.0040</text><text x="7" y="189">0.0020</text><text x="35" y="224">0</text></g>
    <path class="dispute-chart-line" d="${path}"/>
    <g>${points.map(([x,y]) => `<circle class="dispute-chart-dot" cx="${x.toFixed(1)}" cy="${y}" r="2.6"/>`).join('')}</g>
    <g class="dispute-chart-x">${labels.map((label,index) => { const x=46+index*(824/(labels.length-1)); return `<text transform="translate(${x.toFixed(1)} 239) rotate(-45)" text-anchor="end">2026-${label}</text>`; }).join('')}</g>
  </svg>`;
}

function disputesPage() {
  return `<section class="dispute-dashboard-filter">
      <div class="dispute-filter-note"><p>所有金额均用长期平均汇率转换为您的默认结算货币 (USD) 进行展示。</p><p>所有时间均基于您的账户结算时区：(UTC+08:00)时区</p></div>
      <div class="field"><label>时间</label><input class="date-control" value="2026-10-16 - 2026-11-14"></div>
      <div class="field"><label>争议/拒付</label><select class="select-control"><option>争议</option><option>拒付</option></select></div>
      <button class="button primary">查找</button>
    </section>
    <section class="dispute-kpi-grid">
      <article><span>争议率</span><strong>0.63%</strong></article>
      <article><span>争议笔数</span><strong>137</strong></article>
      <article><span>争议金额</span><strong>8186.17 USD</strong></article>
    </section>
    <section class="dispute-analytics-grid">
      <article class="card dispute-chart-card"><div class="card-head"><h2>争议率</h2></div><div class="dispute-chart-body"><div class="dispute-chart-legend"><i></i><span>争议率</span></div>${disputeRateChartSvg()}</div></article>
      <article class="card dispute-reason-card"><div class="card-head"><h2>争议原因分布</h2></div><div class="dispute-reason-body"><div class="dispute-reason-legend">${[['未经授权的交易(欺诈)','#25267f'],['未收到商品/服务','#f20d2e'],['已取消的商品','#063f86'],['消费者争议','#111'],['商品/服务不符','#777'],['商家未处理退款','#39434f'],['重复收费','#d7d7d7'],['处理错误','#efefef']].map(x => `<span style="--reason:${x[1]}"><i></i>${x[0]}</span>`).join('')}</div><div class="dispute-reason-donut" role="img" aria-label="争议原因分布饼图"></div></div></article>
    </section>
    <section class="dispute-query-heading"><h2>争议查询</h2><button class="button primary">⇥ 导出争议报表</button></section>
    <section class="filter-card dispute-list-filter"><div class="original-dispute-filter-grid"><div class="field"><label>订单号</label><input class="search-control"></div><div class="field"><label>争议状态</label><select class="select-control"><option>-- 全部状态 --</option><option>PENDING_DECISION</option><option>ACCEPTED</option></select></div><div class="field"><label>争议阶段</label><select class="select-control"><option>-- 全部阶段 --</option><option>PRE_ARBITRATION</option><option>PRE_CHARGEBACK</option></select></div><div class="field"><label>争议原因</label><select class="select-control"><option>-- 全部原因 --</option><option>FRAUDULENT</option><option>PRODUCT_UNACCEPTABLE</option></select></div><button class="button primary">查询</button><button class="button dispute-only-button">仅看拒付</button></div></section>
    <section class="table-card dispute-list-card"><div class="table-scroll"><table><thead><tr><th>响应期限</th><th>拒付金额</th><th>原因</th><th>阶段</th><th>状态</th><th>订单号</th><th>最后更新时间</th><th><button class="table-column-config">⚙ 自定义列</button></th></tr></thead><tbody>${disputes.map(d => `<tr><td><strong>${d.deadline}</strong><span class="subtext">剩余 ${d.days} 天</span></td><td>${d.amount}</td><td>${d.reason}</td><td>${d.stage}</td><td>${d.status}</td><td>${d.order}</td><td>${d.updated}</td><td><button class="button primary small" data-dispute-detail="${d.id}">查看详情</button></td></tr>`).join('')}</tbody></table></div>${pagination(137)}</section>`;
}

let activeDisputeDetailId = disputes[0].id;

function originalDetailRow(label, value = '') {
  return `<div class="original-detail-row"><span>${label}</span><strong>${value}</strong></div>`;
}

function disputeDetailPage() {
  const d = disputes.find(item => item.id === activeDisputeDetailId) || disputes[0];
  return `<section class="original-dispute-detail-page">
    <header class="original-dispute-detail-head"><h1>争议ID: ${d.id}</h1><p>纠纷创建于 ${d.createdAt}</p><p>付款纠纷截止日期 ${d.deadlineAt}</p></header>
    <article class="original-detail-card"><h2>争议基本信息</h2><div class="original-detail-columns"><div>${originalDetailRow('订单号','')}${originalDetailRow('支付争议模式',d.mode || '-')}${originalDetailRow('争议状态',d.statusText || d.status)}${originalDetailRow('争议代码',d.code || '')}${originalDetailRow('争议原因',d.reasonText || d.reason)}${originalDetailRow('争议金额',String(Number(d.amount)))}${originalDetailRow('币种',d.currency)}${originalDetailRow('用户姓名',d.userName || '')}${originalDetailRow('发卡机构对争议的评论',d.issuerComment || '')}</div><div>${originalDetailRow('商户号',d.merchant || '')}${originalDetailRow('争议阶段',d.stageText || d.stage)}${originalDetailRow('交易类型',d.transactionType || '')}${originalDetailRow('争议说明',d.description || '')}${originalDetailRow('Arn',d.arn || '')}${originalDetailRow('支付品牌',d.brand || '')}${originalDetailRow('用户ID',d.userId || '')}${originalDetailRow('最后更新时间',d.updated)}</div></div></article>
    <article class="original-detail-card"><h2>交易基本信息</h2><div class="original-detail-columns"><div>${originalDetailRow('订单号',d.order)}${originalDetailRow('交易金额',d.transactionAmount || '')}${originalDetailRow('交易商户描述',d.merchantDescriptor || '')}${originalDetailRow('CVC码审核',d.cvc || '')}${originalDetailRow('客户邮箱',d.email || '')}${originalDetailRow('发卡地',d.cardCountry || '')}${originalDetailRow('发卡银行',d.bank || '')}</div><div>${originalDetailRow('交易编号',d.transactionId || '')}${originalDetailRow('付款状态',d.paymentStatus || '')}${originalDetailRow('支付方式',d.method || '')}${originalDetailRow('AVS验证',d.avs || '')}${originalDetailRow('支付方式号码',d.methodNumber || '')}${originalDetailRow('设备 IP 地址',d.ip || '')}</div></div></article>
    <article class="original-detail-card"><h2>账单基本信息</h2><div class="original-detail-columns"><div>${originalDetailRow('账单名称',d.billingName || '')}${originalDetailRow('账单地址',d.billingAddress || '')}${originalDetailRow('收货人姓名',d.recipientName || '')}</div><div>${originalDetailRow('账单国家',d.billingCountry || '')}${originalDetailRow('收货人电话',d.recipientPhone || '')}</div></div></article>
  </section>`;
}

function alertsPage() {
  return `${pageHeader('拒付预警管理','聚合 Ethoca、RDR、CDRN 等来源的风险预警。','')}
    <section class="filter-card"><div class="filter-grid wide"><div class="field"><label>Alert ID</label><input class="search-control" placeholder="请输入 Alert ID"></div><div class="field"><label>MID</label><select class="select-control"><option>全部 MID</option><option>NORTHWIND-US</option><option>NORTHWIND-EU</option></select></div><div class="field"><label>预警来源</label><select class="select-control"><option>全部来源</option><option>Ethoca</option><option>RDR</option><option>CDRN</option></select></div><div class="field"><label>处理状态</label><select class="select-control"><option>全部状态</option><option>未处理</option><option>处理中</option><option>已处理</option></select></div><div class="field"><label>预警时间</label><input class="date-control" value="近 7 天"></div><button class="button primary">查询</button></div></section>
    <section class="table-card"><div class="table-toolbar"><div><strong>预警列表</strong><small>共 876 条</small></div></div><div class="table-scroll"><table><thead><tr><th>预警时间</th><th>Alert ID</th><th>来源</th><th>类型</th><th>金额</th><th>MID</th><th>卡号</th><th>匹配状态</th><th>处理状态</th><th>操作</th></tr></thead><tbody>${alerts.map(a => `<tr><td>${a.time}</td><td class="mono">${a.id}</td><td>${a.source}</td><td>${a.type}</td><td class="amount">${a.amount}</td><td>${a.mid}</td><td>${a.card}</td><td>${status(a.match)}</td><td>${status(a.status)}</td><td><div class="table-actions"><button class="button text small" data-detail="alert" data-id="${a.id}">详情</button><button class="button secondary small" data-action="process-alert">处理</button></div></td></tr>`).join('')}</tbody></table></div>${pagination(876)}</section>`;
}

function sourcesPage(sourceName = 'RDR') {
  const sourceRows = {
    RDR: [
    ['7681000','BRIVESSA TECH LTD','481054','481054000016066','LessThanOrEquals100USD','2026/9/30 15:47:13','Enable','','暂停预警'],
    ['7051226','BLIVORA LUMISSE LTD','481054','481054000013493','','2026/9/22 18:10:24','Pending','注册申请中',''],
    ['7455570','SMILINGMANOR LTD','481054','481054000016229','','2026/9/21 14:10:38','Pending','注册申请中',''],
    ['7045230','GUAZILETTRADING LTD','481054','481054000016164','LessThanOrEquals 100USD','2026/9/19 11:20:50','Pending','注册申请中',''],
    ['7346765','JOUVELLE LYVORA LTD','481054','481054000012947','','2026/9/14 17:48:03','Pending','注册申请中',''],
    ['7333915','YPS*BLUE SKYE CLOTHING','443099','311186452885','TransactionAmount LessThanOrEquals 100USD','2026/6/2 17:17:44','Enable','','暂停预警'],
    ['7682269','MYROVIA TRENZORA LTD','481054','481054000014311','LessThanOrEquals','2026/5/19 10:16:34','Enable','','暂停预警'],
    ['7903622','MYROVIA LTD','481054','481054000014311','LessThanOrEquals','2026/3/24 10:10:09','Enable','','暂停预警']
    ],
    Ethoca: [
      ['6143506','OTT*SUNRISE SUN','481054','481054000013506','LessThanOrEquals100USD','2026/11/10 16:45:22','Enable','','暂停预警'],
      ['6094272','ONALLA','481054','481054000009272','','2026/11/10 10:19:06','Pending','注册申请中',''],
      ['6593130','BRIVESSA TECH LTD','481054','481054000019130','LessThanOrEquals100USD','2026/11/6 19:11:36','Enable','','暂停预警'],
      ['6488671','YPS*BLUE SKYE CLOTHING','443099','311186448671','','2026/11/5 14:16:09','Enable','','暂停预警']
    ],
    CDRN: [
      ['7581001','SMILINGMANOR LTD','481054','481054000018001','LessThanOrEquals100USD','2026/10/28 14:31:20','Enable','','暂停预警'],
      ['7581002','GUAZILETTRADING LTD','481054','481054000018002','','2026/10/26 12:08:44','Pending','注册申请中',''],
      ['7581003','JOUVELLE LYVORA LTD','481054','481054000018003','LessThanOrEquals','2026/10/22 09:34:18','Enable','','暂停预警'],
      ['7581004','MYROVIA LTD','481054','481054000018004','','2026/10/20 18:42:05','Pending','注册申请中','']
    ],
    'Order Insight': [
      ['7982001','BRIVESSA TECH LTD','481054','481054000019821','TransactionAmount LessThanOrEquals 100USD','2026/11/8 17:22:41','Enable','','暂停预警'],
      ['7982002','SMILINGMANOR LTD','481054','481054000019822','','2026/11/7 15:10:28','Pending','注册申请中',''],
      ['7982003','MYROVIA TRENZORA LTD','481054','481054000019823','LessThanOrEquals','2026/11/5 10:26:13','Enable','','暂停预警'],
      ['7982004','JOUVELLE LYVORA LTD','481054','481054000019824','','2026/11/3 09:18:46','Pending','注册申请中','']
    ]
  };
  const rows = sourceRows[sourceName] || sourceRows.RDR;
  return `<div class="source-page-actions"><button class="button source-add-button">＋ 新增</button></div>
    <section class="source-filter-card"><div class="source-card-title">${sourceName}</div><div class="source-filter-grid"><div class="field"><label>状态</label><select class="select-control"><option>全部</option><option>Enable</option><option>Pending</option><option>Disable</option></select></div><div class="field"><label>对账单描述符</label><select class="select-control"><option>全部</option></select></div><button class="button primary">查找</button></div></section>
    <section class="table-card source-table"><div class="table-scroll"><table><thead><tr><th>MID</th><th>对账单描述符</th><th>Acquirer BIN</th><th>CAID</th><th>退款规则</th><th>提交时间</th><th>状态</th><th>备注</th><th>操作</th></tr></thead><tbody>${rows.map(r => `<tr><td>${r[0]}</td><td><strong>${r[1]}</strong></td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td><span class="source-status ${r[6].toLowerCase()}">${r[6]}</span></td><td>${r[7]}</td><td>${r[8] ? `<button class="button danger small" data-action="pause-source">${r[8]}</button>` : ''}</td></tr>`).join('')}</tbody></table></div></section>`;
}

function financePage() {
  const rows = [
    ['34741a51-298e-4885-886f-961d71200d01','FRAUD','USD 73.19','Ethoca','已处理','2026/11/14 11:43:46'],
    ['761b7973-2100-4d3c-80a9-bc42ce9b5ba9','FRAUD','USD 37.63','Ethoca','已处理','2026/11/14 11:28:49'],
    ['74617994-e34e-45c6-8287-e2b5631a3ec5','FRAUD','USD 138.55','Ethoca','已处理','2026/11/14 10:58:50'],
    ['e39b03a8-ba24-42dc-a8b3-e19fa9abd50b','FRAUD','USD 113.48','Ethoca','已处理','2026/11/14 10:28:49'],
    ['ad1e8172-af58-4ff0-bad3-425a2b656a33','FRAUD','GBP 42.41','Ethoca','已处理','2026/11/14 10:13:46'],
    ['77f175c5-995f-49c6-b9c3-6d506c1d2aa6','FRAUD','USD 63.72','Ethoca','已处理','2026/11/14 8:58:47'],
    ['f63b390d-6c89-4560-9ad8-3b3c5fb4f57a','DISPUTE','USD 111.64','Ethoca','已处理','2026/11/14 6:58:50'],
    ['62bda104-ae1b-4a78-8b27-a5a65a5003a7','DISPUTE','USD 54.98','RDR','已处理','2026/11/13 22:00:29']
  ];
  return `<section class="source-filter-card finance-settlement-card"><div class="source-card-title">结算管理</div><div class="finance-settlement-filter"><div class="field"><label>预警ID</label><input class="search-control"></div><div class="field"><label>争议类型</label><select class="select-control"><option>全部</option><option>FRAUD</option><option>DISPUTE</option></select></div><div class="field"><label>预警来源</label><select class="select-control"><option>全部</option><option>Ethoca</option><option>RDR</option><option>CDRN</option></select></div><div class="field"><label>处理状态</label><select class="select-control"><option>全部</option><option>已处理</option><option>未处理</option></select></div><div class="field"><label>时间</label><input class="date-control" value="2026-10-16 - 2026-11-14"></div><button class="button primary">查找</button></div></section>
    <section class="table-card source-table finance-settlement-table"><div class="table-scroll"><table><thead><tr><th>预警ID</th><th>争议类型</th><th>争议金额</th><th>预警来源</th><th>处理状态</th><th>创建时间</th></tr></thead><tbody>${rows.map(r => `<tr><td class="mono">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td></tr>`).join('')}</tbody></table></div></section>`;
}

function settingsPage() {
  const accounts = [['OP','运营主管','ops@nexus-demo.com','全部商户'],['CS','客服专员','support@nexus-demo.com','交易只读'],['DV','技术开发','dev@nexus-demo.com','API 与日志']];
  return `${pageHeader('用户与子账号','管理企业信息、账号安全与团队权限。',`<button class="button ghost">操作日志</button>`)}
    <section class="split-panel"><nav class="subnav"><h3>设置菜单</h3><button class="active">企业与账号</button><button>安全设置 <span class="status warning" style="float:right">待完善</span></button><button>子账号管理</button><button>通知设置</button><button>API 密钥</button></nav><div class="settings-pane">
      <div class="settings-title"><h2>企业与账号</h2><p>账号身份和企业主体信息，仅管理员可修改。</p></div>
      <div class="form-grid">
        <div class="field"><label>公司主体</label><div class="read-field"><span>Northwind Commerce Ltd.</span><button>编辑</button></div></div>
        <div class="field"><label>账号 ID</label><div class="read-field"><span class="mono">ACCT-886383</span><button data-copy="ACCT-886383">复制</button></div></div>
        <div class="field"><label>登录邮箱</label><div class="read-field"><span>admin@nexus-demo.com</span><button>更换</button></div></div>
        <div class="field"><label>联系电话</label><div class="read-field"><span>+86 138 **** 9273</span><button>编辑</button></div></div>
        <div class="field"><label>二次验证</label><div class="read-field"><span>${status('未开启')}</span><button>立即开启</button></div></div>
        <div class="field"><label>结算时区</label><div class="read-field"><span>(UTC+08:00) 中国标准时间</span><button>更换</button></div></div>
      </div>
      <div class="settings-title" style="margin-top:30px"><div style="display:flex;align-items:center;justify-content:space-between"><div><h2>子账号管理</h2><p>最多可创建 5 个子账号，当前已使用 3 个。</p></div><button class="button primary">＋ 新增子账号</button></div></div>
      <div class="account-grid">${accounts.map(a => `<article class="account-card"><div class="account-card-head"><span class="user-avatar">${a[0]}</span><div><h4>${a[1]}</h4><small>${a[2]}</small></div></div><div class="account-meta"><span>权限范围<br><strong>${a[3]}</strong></span><span>状态<br>${status('正常')}</span></div><div class="account-card-actions"><button class="button ghost small">编辑权限</button><button class="button text small" data-action="delete-account">删除</button></div></article>`).join('')}</div>
    </div></section>`;
}

function docsPage() {
  return `<article class="doc-content original-api-doc">
    <h1>风控预警API文档</h1>
    <section>
      <h2>1 服务说明</h2>
      <p>该接口将卡组织推送过来的预警推送到商户处，商户收到预警后，处理后需要同步通知和异步通知本系统，本系统会将通知反馈给卡组织。</p>
      <p>前置条件：商户需要在本系统，有账号，并且需要提供推送地址。</p>
    </section>
    <section>
      <h2>2 预警匹配订单规则：</h2>
      <ol class="api-rule-list">
        <li>对于拥有 ARN 的订单，可以直接通过 ARN 匹配</li>
        <li>如果没有对应的 ARN 则按普通规则匹配：
          <div class="api-rule-detail">
            <p>a) 根据 MerchantDescriptor（商户的相关描述）进行完全匹配或者开头匹配：</p>
            <p>例如：AA BC DD，</p>
            <p>Ⅰ、第一步先将空格去除，获得 AABCDD，然后与订单描述进行完全匹配，如果匹配上则进入下一步；</p>
            <p>Ⅱ、判断描述是否存在域名后缀，例如 .com、.cn 之类的，将这些去除，然后再进行完全匹配；</p>
            <p>Ⅲ、在1和2执行后还未匹配上，则对描述 AA BC DD 按空格拆分，并分别使用 AA、AA BC 与订单的描述进行开头匹配；</p>
            <p>b) 判断预警卡号发卡行和订单支付卡号的发卡行是否一致；</p>
            <p>c) 判断预警卡号末四位和订单支付卡号的末四位是否一致；</p>
            <p>d) 判断预警金额、货币和订单金额、货币是否一致；</p>
            <p>e) 判断预警交易的授权日期是否在订单支付时间前后36小时之内；</p>
            <p>以上 a、b、c、d、e 条件如果都满足，订单和预警则匹配上。</p>
          </div>
        </li>
      </ol>
    </section>
    <section>
      <h2>3 推送方式</h2>
      <div class="api-method-bar">POST</div>
    </section>
    <section>
      <h2>3.1 推送参数</h2>
      <p>对以下参数组成的 Json 字符串进行 AES 加密，将加密后的文本发送到推送地址（商户提供）</p>
      <p>下发数据的 content-type：text/json　AES 加密模式：ECB　填充：pkcs5padding　密钥长度：128位</p>
      <div class="table-scroll"><table class="api-param-table"><thead><tr><th>参数名称</th><th>最大长度/类型</th><th>描述</th><th>是否必填</th><th>示例</th></tr></thead><tbody>
        <tr><td>EthocaID</td><td>String(30)</td><td>预警唯一ID</td><td><strong>必填</strong></td><td>8RUV14D6TVVWRXMVDVCSCXKGW</td></tr>
        <tr><td>WarningType</td><td>String(16)</td><td>预警类型：Ethoca、RDR、CDRN</td><td><strong>必填</strong></td><td>Ethoca</td></tr>
      </tbody></table></div>
    </section>
  </article>`;
}

function preservedDocsPage(title) {
  return `<article class="doc-content original-api-doc">
    <h1>${title}</h1>
    <section class="preserved-doc-message"><p>该入口沿用原后台文档内容，静态设计稿仅同步页面样式，不改写接口正文。</p></section>
  </article>`;
}

function logJson(entry) {
  const obj = { request_id: entry.id, merchant_id: entry.merchant, order_id: entry.order, currency: 'USD', total_amount: 128.90, customer: { name: 'Demo Customer', email: 'de•••@example.com', phone: '+1 *** *** 0198' }, response: { code: entry.code, status: entry.success ? 'SUCCESS' : 'FAILED', duration: entry.duration } };
  return JSON.stringify(obj, null, 2).replace(/"([^"\n]+)":/g,'<span class="json-key">"$1"</span>:').replace(/: "([^"\n]+)"/g,': <span class="json-string">"$1"</span>');
}

function logsPage() {
  const first = logEntries[0];
  return `${pageHeader('请求日志','查看支付请求、响应与 Webhook 调用情况。',`<button class="button ghost">保留策略</button><button class="button primary">导出日志</button>`)}
    <section class="filter-card"><div class="filter-grid"><div class="field"><label>订单号 / Request ID</label><input class="search-control" placeholder="输入查询内容"></div><div class="field"><label>接口</label><select class="select-control"><option>全部接口</option><option>/v1/payments</option><option>/v1/webhooks/payment</option></select></div><div class="field"><label>请求状态</label><select class="select-control"><option>全部状态</option><option>成功</option><option>失败</option></select></div><div class="field"><label>创建时间</label><input class="date-control" value="今日"></div><button class="button primary">查询</button></div></section>
    <section class="log-viewer"><div class="log-list"><div class="table-toolbar"><div><strong>日志列表</strong><small>敏感字段已脱敏</small></div><span class="status success">实时</span></div>${logEntries.map((l,i) => `<div class="log-row ${i===0?'active':''}" data-log-id="${l.id}"><span>${l.time}</span><strong class="mono">${l.order}</strong><span class="mono">${l.endpoint}</span>${status(String(l.code))}</div>`).join('')}${pagination(1420)}</div>
    <aside class="log-detail"><div class="card-head"><div><h2>请求详情</h2><p id="log-detail-id">${first.id}</p></div><button class="button ghost small" data-copy="${first.id}">复制 ID</button></div><div class="log-meta" id="log-meta"><div><span>订单号</span><strong>${first.order}</strong></div><div><span>Merchant ID</span><strong>${first.merchant}</strong></div><div><span>响应状态</span><strong>${first.code}</strong></div><div><span>耗时</span><strong>${first.duration}</strong></div></div><div class="json-tabs"><button class="active">有效载荷</button><button>返回数据</button><button>错误消息</button></div><pre class="json-view" id="json-view">${logJson(first)}</pre></aside></section>`;
}

const pages = {
  dashboard: dashboardPage,
  transactions: transactionsPage,
  disputes: disputesPage,
  'dispute-detail': disputeDetailPage,
  alerts: alertsPage,
  'sources-ethoca': () => sourcesPage('Ethoca'),
  'sources-rdr': () => sourcesPage('RDR'),
  'sources-cdrn': () => sourcesPage('CDRN'),
  'sources-order-insight': () => sourcesPage('Order Insight'),
  finance: financePage,
  settings: settingsPage,
  docs: docsPage,
  'docs-order-insight': () => preservedDocsPage('Order Insight API文档'),
  'docs-transactions': () => preservedDocsPage('交易对接API文档')
};

function render(page = 'dashboard', updateHash = true) {
  const key = pages[page] ? page : 'dashboard';
  const riskPages = new Set(['alerts', 'sources-ethoca', 'sources-rdr', 'sources-cdrn', 'sources-order-insight', 'finance']);
  app.classList.toggle('risk-section', riskPages.has(key));
  app.innerHTML = pages[key]();
  const navKey = key === 'dispute-detail' ? 'disputes' : key;
  navItems.forEach(item => item.classList.toggle('active', item.dataset.page === navKey));
  document.querySelectorAll('.nav-group').forEach(group => group.classList.remove('open'));
  const activeNavItem = navItems.find(item => item.dataset.page === navKey && item.closest('.sidebar'));
  const activeGroup = activeNavItem?.closest('.nav-group');
  const activeSubgroup = activeNavItem?.closest('.nav-subgroup');
  if (activeGroup?.querySelector('.nav-children')) activeGroup.classList.add('open');
  if (activeSubgroup) activeSubgroup.classList.add('open');
  closeSettingsMenu();
  if (updateHash && location.hash !== `#${key}`) history.replaceState(null, '', `#${key}`);
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });
  bindPageActions();
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.querySelector('p').textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function openDrawer(type, id) {
  const drawer = document.querySelector('#detail-drawer');
  const backdrop = document.querySelector('#drawer-backdrop');
  const title = document.querySelector('#drawer-title');
  const content = document.querySelector('#drawer-content');
  drawer.classList.toggle('dispute-detail-mode', type === 'dispute');
  let html = '';
  if (type === 'transaction') {
    const t = transactions.find(x => x.id === id) || transactions[0];
    title.textContent = `交易 ${t.order}`;
    html = `<section class="detail-section"><h3>交易基本信息</h3><div class="detail-grid"><div class="detail-item"><span>交易编号</span><strong class="mono">${t.id}</strong></div><div class="detail-item"><span>状态</span><strong>${status(t.statusText)}</strong></div><div class="detail-item"><span>订单号</span><strong>${t.order}</strong></div><div class="detail-item"><span>交易金额</span><strong>${t.amount} ${t.currency}</strong></div><div class="detail-item"><span>支付方式</span><strong>${t.method}</strong></div><div class="detail-item"><span>创建时间</span><strong>${t.time}</strong></div></div></section><section class="detail-section"><h3>客户信息（演示数据）</h3><div class="detail-grid"><div class="detail-item"><span>客户姓名</span><strong>${t.customer}</strong></div><div class="detail-item"><span>邮箱</span><strong>de•••@example.com</strong></div><div class="detail-item"><span>国家/地区</span><strong>United States</strong></div><div class="detail-item"><span>风险等级</span><strong>${status(t.risk)}</strong></div></div></section><div class="drawer-danger"><div><strong>退款操作</strong><p>退款将返回原支付方式，提交前需要二次确认。</p></div><button class="button danger small" data-action="refund" data-id="${t.id}">发起退款</button></div>`;
  } else if (type === 'dispute') {
    const d = disputes.find(x => x.id === id) || disputes[0];
    title.textContent = '争议详情';
    html = `<section class="dispute-detail-summary"><div><span>争议金额</span><strong>${d.amount} ${d.currency}</strong></div><div><span>争议/拒付</span><strong>${d.type}</strong></div><div><span>当前状态</span><strong>${status(d.status)}</strong></div></section>
      <section class="detail-section"><h3>争议信息</h3><div class="detail-grid dispute-detail-grid"><div class="detail-item"><span>争议编号</span><strong class="mono">${d.id}</strong></div><div class="detail-item"><span>争议时间</span><strong>${d.disputeTime}</strong></div><div class="detail-item detail-span-2"><span>争议原因</span><strong>${d.reason}</strong></div></div></section>
      <section class="detail-section"><h3>原交易信息</h3><div class="detail-grid dispute-detail-grid"><div class="detail-item"><span>交易编号</span><strong class="mono">${d.transactionId}</strong></div><div class="detail-item"><span>订单号</span><strong class="mono">${d.order}</strong></div><div class="detail-item"><span>交易金额</span><strong>${d.amount} ${d.currency}</strong></div><div class="detail-item"><span>支付方式</span><strong>${d.method}</strong></div><div class="detail-item"><span>交易时间</span><strong>${d.transactionTime}</strong></div><div class="detail-item"><span>交易币种</span><strong>${d.currency}</strong></div></div></section>`;
  } else {
    const a = alerts.find(x => x.id === id) || alerts[0];
    title.textContent = `预警 ${a.id}`;
    html = `<section class="detail-section"><h3>预警信息</h3><div class="detail-grid"><div class="detail-item"><span>Alert ID</span><strong class="mono">${a.id}</strong></div><div class="detail-item"><span>状态</span><strong>${status(a.status)}</strong></div><div class="detail-item"><span>来源</span><strong>${a.source}</strong></div><div class="detail-item"><span>类型</span><strong>${a.type}</strong></div><div class="detail-item"><span>交易金额</span><strong>${a.amount}</strong></div><div class="detail-item"><span>匹配状态</span><strong>${status(a.match)}</strong></div></div></section><section class="detail-section"><h3>匹配交易</h3><div class="detail-grid"><div class="detail-item"><span>订单号</span><strong>NX20261113-89341</strong></div><div class="detail-item"><span>卡号</span><strong>${a.card}</strong></div><div class="detail-item"><span>MID</span><strong>${a.mid}</strong></div><div class="detail-item"><span>建议动作</span><strong>核验后退款</strong></div></div></section><button class="button primary" data-action="process-alert">进入处理流程</button>`;
  }
  content.innerHTML = html;
  backdrop.hidden = false;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden','false');
}

function closeDrawer() {
  const drawer = document.querySelector('#detail-drawer');
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
  setTimeout(() => { document.querySelector('#drawer-backdrop').hidden = true; }, 180);
}

function openConfirm(title, copy) {
  document.querySelector('#modal-title').textContent = title;
  document.querySelector('#modal-copy').textContent = copy;
  document.querySelector('#modal-backdrop').hidden = false;
  const modal = document.querySelector('#confirm-modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}

let activeRefundTransaction = null;

function validateRefund() {
  const amount = Number(document.querySelector('#refund-amount').value);
  const reason = document.querySelector('#refund-reason').value;
  const max = activeRefundTransaction ? Number(activeRefundTransaction.amount) : 0;
  document.querySelector('#refund-confirm').disabled = !(amount > 0 && amount <= max && reason);
}

function openRefund(id) {
  activeRefundTransaction = transactions.find(x => x.id === id) || transactions.find(x => x.status === 'success') || transactions[0];
  const amount = document.querySelector('#refund-amount');
  document.querySelector('#refund-currency').textContent = activeRefundTransaction.currency;
  document.querySelector('#refund-limit').textContent = `${Number(activeRefundTransaction.amount).toFixed(2)} ${activeRefundTransaction.currency}`;
  amount.value = '';
  amount.max = activeRefundTransaction.amount;
  document.querySelector('#refund-reason').value = '';
  document.querySelector('#refund-note').value = '';
  document.querySelector('#refund-confirm').disabled = true;
  document.querySelector('#refund-backdrop').hidden = false;
  const modal = document.querySelector('#refund-modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  closeDrawer();
  setTimeout(() => amount.focus(), 0);
}

function closeRefund() {
  const modal = document.querySelector('#refund-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  activeRefundTransaction = null;
  setTimeout(() => { document.querySelector('#refund-backdrop').hidden = true; }, 160);
}

function handleAction(action, id) {
  if (action === 'refund') { openRefund(id); return; }
  if (action === 'customize-columns') { showToast('已保留原有自定义列入口'); return; }
  if (action === 'unavailable-settlement') { showToast('系统暂无权限，如需开通请联系客户经理开通'); return; }
  const messages = {
    'process-alert': ['进入预警处理？','静态原型仅展示交互层级，不会更新预警状态。'],
    'pause-source': ['确认暂停该预警来源？','暂停后将不再接收该描述符的预警。静态演示不会产生真实变更。'],
    'delete-account': ['确认删除子账号？','该动作应要求二次确认。静态演示不会删除任何账号。'],
    'accept-dispute': ['确认接受争议？','接受后通常无法撤销。静态演示不会提交任何操作。']
  };
  const message = messages[action];
  if (message) openConfirm(message[0], message[1]);
}

function closeConfirm() {
  const modal = document.querySelector('#confirm-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  setTimeout(() => { document.querySelector('#modal-backdrop').hidden = true; }, 160);
}

function bindPageActions() {
  app.querySelectorAll('[data-page-jump]').forEach(button => button.addEventListener('click', () => render(button.dataset.pageJump)));
  app.querySelectorAll('[data-dispute-detail]').forEach(button => button.addEventListener('click', () => {
    activeDisputeDetailId = button.dataset.disputeDetail;
    render('dispute-detail');
  }));
  app.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => openDrawer(button.dataset.detail, button.dataset.id)));
  app.querySelectorAll('[data-dashboard-trend]').forEach(button => button.addEventListener('click', () => {
    const mode = button.dataset.dashboardTrend;
    app.querySelectorAll('[data-dashboard-trend]').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    document.querySelector('#dashboard-trend-title').textContent = mode === 'risk' ? '风控预警趋势' : '交易额（美元）';
    document.querySelector('#dashboard-trend-chart').innerHTML = chartSvg(mode);
  }));
  app.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', () => handleAction(button.dataset.action, button.dataset.id)));
  app.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => { try { await navigator.clipboard.writeText(button.dataset.copy); } catch {} showToast('演示内容已复制'); }));
  app.querySelectorAll('.segmented button').forEach(button => button.addEventListener('click', () => { button.parentElement.querySelectorAll('button').forEach(x => x.classList.remove('active')); button.classList.add('active'); }));
  app.querySelectorAll('[data-log-id]').forEach(row => row.addEventListener('click', () => {
    const entry = logEntries.find(x => x.id === row.dataset.logId);
    app.querySelectorAll('[data-log-id]').forEach(x => x.classList.remove('active')); row.classList.add('active');
    document.querySelector('#log-detail-id').textContent = entry.id;
    document.querySelector('#log-meta').innerHTML = `<div><span>订单号</span><strong>${entry.order}</strong></div><div><span>Merchant ID</span><strong>${entry.merchant}</strong></div><div><span>响应状态</span><strong>${entry.code}</strong></div><div><span>耗时</span><strong>${entry.duration}</strong></div>`;
    document.querySelector('#json-view').innerHTML = logJson(entry);
  }));
}

navItems.forEach(button => button.addEventListener('click', () => render(button.dataset.page)));
document.querySelector('[data-action="unavailable-settlement"]')?.addEventListener('click', () => handleAction('unavailable-settlement'));
document.querySelectorAll('.nav-parent').forEach(button => button.addEventListener('click', () => {
  const group = button.closest('.nav-group');
  if (button.querySelector('.nav-lock')) { showToast('该模块当前未开通'); return; }
  group.classList.toggle('open');
}));
document.querySelectorAll('.nav-subparent').forEach(button => button.addEventListener('click', () => {
  if (button.dataset.page) return;
  const group = button.closest('.nav-subgroup');
  if (group) group.classList.toggle('open');
}));

const settingsMenuToggle = document.querySelector('#settings-menu-toggle');
const settingsMenu = document.querySelector('#settings-menu');

function closeSettingsMenu() {
  if (!settingsMenu) return;
  settingsMenu.hidden = true;
  settingsMenuToggle.setAttribute('aria-expanded', 'false');
}

settingsMenuToggle.addEventListener('click', event => {
  event.stopPropagation();
  settingsMenu.hidden = !settingsMenu.hidden;
  settingsMenuToggle.setAttribute('aria-expanded', String(!settingsMenu.hidden));
});

settingsMenu.querySelectorAll('[data-settings-page]').forEach(button => button.addEventListener('click', () => {
  closeSettingsMenu();
  render('settings');
}));

settingsMenu.querySelector('[data-settings-action="logout"]').addEventListener('click', () => {
  closeSettingsMenu();
  showLogin();
});

document.addEventListener('click', event => {
  if (!event.target.closest('.settings-menu-wrap')) closeSettingsMenu();
});
document.querySelector('#drawer-close').addEventListener('click', closeDrawer);
document.querySelector('#drawer-backdrop').addEventListener('click', closeDrawer);
document.querySelector('#detail-drawer').addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (button) handleAction(button.dataset.action, button.dataset.id);
});
document.querySelector('#modal-cancel').addEventListener('click', closeConfirm);
document.querySelector('#modal-backdrop').addEventListener('click', closeConfirm);
document.querySelector('#modal-confirm').addEventListener('click', () => { closeConfirm(); showToast('静态演示：未产生真实操作'); });
document.querySelector('#refund-close').addEventListener('click', closeRefund);
document.querySelector('#refund-cancel').addEventListener('click', closeRefund);
document.querySelector('#refund-backdrop').addEventListener('click', closeRefund);
document.querySelector('#refund-full').addEventListener('click', () => {
  if (!activeRefundTransaction) return;
  document.querySelector('#refund-amount').value = Number(activeRefundTransaction.amount).toFixed(2);
  validateRefund();
});
document.querySelector('#refund-amount').addEventListener('input', validateRefund);
document.querySelector('#refund-reason').addEventListener('change', validateRefund);
document.querySelector('#refund-confirm').addEventListener('click', () => {
  if (document.querySelector('#refund-confirm').disabled) return;
  closeRefund();
  showToast('静态演示：未提交真实退款');
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') { closeDrawer(); closeConfirm(); closeRefund(); closeSettingsMenu(); }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    const search = document.querySelector('.search-control');
    if (search) { event.preventDefault(); search.focus(); }
  }
});
function showLogin(clearSession = true) {
  if (clearSession) isAuthenticated = false;
  appShell.hidden = true;
  loginScreen.hidden = false;
  loginError.hidden = true;
  loginPassword.value = '';
  if (location.hash !== '#login') history.replaceState(null, '', '#login');
  setTimeout(() => loginAccount.focus(), 0);
}

function showConsole(page = 'dashboard') {
  isAuthenticated = true;
  loginScreen.hidden = true;
  appShell.hidden = false;
  render(page === 'login' ? 'dashboard' : page, true);
}

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const valid = loginAccount.value.trim() === 'test' && loginPassword.value === 'test';
  loginError.hidden = valid;
  loginAccount.setAttribute('aria-invalid', String(!valid));
  loginPassword.setAttribute('aria-invalid', String(!valid));
  if (valid) showConsole('dashboard');
  else loginPassword.focus();
});

window.addEventListener('hashchange', () => {
  const page = location.hash.slice(1);
  if (page === 'login') { showLogin(); return; }
  if (isAuthenticated) render(page || 'dashboard', false);
  else showLogin(false);
});

const initialPage = location.hash.slice(1);
showLogin(initialPage === 'login');
