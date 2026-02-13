import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Card } from './Card';
import { List } from './List';
import { Button } from './Button';
import { BottomNavigation } from './BottomNavigation';
import { AlertCircleIcon, CheckCircleIcon } from './icons';
import { defaultBottomNavItems, screenMainStyles, screenRootStyles } from './screen-layout';

const meta: Meta = {
  title: 'Screens/2. Account Verification',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Screen for choosing a verification method (KYC) on mobile.

Built entirely from existing components:

- \`Header\` for the top bar with back & close actions.
- \`Card\` for each verification provider.
- \`List\` for requirement checklists.
- \`Button\` for primary/secondary actions.

Use this as a reference for composing cards and lists in a vertical, mobile-first layout.
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj;

type RequirementListProps = {
  items: string[];
};

const RequirementList: React.FC<RequirementListProps> = ({ items }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-1)',
        marginTop: 'var(--space-2)',
      }}
    >
      {items.map((item) => (
        <List
          key={item}
          title={item}
          showDescription={false}
          showMeta={false}
          showChevron={false}
          bordered={false}
          filled={false}
          leading={
            <span
              className="tipico-list__leading-icons"
              style={{ color: 'rgb(var(--signals-text-positive))' }}
            >
              <span className="tipico-list__leading-icon tipico-list__leading-icon--primary">
                <CheckCircleIcon size={16} />
              </span>
            </span>
          }
        />
      ))}
    </div>
  );
};

type VerificationCardProps = {
  brand: string;
  title: string;
  description: string;
  requirements: string[];
  actionLabel: string;
  variant?: 'primary' | 'secondary';
  note?: string;
};

const VerificationCard: React.FC<VerificationCardProps> = ({
  brand,
  title,
  description,
  requirements,
  actionLabel,
  variant = 'secondary',
  note,
}) => {
  const isPrimary = variant === 'primary';

  return (
    <Card variant={isPrimary ? 'shadow' : 'bordered'}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-3)',
          }}
        >
          <div
            style={{
              fontSize: 'var(--text-xl)',
              lineHeight: 'var(--text-xl--line-height)',
              fontWeight: 'var(--font-semibold)',
              letterSpacing: '-0.02em',
            }}
          >
            {brand}
          </div>

          {isPrimary && note && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-1)',
                padding: '0 var(--space-2)',
                height: '1.5rem',
                borderRadius: '999px',
                background: 'rgb(var(--bg-interaction-default))',
                fontSize: 'var(--text-xs)',
                lineHeight: 'var(--text-xs--line-height)',
                fontWeight: 'var(--font-medium)',
                color: 'rgb(var(--signals-text-positive))',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AlertCircleIcon size={14} />
              </span>
              <span>{note}</span>
            </div>
          )}
        </div>

        <div>
          <div
            style={{
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--text-base--line-height)',
              fontWeight: 'var(--font-semibold)',
              marginBottom: 'var(--space-1)',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 'var(--text-sm)',
              lineHeight: 'var(--text-sm--line-height)',
              color: 'rgb(var(--text-subtile))',
            }}
          >
            {description}
          </div>
          <RequirementList items={requirements} />
        </div>

        <Button
          variant={isPrimary ? 'primary' : 'secondary'}
          fullWidth
          style={{ marginTop: 'var(--space-2)' }}
        >
          {actionLabel}
        </Button>
      </div>
    </Card>
  );
};

export const Overview: Story = {
  render: () => {
    return (
      <div style={screenRootStyles}>
        <Header title="Kontoverifizierung" showBackButton showCloseButton />

        <main style={screenMainStyles}>
          <section>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                lineHeight: 'var(--text-sm--line-height)',
                color: 'rgb(var(--text-standard))',
                margin: 0,
              }}
            >
              Deine Daten sind bei uns geschützt und werden nur zu
              Verifizierungszwecken genutzt. Wähle eine Methode:
            </p>
          </section>

          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
            }}
          >
            <VerificationCard
              brand="tipico"
              title="Foto von Ausweis und Selfie"
              description="Du brauchst keine extra App."
              requirements={['Personalausweis', 'Reisepass', 'Aufenthaltstitel']}
              actionLabel="Verifizierung starten"
              variant="primary"
              note="RECOMMENDED"
            />

            <VerificationCard
              brand="Nitek"
              title="Foto von Ausweis und Selfie"
              description="Du brauchst die IDnow-App."
              requirements={['Personalausweis', 'Reisepass', 'Aufenthaltstitel']}
              actionLabel="Auswählen"
            />

            <VerificationCard
              brand="AUTHADA"
              title="Online-Ausweis scannen (eID)"
              description="Dafür brauchst du die Online-Funktion deines Ausweises."
              requirements={[
                'Online-Ausweis (eID)',
                '6-stellige PIN',
                'Authada-App notwendig',
              ]}
              actionLabel="Auswählen"
            />

            <VerificationCard
              brand="IDnow."
              title="Video-Chat"
              description="Du sprichst mit einem Mitarbeiter von IDnow per Videoanruf und brauchst die IDnow-App."
              requirements={['Personalausweis', 'Reisepass', 'Aufenthaltstitel']}
              actionLabel="Auswählen"
            />
          </section>
        </main>

        <BottomNavigation
          items={defaultBottomNavItems}
          activeId="profile"
          onSelect={() => {}}
        />
      </div>
    );
  },
};

