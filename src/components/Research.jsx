'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const ORCID = 'https://orcid.org/0009-0009-7786-8549';

const papers = [
  {
    title: 'Fair on Paper: What a Prop-Firm Challenge Is Worth, and Who Pays for It',
    venue: 'Working paper',
    year: '2026',
    labels: ['Pre-registered', 'Fully reproducible'],
    figure: '/assets/fair-on-paper.png',
    figureAlt:
      'Two charts from the paper: the probability of passing both evaluation steps, and expected payouts per $10,000 account, against risk per trade for buyers of different skill.',
    summary:
      "Prices a named UK prop firm's published evaluation contract on twenty years of intraday index prices at measured broker costs, with every hypothesis fixed and time-stamped before its run. The written rules are close to a fair bet for a disciplined buyer with no skill, and the price list does not follow contract value: one plan sells the same targets and limits as another at half the price. The seller's margin comes from how buyers size and trade, not from the rules.",
    stats: [
      { value: '20 years', label: 'of intraday index prices' },
      { value: '9', label: 'contracts on the price list priced' },
      { value: '24', label: 'hypotheses registered before running' },
    ],
    links: [
      {
        label: 'Read the paper',
        href: 'https://github.com/coderback/prop-challenge-pricing/blob/main/paper/prop_contract/main.pdf',
        primary: true,
      },
      { label: 'Reproduction package (DOI)', href: 'https://doi.org/10.5281/zenodo.23374897' },
      { label: 'Code', href: 'https://github.com/coderback/prop-challenge-pricing' },
      { label: 'Interactive summary', href: 'https://fair-on-paper.vercel.app' },
    ],
  },
  {
    title:
      'News Timing Cannot Explain It: A Pre-registered Replication of Zhang (2025), "Interpretable Machine Learning for Macro Alpha"',
    venue: 'SSRN Working Paper 7683159',
    year: '2026',
    labels: ['Pre-registered', 'Replication', 'Not replicated'],
    figure: '/assets/zhang-replication.png',
    figureAlt:
      'Chart comparing the Sharpe ratios reported by Zhang (2025) with the replication: every pre-registered news timing variant sits near zero, inside the band of random-sign strategies.',
    summary:
      "Zhang (2025) reported cost-adjusted Sharpe ratios of 4.65 to 5.87 from FinBERT sentiment on GDELT headlines. Following the paper's filter, assets, features, models, validation and costs, none of 18 asset, timing and model combinations beats random-sign trading at the same costs, and a variant given the next day's news earns nothing either. A post hoc one-row shift in a lagged price feature gives Sharpe ratios of 15 to 18, a candidate explanation for the original result.",
    stats: [
      { value: '4.65 to 5.87', label: 'Sharpe ratios reported' },
      { value: '−1.00 to +0.02', label: 'Sharpe ratios on replication' },
      { value: '237,618', label: 'headlines scored with FinBERT' },
    ],
    links: [
      { label: 'Read on SSRN', href: 'https://doi.org/10.2139/ssrn.7683159', primary: true },
      { label: 'Replication package (DOI)', href: 'https://doi.org/10.5281/zenodo.24087562' },
      { label: 'Code', href: 'https://github.com/coderback/zhang2025-replication' },
      { label: 'Interactive summary', href: 'https://zhang2025-replication.vercel.app' },
    ],
  },
];

function PaperLink({ link }) {
  const Icon = link.primary ? DocumentTextIcon : ArrowTopRightOnSquareIcon;
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${link.primary ? 'btn-primary' : 'btn-outline'} text-sm px-4 py-2 whitespace-nowrap`}
    >
      <span className="flex items-center gap-2">
        <Icon className="w-4 h-4" aria-hidden="true" />
        {link.label}
      </span>
    </a>
  );
}

function PaperCard({ paper, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm"
    >
      <div className="grid grid-cols-1 xl:grid-cols-5">
        {/* The figures are white-background charts, so keep a white panel in dark mode too. */}
        <div className="xl:col-span-2 bg-white flex justify-center p-4 sm:p-6 xl:pt-10 border-b xl:border-b-0 xl:border-r border-gray-200 dark:border-gray-700">
          <Image
            src={paper.figure}
            alt={paper.figureAlt}
            width={1100}
            height={520}
            sizes="(min-width: 1280px) 460px, 100vw"
            className="w-full h-auto max-h-80 xl:max-h-none object-contain object-top"
          />
        </div>

        <div className="xl:col-span-3 p-6 sm:p-8 flex flex-col">
          <p className="text-sm font-semibold text-forest-dark dark:text-forest-light">
            {paper.venue} · {paper.year}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold font-spartan leading-snug mt-2">{paper.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">T. O. Ojebiyi</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {paper.labels.map((label) => (
              <span
                key={label}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-700 dark:bg-neutral-700 dark:text-gray-200"
              >
                {label}
              </span>
            ))}
          </div>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mt-4">{paper.summary}</p>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
            {paper.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-gray-50 dark:bg-neutral-900 px-4 py-3">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-lg font-bold font-spartan">{stat.value}</span>
                  <span className="block text-xs text-gray-600 dark:text-gray-400 mt-0.5">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-3 mt-6">
            {paper.links.map((link) => (
              <PaperLink key={link.href} link={link} />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Research() {
  return (
    <section id="research" className="px-4 sm:px-6 md:px-16 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 sm:mb-14"
      >
        <p className="text-lg font-light">Read my</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-spartan">Research and writing</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
          Pre-registered empirical finance, with every plan committed before its run and a package that reproduces
          each result.{' '}
          <a
            href={ORCID}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-forest-dark dark:text-forest-light underline underline-offset-4 hover:no-underline"
          >
            ORCID profile
          </a>
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-8">
        {papers.map((paper, index) => (
          <PaperCard key={paper.title} paper={paper} index={index} />
        ))}
      </div>
    </section>
  );
}
