const I={
 building:'<path d="M4 21V5l8-3 8 3v16M2 21h20M8 8h2M14 8h2M8 12h2M14 12h2M10 21v-4h4v4"/>',
 people:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.5c3 0 6 2 6 5.5"/>',
 cycle:'<path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
 pyramid:'<path d="M12 3L2.5 20h19z"/><path d="M8.2 10.5h7.6M5.5 15.2h13"/>',
 chart:'<path d="M4 20V10M9.5 20V4M15 20v-7M20.5 20V8M2 20h20"/>',
 gear:'<circle cx="12" cy="12" r="3.5"/><circle cx="12" cy="12" r="7.5" stroke-dasharray="3.2 2.7" stroke-width="3.2"/>',
 sprout:'<path d="M12 21v-9"/><path d="M12 14C7 14 4.5 11 4.5 6.5 9 6.5 12 9 12 14z"/><path d="M12 12c0-4.5 3-7 7.5-7 0 4.5-3 7-7.5 7z"/>',
 scales:'<path d="M12 3v17M7 20h10M4 7h16"/><path d="M4 7l-2.5 6h5zM20 7l-2.5 6h5z"/>',
 factory:'<path d="M3 21V10l5 3v-3l5 3V5h4v16zM1.5 21h21M17 9h4v12"/>',
 question:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.3a2.6 2.6 0 1 1 3.6 2.4c-.8.4-1.1.9-1.1 1.8"/><path d="M12 17h.01"/>',
 data:'<ellipse cx="12" cy="5.5" rx="7.5" ry="2.8"/><path d="M4.5 5.5v6c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8v-6M4.5 11.5v6c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8v-6"/>',
 doc:'<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h8M9 17h6"/>',
 split:'<circle cx="12" cy="4.5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="12" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 6.7v10M12 11l-6 6M12 11l6 6"/>',
 grad:'<path d="M1.5 9L12 4l10.5 5L12 14z"/><path d="M6 11.2V16c3.3 2.4 8.7 2.4 12 0v-4.8M21 10v5"/>',
 copies:'<rect x="3" y="7" width="12" height="14" rx="2"/><path d="M7 4h11a2 2 0 0 1 2 2v12"/>',
 link:'<rect x="2" y="8" width="11" height="8" rx="4"/><rect x="11" y="8" width="11" height="8" rx="4"/>',
 hand:'<circle cx="8" cy="7" r="3"/><circle cx="16" cy="7" r="3"/><path d="M2.5 20c0-3.3 2.5-6 5.5-6 1.6 0 3 .7 4 1.9 1-1.2 2.4-1.9 4-1.9 3 0 5.5 2.7 5.5 6"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
 id:'<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><circle cx="8.5" cy="11" r="2.3"/><path d="M5 16c.6-1.6 2-2.4 3.5-2.4S11.4 14.4 12 16M14.5 10h4M14.5 13.5h3"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
 pie:'<path d="M12 3a9 9 0 1 0 9 9h-9z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/>',
 cart:'<path d="M2 3h3l2.5 12h11l2-8H6.5"/><circle cx="9" cy="19.5" r="1.6"/><circle cx="17" cy="19.5" r="1.6"/>',
 bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3z"/>',
 check:'<circle cx="12" cy="12" r="10"/><path d="M7.5 12.5l3 3 6-6.5"/>',
 x:'<circle cx="12" cy="12" r="10"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7"/>',
 lock:'<rect x="4.5" y="10.5" width="15" height="10.5" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
 moon:'<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>',
 brain:'<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
 phone:'<rect x="6.5" y="2" width="11" height="20" rx="2.5"/><path d="M10.5 18.5h3"/>',
 flask:'<path d="M9 2.5h6M10 2.5v6L4.5 19a2 2 0 0 0 1.8 2.9h11.4a2 2 0 0 0 1.8-2.9L14 8.5v-6"/><path d="M7 15h10"/>',
 leaf:'<path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15z"/><path d="M5 19l8-8"/>'
};
const ic=(k,cls="")=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}" aria-hidden="true">${I[k]}</svg>`;

const arrowDef=id=>`<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="f-c"/></marker></defs>`;

