"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const CODE_SNIPPETS = [
  'const { governance } = usePlatform();',
  'import { validate } from "cb-engine";',
  'await scan.repository(path);',
  'export function ScoreMetric() {',
  'if (violation.severity === "high") {',
  'yield* architecture.walk();',
  'return <GovernanceDashboard />',
  'class ArchitectureSchema extends Base {}',
  'const [health, setHealth] = useState(0);',
  'module.exports = { rules: [] };'
];

export function CodeBackground() {
  const columns = useMemo(() => Array.from({ length: 12 }), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] select-none">
      <div className="flex justify-around w-full h-full">
        {columns.map((_, i) => (
          <div key={i} className="flex flex-col gap-8 h-full">
            <motion.div
              animate={{
                y: [0, -1000]
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex flex-col gap-8"
            >
              {[...Array(20)].map((_, j) => (
                <div key={j} className="whitespace-nowrap font-mono text-xs text-primary font-bold">
                  {CODE_SNIPPETS[(i + j) % CODE_SNIPPETS.length]}
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
