import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z.object({
    reportNumber: z.string(),
    title: z.string(),
    author: z.string(),
    authorUrl: z.string().optional(),
    date: z.string(),
    formattedDate: z.string(),
    disciplines: z.string(),
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
    bibtex: z.string(),
    bibtexId: z.string(),
    order: z.number().default(1),
  }),
});

export const collections = { reports };
