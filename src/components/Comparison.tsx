import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MinusCircle, XCircle } from 'lucide-react';
import { fadeUp, viewport } from '../lib/animations';

const columns = [
  'Traders Queen 2.0',
  'Telegram signal groups',
  'Monthly paid indicators',
  'Free indicators',
];

const comparisonRows = [
  {
    label: 'One-time payment',
    values: ['Yes', 'Usually monthly', 'Monthly', 'Free'],
    status: ['yes', 'no', 'no', 'partial'],
  },
  {
    label: 'Full source code',
    values: ['Included', 'No', 'Rarely', 'No'],
    status: ['yes', 'no', 'no', 'no'],
  },
  {
    label: 'No repaint claim',
    values: ['Yes', 'Not verifiable', 'Varies', 'Varies'],
    status: ['yes', 'no', 'partial', 'partial'],
  },
  {
    label: 'Works on your own TradingView chart',
    values: ['Yes', 'No', 'Yes', 'Yes'],
    status: ['yes', 'no', 'yes', 'yes'],
  },
  {
    label: 'No dependency on a signal provider',
    values: ['Yes', 'No', 'Yes', 'Yes'],
    status: ['yes', 'no', 'yes', 'yes'],
  },
  {
    label: 'Lifetime access',
    values: ['Yes', 'No', 'Usually no', 'Yes'],
    status: ['yes', 'no', 'no', 'yes'],
  },
  {
    label: 'Setup support',
    values: ['Included', 'Limited', 'Varies', 'No'],
    status: ['yes', 'partial', 'partial', 'no'],
  },
];

const statusStyles = {
  yes: 'text-brand-teal',
  partial: 'text-amber-400',
  no: 'text-text-muted',
};

const StatusIcon = ({ status }: { status: string }) => {
  if (status === 'yes') {
    return <CheckCircle2 className="h-5 w-5" />;
  }

  if (status === 'partial') {
    return <MinusCircle className="h-5 w-5" />;
  }

  return <XCircle className="h-5 w-5" />;
};

export const Comparison = () => {
  return (
    <section id="comparison" className="py-16 md:py-24 px-6 bg-surface-base">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
            Compare before you buy
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-text-strong">
            Own the Tool. Don't Rent Signals.
          </h2>
          <p className="text-lg md:text-xl text-text-base max-w-2xl mx-auto leading-relaxed">
            Traders Queen 2.0 is built for traders who want transparent chart tools, source code access, and support without recurring fees.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-raised shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] text-left">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-elevated/70">
                  <th className="w-[28%] px-5 py-5 text-sm font-bold uppercase tracking-[0.18em] text-text-base">
                    Feature
                  </th>
                  {columns.map((column, index) => (
                    <th
                      key={column}
                      className={`px-5 py-5 text-sm font-bold uppercase tracking-[0.14em] ${
                        index === 0 ? 'text-brand-teal' : 'text-text-base'
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-border-subtle/70 last:border-b-0">
                    <td className="px-5 py-4 font-semibold text-text-strong">{row.label}</td>
                    {row.values.map((value, index) => (
                      <td
                        key={`${row.label}-${columns[index]}`}
                        className={`px-5 py-4 ${index === 0 ? 'bg-brand-teal/5' : ''}`}
                      >
                        <div className={`flex items-center gap-2 font-medium ${statusStyles[row.status[index] as keyof typeof statusStyles]}`}>
                          <StatusIcon status={row.status[index]} />
                          <span className="text-text-strong">{value}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-6 text-center text-sm text-text-muted"
        >
          No tool guarantees profits. Use Traders Queen 2.0 as a transparent decision-support indicator on your own chart.
        </motion.p>
      </div>
    </section>
  );
};
