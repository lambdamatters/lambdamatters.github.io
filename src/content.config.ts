import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z.object({
    reportNumber: z.string(),
    reportType: z.string().default('Technical Report'),
    title: z.string(),
    author: z.string(),
    authorUrl: z.string().optional(),
    institution: z.string().default('LambdaMatters'),
    date: z.string(),
    formattedDate: z.string(),
    disciplines: z.string(),
    summary: z.string().optional(),
    metrics: z.array(z.object({
      num: z.string(),
      label: z.string(),
    })),
    downloadUrl: z.string().optional(),
    downloadLabel: z.string().default('Download Report (PDF)'),
    repoUrl: z.string().optional(),
    repoLabel: z.string().optional(),
    authorEssayUrl: z.string().optional(),
    authorEssayLabel: z.string().optional(),
    benchmarkUrl: z.string().optional(),
    benchmarkLabel: z.string().optional(),
    isComingSoon: z.boolean().default(false),
    comingSoonText: z.string().optional(),
    tableData: z.object({
      title: z.string(),
      headers: z.array(z.string()),
      rows: z.array(z.array(z.string())),
      caption: z.string().optional(),
    }).optional(),
    references: z.array(z.string()).optional(),
    bibtex: z.string(),
    bibtexId: z.string(),
    order: z.number().default(1),
  }),
});

export const collections = { reports };
