import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const GITHUB_URL = 'https://github.com/hikyakuorg';

function ArrowIcon({size = 17}: {size?: number}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4.2 7.6 7.8 4.4 7.8-4.4M12 21v-9" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function DepotIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 9.5V20h13V9.5" />
    </svg>
  );
}

function DispatchIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 20.5 21 12 3.5 3.5l3 8.5-3 8.5Z" />
      <path d="M6.5 12H21" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="19" r="2.4" />
      <circle cx="18" cy="5" r="2.4" />
      <path d="M8.4 19H15a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h6.6" transform="rotate(180 12 11)" />
    </svg>
  );
}

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  const runnerUrl = useBaseUrl('/img/hikyaku_icon.png');
  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroGrid)}>
        <div>
          <div className={styles.eyebrow}>Hikyaku Documentation</div>
          <Heading as="h1" className={clsx(styles.display, styles.heroTitle)}>
            {siteConfig.tagline}
            <span className={styles.heroDot}>.</span>
          </Heading>
          <p className={styles.lede}>
            Everything you need to install, configure, and run Hikyaku — the
            self-hostable platform for dispatchers, drivers, and the customers
            waiting at the door.
          </p>
          <div className={styles.ctas}>
            <Link className={styles.btnPill} to="/docs/intro">
              Begin the route <ArrowIcon />
            </Link>
            <Link className={styles.linkPlain} href={GITHUB_URL}>
              View on GitHub
            </Link>
          </div>
        </div>

        <div className={styles.constellation} aria-hidden="true">
          <svg
            className={styles.wires}
            viewBox="0 0 560 460"
            fill="none"
            preserveAspectRatio="xMidYMid meet">
            <g strokeWidth="2.5" strokeDasharray="2 9" strokeLinecap="round">
              <path d="M280 210 L72 78" />
              <path d="M280 190 L468 58" />
              <path d="M270 250 L46 360" />
              <path d="M300 250 L500 396" />
              <path d="M160 36 L240 130" />
              <path d="M388 432 L322 320" />
              <path d="M92 244 L190 226" />
            </g>
          </svg>
          <img className={styles.runner} src={runnerUrl} alt="" />
          <span className={clsx(styles.node, styles.nodeIcon, styles.n1)}>
            <PackageIcon />
          </span>
          <span className={clsx(styles.node, styles.nodeIcon, styles.n2)}>
            <PinIcon />
          </span>
          <span className={clsx(styles.node, styles.nodeIcon, styles.n3)}>
            <DepotIcon />
          </span>
          <span className={clsx(styles.node, styles.nodeIcon, styles.n4)}>
            <DispatchIcon />
          </span>
          <span className={clsx(styles.node, styles.nodeDot, styles.d1)} />
          <span className={clsx(styles.node, styles.nodeDot, styles.d2)} />
          <span className={clsx(styles.node, styles.nodeDot, styles.d3)} />
        </div>
      </div>
    </header>
  );
}

function Heritage() {
  return (
    <section className={styles.heritage}>
      <div className="container">
        <div className={styles.eyebrow}>Why “Hikyaku”?</div>
        <blockquote className={styles.quote}>
          Hikyaku were the express couriers of old Japan — relay runners who
          carried parcels between stations, <em>station to station, hand to
          hand.</em>
        </blockquote>
        <span className={styles.quoteCite}>
          Your deliveries run the same relay. These docs are the stations.
        </span>
      </div>
    </section>
  );
}

type Station = {
  title: string;
  description: string;
  linkLabel: string;
  to: string;
};

const STATIONS: Station[] = [
  {
    title: 'Get started',
    description:
      'What Hikyaku is and how the dashboard, driver app, and portal fit together.',
    linkLabel: 'Introduction',
    to: '/docs/intro',
  },
  {
    title: 'Installation',
    description:
      'Supabase, the web frontend, the scheduler, and the mobile app — in order.',
    linkLabel: 'Install guides',
    to: '/docs/installation/supabase-setup',
  },
  {
    title: 'Dispatch & operations',
    description:
      'Book packages, optimise routes, run shifts, capture proof of delivery.',
    linkLabel: 'Operate',
    to: '/docs/dispatch-and-operations',
  },
  {
    title: 'Service areas',
    description: 'Define where you deliver and what each service costs.',
    linkLabel: 'Configure',
    to: '/docs/service-areas',
  },
  {
    title: 'Security & access',
    description:
      'Roles, permissions, and row-level security for your organisation.',
    linkLabel: 'Protect',
    to: '/docs/security-and-access',
  },
];

function RelayRoute() {
  return (
    <section className={styles.route}>
      <div className="container">
        <div className={styles.routeHead}>
          <Heading as="h2" className={clsx(styles.display, styles.routeTitle)}>
            Five stations from clone to delivery
          </Heading>
          <p>Follow them in order, or jump to the station you need.</p>
        </div>
        <div className={styles.stations}>
          {STATIONS.map((station, idx) => (
            <div className={styles.station} key={station.to}>
              <span className={styles.badge}>{idx + 1}</span>
              <Heading as="h3">{station.title}</Heading>
              <p>{station.description}</p>
              <Link className={styles.stationLink} to={station.to}>
                {station.linkLabel} <ArrowIcon size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChoiceCards() {
  return (
    <section className={styles.choice}>
      <div className={clsx('container', styles.choiceGrid)}>
        <div className={styles.choiceIntro}>
          <Heading as="h2" className={clsx(styles.display, styles.choiceTitle)}>
            Get started in minutes, not days
          </Heading>
          <p>
            Pick your starting point. Self-host the whole platform from the
            repository, or learn the day-to-day flow your dispatchers and
            drivers will live in.
          </p>
        </div>
        <div className={styles.ccard}>
          <span className={styles.cicon}>
            <ServerIcon />
          </span>
          <Heading as="h3" className={clsx(styles.display, styles.ccardTitle)}>
            I want to self-host Hikyaku
          </Heading>
          <p>
            Stand up Supabase, the web frontend, the scheduler, and the driver
            app — four guides, in order.
          </p>
          <Link className={styles.btnPill} to="/docs/installation/supabase-setup">
            Installation <ArrowIcon size={16} />
          </Link>
        </div>
        <div className={styles.ccard}>
          <span className={styles.cicon}>
            <RouteIcon />
          </span>
          <Heading as="h3" className={clsx(styles.display, styles.ccardTitle)}>
            I want to run my deliveries
          </Heading>
          <p>
            Book packages, optimise routes in one click, run driver shifts, and
            capture proof of delivery.
          </p>
          <Link className={styles.btnPill} to="/docs/dispatch-and-operations">
            Dispatch &amp; operations <ArrowIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className={styles.closing}>
      <div className="container">
        <Heading as="h2" className={clsx(styles.display, styles.closingTitle)}>
          Carry your own parcels. <em>Own your own platform.</em>
        </Heading>
        <p>
          Hikyaku is open source and self-hostable — clone the repository and
          make the first station today.
        </p>
        <div className={styles.ctas}>
          <Link className={styles.btnPill} to="/docs/intro">
            Begin the route <ArrowIcon />
          </Link>
          <Link className={styles.linkPlain} href={GITHUB_URL}>
            Star on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout description="Documentation for Hikyaku, the open operating system for delivery teams — install it, configure it, and run your dispatch, drivers, and deliveries on it.">
      <main className={styles.page}>
        <HomepageHero />
        <Heritage />
        <RelayRoute />
        <ChoiceCards />
        <Closing />
      </main>
    </Layout>
  );
}
