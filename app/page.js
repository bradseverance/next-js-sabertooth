import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to Saber Tooth</h1>
      <p>Quick Links:</p>
      <ul className="bulleted-list">
        <li><Link href="/schedule/cell-schedule">Cell Schedule</Link></li>
        <li><Link href="/extrusion/manage-all-extrusion-lines">Manage All Extrusion Lines</Link></li>
        <li><Link href="/warehouse/bin-management">Bin Management</Link></li>
        <li><Link href="/shipping/orders-to-ship">Orders To Ship</Link></li>
        <li><Link href="/materials/bill-of-materials-viewer">Bill of Materials Viewer</Link></li>
        <li><Link href="/returns/returns-management">Returns Management</Link></li>
        <li><Link href="/labels/print-labels">Print Labels</Link></li>
        <li><Link href="/settings/persistent-increment-list">List Persistent Increments</Link></li>
        <li><Link href="/settings/pallet">Pallets</Link></li>
      </ul>
    </>
  );
}
