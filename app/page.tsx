'use client';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';
import { Switch } from './ui/Switch';
import { useTheme } from './theme/ThemeProvider';

export default function Page() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="container">
      <header className="header">
        <h1>DS ? Minimal Design System</h1>
        <div className="header-actions">
          <Badge>{theme === 'light' ? 'Light' : 'Dark'}</Badge>
          <Switch checked={theme === 'dark'} onChange={toggleTheme} ariaLabel="Toggle theme" />
        </div>
      </header>

      <section className="grid">
        <Card title="Buttons">
          <div className="row">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Card>

        <Card title="Inputs">
          <div className="column">
            <label className="label">Email</label>
            <Input placeholder="name@example.com" type="email" />
            <label className="label">Password</label>
            <Input placeholder="????????" type="password" />
          </div>
        </Card>

        <Card title="Badges">
          <div className="row">
            <Badge>Default</Badge>
            <Badge color="green">Success</Badge>
            <Badge color="amber">Warning</Badge>
            <Badge color="red">Error</Badge>
            <Badge color="blue">Info</Badge>
          </div>
        </Card>
      </section>

      <footer className="footer">
        <span>Built with Next.js ? No CSS frameworks</span>
      </footer>
    </main>
  );
}

