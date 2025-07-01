import { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImage,
  Input,
  Modal,
  ModalHeader,
  Select,
  Checkbox,
  CheckboxGroup,
  ModalBody,
  ModalFooter,
  ToastProvider,
  useToast,
  ThemeProvider,
  useThemeContext,
  Loading,
  Grid,
  Divider,
  Typography,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarLink,
  ThemeSelector,
  Container,
  Section,
  Breadcrumb,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Alert,
  AlertTitle,
  AlertDescription,
  CodeBlock,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@velvet-ui/core';
import { themes } from '@velvet-ui/tokens';

function ToastDemo() {
  const { addToast } = useToast();

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        size="small"
        color="success"
        onClick={() =>
          addToast({
            variant: 'success',
            title: 'Success!',
            description: 'Your action was completed successfully',
          })
        }
      >
        Success Toast
      </Button>
      <Button
        size="small"
        variant="ghost"
        color="danger"
        onClick={() =>
          addToast({
            variant: 'error',
            title: 'Error',
            description: 'Something went wrong',
          })
        }
      >
        Error Toast
      </Button>
      <Button
        size="small"
        variant="ghost"
        color="warning"
        onClick={() =>
          addToast({
            variant: 'warning',
            title: 'Warning',
            description: 'Please be careful',
          })
        }
      >
        Warning Toast
      </Button>
    </div>
  );
}

function ThemeSelector() {
  const { theme, setTheme, themeName, setThemeName } = useThemeContext();

  return (
    <div className="flex items-center gap-4">
      {/* Theme Mode Selector */}
      <div className="flex gap-2">
        <Button
          variant={theme === 'light' ? 'solid' : 'ghost'}
          color="secondary"
          size="small"
          onClick={() => setTheme('light')}
        >
          Light
        </Button>
        <Button
          variant={theme === 'dark' ? 'solid' : 'ghost'}
          color="secondary"
          size="small"
          onClick={() => setTheme('dark')}
        >
          Dark
        </Button>
        <Button
          variant={theme === 'system' ? 'solid' : 'ghost'}
          color="secondary"
          size="small"
          onClick={() => setTheme('system')}
        >
          System
        </Button>
      </div>

      {/* Theme Preset Selector */}
      <Select
        value={themeName}
        onChange={(value) => setThemeName(value as any)}
        size="small"
        options={Object.entries(themes).map(([key, theme]) => ({
          value: key,
          label: theme.name
        }))}
      />
    </div>
  );
}

function AppContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputSize, setInputSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [inputValue, setInputValue] = useState('');
  const [inputDisabled, setInputDisabled] = useState(false);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [buttonSize, setButtonSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonLoadingText, setButtonLoadingText] = useState(false);
  const [buttonRadius, setButtonRadius] = useState<'none' | 'small' | 'medium' | 'large' | 'full'>('medium');
  const [loadingSize, setLoadingSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [cardInteractive, setCardInteractive] = useState(false);
  const [cardShowHeader, setCardShowHeader] = useState(true);
  const [cardShowFooter, setCardShowFooter] = useState(true);
  const [glowColor, setGlowColor] = useState<'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'>('primary');
  const [cardClickable, setCardClickable] = useState(false);
  const [cardDisableRipple, setCardDisableRipple] = useState(false);
  const [cardShowCoverImage, setCardShowCoverImage] = useState(false);
  const [cardShowDividers, setCardShowDividers] = useState(true);
  const [cardClickCount, setCardClickCount] = useState(0);
  const [selectedFramework, setSelectedFramework] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('medium');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [selectedPriority, setSelectedPriority] = useState<string>('');
  
  // Dropdown states
  const [dropdownSize, setDropdownSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [dropdownDisabled, setDropdownDisabled] = useState(false);
  const [dropdownRadius, setDropdownRadius] = useState<'none' | 'small' | 'medium' | 'large' | 'full'>('medium');
  const [dropdownLabelPlacement, setDropdownLabelPlacement] = useState<'' | 'top' | 'left' | 'inside'>('');
  const [dropdownHasPlaceholder, setDropdownHasPlaceholder] = useState(true);
  const [dropdownClearable, setDropdownClearable] = useState(false);
  
  // Checkbox states
  const [checkboxSize, setCheckboxSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [checkboxDisabled, setCheckboxDisabled] = useState(false);
  
  // CheckboxGroup states
  const [checkboxGroupValues, setCheckboxGroupValues] = useState<string[]>(['option1', 'option3']);
  const [checkboxGroupOrientation, setCheckboxGroupOrientation] = useState<'horizontal' | 'vertical'>('vertical');
  
  // Modal states
  const [modalSize, setModalSize] = useState<'small' | 'medium' | 'large' | 'xlarge' | 'full'>('medium');
  const [modalBackdrop, setModalBackdrop] = useState<'blur' | 'dark' | 'light' | 'none'>('blur');
  const [modalAnimation, setModalAnimation] = useState<'fade' | 'scale' | 'slide' | 'zoom' | 'flip'>('scale');
  const [modalScrollBehavior, setModalScrollBehavior] = useState<'inside' | 'outside'>('outside');
  const [modalCloseOnBackdrop, setModalCloseOnBackdrop] = useState(true);
  const [modalCloseOnEscape, setModalCloseOnEscape] = useState(true);
  const [demoModals, setDemoModals] = useState<Record<string, boolean>>({});

  const handleLoadingClick = (key: string) => {
    setLoadingStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <ToastProvider position="bottom-right">
      <div className="min-h-screen bg-[var(--color-background)] p-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <Typography variant="h1">
              Velvet UI Playground
            </Typography>
            <Typography variant="h5" color="muted">
              A modern React component library with smooth animations
            </Typography>
            
            {/* Theme Selector */}
            <div className="flex justify-center">
              <ThemeSelector />
            </div>
          </div>

          {/* Buttons Section */}
          <section className="space-y-6">
            <Typography variant="h2">Buttons</Typography>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Typography variant="h5">All Button Variants & Colors</Typography>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Size:</Typography>
                      <Select
                        value={buttonSize}
                        onChange={(value) => setButtonSize(value as any)}
                        size="small"
                        options={[
                          { value: 'small', label: 'Small' },
                          { value: 'medium', label: 'Medium' },
                          { value: 'large', label: 'Large' }
                        ]}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Radius:</Typography>
                      <Select
                        value={buttonRadius}
                        onChange={(value) => setButtonRadius(value as any)}
                        size="small"
                        options={[
                          { value: 'none', label: 'None' },
                          { value: 'small', label: 'Small' },
                          { value: 'medium', label: 'Medium' },
                          { value: 'large', label: 'Large' },
                          { value: 'full', label: 'Full' }
                        ]}
                      />
                    </div>
                    <Checkbox
                      size="small"
                      checked={buttonDisabled}
                      onChange={(e) => setButtonDisabled(e.target.checked)}
                      label="Disabled"
                    />
                    <Checkbox
                      size="small"
                      checked={buttonLoading}
                      onChange={(e) => setButtonLoading(e.target.checked)}
                      label="Loading"
                    />
                    <Checkbox
                      size="small"
                      checked={buttonLoadingText}
                      onChange={(e) => setButtonLoadingText(e.target.checked)}
                      disabled={!buttonLoading}
                      label="Loading Text"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-left font-medium">Variant</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Primary</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Secondary</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Success</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Warning</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Danger</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Info</Typography>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Solid variant row */}
                      <tr>
                        <td className="p-3"><Typography variant="body2" color="muted" weight="medium">Solid</Typography></td>
                        <td className="text-center p-3">
                          <Button 
                            variant="solid" 
                            color="primary" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="solid" 
                            color="secondary" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="solid" 
                            color="success" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="solid" 
                            color="warning" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="solid" 
                            color="danger" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="solid" 
                            color="info" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                      </tr>
                      {/* Outline variant row */}
                      <tr>
                        <td className="p-3"><Typography variant="body2" color="muted" weight="medium">Outline</Typography></td>
                        <td className="text-center p-3">
                          <Button 
                            variant="outline" 
                            color="primary" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="outline" 
                            color="secondary" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="outline" 
                            color="success" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="outline" 
                            color="warning" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="outline" 
                            color="danger" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="outline" 
                            color="info" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                      </tr>
                      {/* Ghost variant row */}
                      <tr>
                        <td className="p-3"><Typography variant="body2" color="muted" weight="medium">Ghost</Typography></td>
                        <td className="text-center p-3">
                          <Button 
                            variant="ghost" 
                            color="primary" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="ghost" 
                            color="secondary" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="ghost" 
                            color="success" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="ghost" 
                            color="warning" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="ghost" 
                            color="danger" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="ghost" 
                            color="info" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                      </tr>
                      {/* Glass variant row */}
                      <tr>
                        <td className="p-3"><Typography variant="body2" color="muted" weight="medium">Glass</Typography></td>
                        <td className="text-center p-3">
                          <Button 
                            variant="glass" 
                            color="primary" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="glass" 
                            color="secondary" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="glass" 
                            color="success" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="glass" 
                            color="warning" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="glass" 
                            color="danger" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="glass" 
                            color="info" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                      </tr>
                      {/* Glow variant row */}
                      <tr>
                        <td className="p-3"><Typography variant="body2" color="muted" weight="medium">Glow</Typography></td>
                        <td className="text-center p-3">
                          <Button 
                            variant="glow" 
                            color="primary" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="glow" 
                            color="secondary" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="glow" 
                            color="success" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="glow" 
                            color="warning" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="glow" 
                            color="danger" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                        <td className="text-center p-3">
                          <Button 
                            variant="glow" 
                            color="info" 
                            size={buttonSize} 
                            radius={buttonRadius} 
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                            loadingText={buttonLoadingText ? "Loading..." : undefined}
                          >
                            Button
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>

            {/* Buttons with Icons */}
            <Card>
              <CardHeader>
                <Typography variant="h5">Buttons with Icons</Typography>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <Typography variant="h6" color="muted">Begin & End Content</Typography>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="solid" 
                      color="primary"
                      beginContent={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      }
                    >
                      Continue
                    </Button>
                    <Button 
                      variant="solid" 
                      color="success"
                      endContent={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      }
                    >
                      Complete
                    </Button>
                    <Button 
                      variant="outline" 
                      color="secondary"
                      beginContent={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                      }
                      endContent={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="7 13 12 18 17 13"/>
                          <polyline points="7 6 12 11 17 6"/>
                        </svg>
                      }
                    >
                      Purchase
                    </Button>
                    <Button 
                      variant="ghost" 
                      color="danger"
                      beginContent={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"/>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                      }
                    >
                      Delete
                    </Button>
                  </div>

                  <Divider />

                  <Typography variant="h6" color="muted">Different Sizes with Icons</Typography>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button 
                      size="small"
                      variant="solid" 
                      color="primary"
                      beginContent={
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                      }
                    >
                      Small
                    </Button>
                    <Button 
                      size="medium"
                      variant="solid" 
                      color="secondary"
                      beginContent={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        </svg>
                      }
                    >
                      Medium
                    </Button>
                    <Button 
                      size="large"
                      variant="solid" 
                      color="success"
                      beginContent={
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                        </svg>
                      }
                    >
                      Large
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>

          </section>

          {/* Loading Animations */}
          <section className="space-y-6">
            <Typography variant="h2">Loading Animations</Typography>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Typography variant="h5">All Loading Variants & Colors</Typography>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Size:</Typography>
                      <Select
                        value={loadingSize}
                        onChange={(value) => setLoadingSize(value as any)}
                        size="small"
                        options={[
                          { value: 'small', label: 'Small' },
                          { value: 'medium', label: 'Medium' },
                          { value: 'large', label: 'Large' }
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-left font-medium">Variant</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Primary</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Secondary</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Success</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Warning</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Danger</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Info</Typography>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Spinner variant row */}
                      <tr>
                        <td className="p-3"><Typography variant="body2" color="muted" weight="medium">Spinner</Typography></td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="spinner" color="primary" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="spinner" color="secondary" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="spinner" color="success" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="spinner" color="warning" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="spinner" color="danger" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="spinner" color="info" size={loadingSize} />
                          </div>
                        </td>
                      </tr>
                      {/* Dots variant row */}
                      <tr>
                        <td className="p-3"><Typography variant="body2" color="muted" weight="medium">Dots</Typography></td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="dots" color="primary" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="dots" color="secondary" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="dots" color="success" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="dots" color="warning" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="dots" color="danger" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="dots" color="info" size={loadingSize} />
                          </div>
                        </td>
                      </tr>
                      {/* Pulse variant row */}
                      <tr>
                        <td className="p-3"><Typography variant="body2" color="muted" weight="medium">Pulse</Typography></td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="pulse" color="primary" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="pulse" color="secondary" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="pulse" color="success" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="pulse" color="warning" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="pulse" color="danger" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="pulse" color="info" size={loadingSize} />
                          </div>
                        </td>
                      </tr>
                      {/* Ring variant row */}
                      <tr>
                        <td className="p-3"><Typography variant="body2" color="muted" weight="medium">Ring</Typography></td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="ring" color="primary" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="ring" color="secondary" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="ring" color="success" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="ring" color="warning" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="ring" color="danger" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="ring" color="info" size={loadingSize} />
                          </div>
                        </td>
                      </tr>
                      {/* Bars variant row */}
                      <tr>
                        <td className="p-3"><Typography variant="body2" color="muted" weight="medium">Bars</Typography></td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="bars" color="primary" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="bars" color="secondary" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="bars" color="success" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="bars" color="warning" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="bars" color="danger" size={loadingSize} />
                          </div>
                        </td>
                        <td className="text-center p-3">
                          <div className="flex justify-center">
                            <Loading variant="bars" color="info" size={loadingSize} />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Cards Section */}
          <section className="space-y-6">
            <Typography variant="h2">Cards</Typography>
            
            <Card overflow="visible">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Typography variant="h5">Card Variants & Features</Typography>
                  <div className="flex flex-wrap items-center gap-4">
                    <Checkbox
                      size="small"
                      checked={cardInteractive}
                      onChange={(e) => setCardInteractive(e.target.checked)}
                      label="Interactive"
                    />
                    <Checkbox
                      size="small"
                      checked={cardClickable}
                      onChange={(e) => setCardClickable(e.target.checked)}
                      label="Clickable"
                    />
                    <Checkbox
                      size="small"
                      checked={cardDisableRipple}
                      onChange={(e) => setCardDisableRipple(e.target.checked)}
                      label="Disable Ripple"
                      disabled={!cardClickable}
                    />
                    <Checkbox
                      size="small"
                      checked={cardShowHeader}
                      onChange={(e) => setCardShowHeader(e.target.checked)}
                      label="Headers"
                    />
                    <Checkbox
                      size="small"
                      checked={cardShowFooter}
                      onChange={(e) => setCardShowFooter(e.target.checked)}
                      label="Footers"
                    />
                    <Checkbox
                      size="small"
                      checked={cardShowDividers}
                      onChange={(e) => setCardShowDividers(e.target.checked)}
                      label="Dividers"
                    />
                    <Checkbox
                      size="small"
                      checked={cardShowCoverImage}
                      onChange={(e) => setCardShowCoverImage(e.target.checked)}
                      label="Cover Image"
                    />
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Glow:</Typography>
                      <Select
                        value={glowColor}
                        onChange={(value) => setGlowColor(value as any)}
                        size="small"
                        options={[
                          { value: 'primary', label: 'Primary' },
                          { value: 'secondary', label: 'Secondary' },
                          { value: 'success', label: 'Success' },
                          { value: 'warning', label: 'Warning' },
                          { value: 'danger', label: 'Danger' },
                          { value: 'info', label: 'Info' }
                        ]}
                      />
                    </div>
                    {cardClickable && (
                      <Typography variant="body2" color="muted">
                        Clicks: <span className="font-bold">{cardClickCount}</span>
                      </Typography>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" color="muted" className="mb-3">Default</Typography>
                    <Card 
                      variant="default" 
                      interactive={cardInteractive}
                      isClickable={cardClickable}
                      disableRipple={cardDisableRipple}
                      onPress={cardClickable ? () => setCardClickCount(c => c + 1) : undefined}
                      coverImage={cardShowCoverImage ? "https://picsum.photos/400/200?random=1" : undefined}
                    >
                      {cardShowHeader && (
                        <CardHeader showDivider={cardShowDividers}>
                          <Typography variant="h6">Default Card</Typography>
                        </CardHeader>
                      )}
                      <CardBody>
                        <Typography variant="body1" color="muted">
                          This is the default card style with subtle backdrop blur and soft shadows.
                        </Typography>
                      </CardBody>
                      {cardShowFooter && (
                        <CardFooter showDivider={cardShowDividers}>
                          <Button size="small" variant="ghost">Learn More</Button>
                        </CardFooter>
                      )}
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" color="muted" className="mb-3">Glass</Typography>
                    <Card 
                      variant="glass" 
                      interactive={cardInteractive}
                      isClickable={cardClickable}
                      disableRipple={cardDisableRipple}
                      onPress={cardClickable ? () => setCardClickCount(c => c + 1) : undefined}
                      coverImage={cardShowCoverImage ? "https://picsum.photos/400/200?random=2" : undefined}
                    >
                      {cardShowHeader && (
                        <CardHeader showDivider={cardShowDividers}>
                          <Typography variant="h6">Glass Card</Typography>
                        </CardHeader>
                      )}
                      <CardBody>
                        <Typography variant="body1" color="muted">
                          Beautiful glassmorphism effect with heavy blur and transparency.
                        </Typography>
                      </CardBody>
                      {cardShowFooter && (
                        <CardFooter showDivider={cardShowDividers}>
                          <Button size="small" variant="ghost">Learn More</Button>
                        </CardFooter>
                      )}
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" color="muted" className="mb-3">Elevated</Typography>
                    <Card 
                      variant="elevated" 
                      interactive={cardInteractive}
                      isClickable={cardClickable}
                      disableRipple={cardDisableRipple}
                      onPress={cardClickable ? () => setCardClickCount(c => c + 1) : undefined}
                      coverImage={cardShowCoverImage ? "https://picsum.photos/400/200?random=3" : undefined}
                    >
                      {cardShowHeader && (
                        <CardHeader showDivider={cardShowDividers}>
                          <Typography variant="h6">Elevated Card</Typography>
                        </CardHeader>
                      )}
                      <CardBody>
                        <Typography variant="body1" color="muted">
                          Strong shadow for an elevated appearance that stands out.
                        </Typography>
                      </CardBody>
                      {cardShowFooter && (
                        <CardFooter showDivider={cardShowDividers}>
                          <Button size="small" variant="ghost">Learn More</Button>
                        </CardFooter>
                      )}
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" color="muted" className="mb-3">Flat</Typography>
                    <Card 
                      variant="flat" 
                      interactive={cardInteractive}
                      isClickable={cardClickable}
                      disableRipple={cardDisableRipple}
                      onPress={cardClickable ? () => setCardClickCount(c => c + 1) : undefined}
                      coverImage={cardShowCoverImage ? "https://picsum.photos/400/200?random=4" : undefined}
                    >
                      {cardShowHeader && (
                        <CardHeader showDivider={cardShowDividers}>
                          <Typography variant="h6">Flat Card</Typography>
                        </CardHeader>
                      )}
                      <CardBody>
                        <Typography variant="body1" color="muted">
                          Simple flat design with minimal styling and clean borders.
                        </Typography>
                      </CardBody>
                      {cardShowFooter && (
                        <CardFooter showDivider={cardShowDividers}>
                          <Button size="small" variant="ghost">Learn More</Button>
                        </CardFooter>
                      )}
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" color="muted" className="mb-3">Gradient</Typography>
                    <Card 
                      variant="gradient" 
                      interactive={cardInteractive}
                      isClickable={cardClickable}
                      disableRipple={cardDisableRipple}
                      onPress={cardClickable ? () => setCardClickCount(c => c + 1) : undefined}
                      coverImage={cardShowCoverImage ? "https://picsum.photos/400/200?random=5" : undefined}
                    >
                      {cardShowHeader && (
                        <CardHeader showDivider={cardShowDividers}>
                          <Typography variant="h6">Gradient Card</Typography>
                        </CardHeader>
                      )}
                      <CardBody>
                        <Typography variant="body1" color="muted">
                          Subtle gradient background effect for visual interest.
                        </Typography>
                      </CardBody>
                      {cardShowFooter && (
                        <CardFooter showDivider={cardShowDividers}>
                          <Button size="small" variant="ghost">Learn More</Button>
                        </CardFooter>
                      )}
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" color="muted" className="mb-3">Glow</Typography>
                    <Card 
                      variant="glow" 
                      color={glowColor} 
                      interactive={cardInteractive}
                      isClickable={cardClickable}
                      disableRipple={cardDisableRipple}
                      onPress={cardClickable ? () => setCardClickCount(c => c + 1) : undefined}
                      coverImage={cardShowCoverImage ? "https://picsum.photos/400/200?random=6" : undefined}
                    >
                      {cardShowHeader && (
                        <CardHeader showDivider={cardShowDividers}>
                          <Typography variant="h6">Glow Card</Typography>
                        </CardHeader>
                      )}
                      <CardBody>
                        <Typography variant="body1" color="muted">
                          Card with a colored glow effect. Change the color with the dropdown above.
                        </Typography>
                      </CardBody>
                      {cardShowFooter && (
                        <CardFooter showDivider={cardShowDividers}>
                          <Button size="small" variant="ghost">Learn More</Button>
                        </CardFooter>
                      )}
                    </Card>
                  </Grid>
                </Grid>
              </CardBody>
            </Card>

            {/* Card Image Examples */}
            <Card>
              <CardHeader>
                <Typography variant="h5">Card Image Examples</Typography>
              </CardHeader>
              <CardBody>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" color="muted" className="mb-3">Cover Image Card</Typography>
                    <Card variant="elevated" coverImage="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&h=200&fit=crop" className="group">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Typography variant="h6">Travel Collection</Typography>
                          <span className="text-xs font-medium text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 px-2 py-1 rounded-md">Hot</span>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <Typography variant="body2" color="muted">
                          Handpicked destinations for the perfect getaway experience.
                        </Typography>
                      </CardBody>
                      <CardFooter className="flex justify-between items-center">
                        <Typography variant="caption" color="muted">From $299</Typography>
                        <Button size="small" className="group-hover:shadow-lg transition-shadow">Explore</Button>
                      </CardFooter>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" color="muted" className="mb-3">Card with CardImage</Typography>
                    <Card variant="glass">
                      <CardImage 
                        src="https://picsum.photos/400/250?random=8" 
                        alt="Product image"
                        height={200}
                      />
                      <CardBody>
                        <Typography variant="h6">Product Card</Typography>
                        <Typography variant="body2" color="muted">
                          Using CardImage component for flexible image placement.
                        </Typography>
                        <Typography variant="h5" color="primary" className="mt-2">$99.99</Typography>
                      </CardBody>
                      <CardFooter showDivider={false} className="gap-2">
                        <Button variant="outline" size="small" className="flex-1">View</Button>
                        <Button size="small" className="flex-1">Add to Cart</Button>
                      </CardFooter>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" color="muted" className="mb-3">Clickable with Ripple</Typography>
                    <Card 
                      variant="default" 
                      isClickable
                      onPress={() => setCardClickCount(c => c + 1)}
                    >
                      <CardBody>
                        <div className="text-center">
                          <Typography variant="h3" color="primary" className="mb-2">
                            {cardClickCount}
                          </Typography>
                          <Typography variant="body1" color="muted">
                            Click me to see the ripple effect!
                          </Typography>
                        </div>
                      </CardBody>
                    </Card>
                  </Grid>
                </Grid>
              </CardBody>
            </Card>

            {/* Complex Card Layouts */}
            <Card>
              <CardHeader>
                <Typography variant="h5">Complex Card Layouts</Typography>
              </CardHeader>
              <CardBody>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card variant="elevated" isClickable className="h-full">
                      <CardHeader showDivider={false}>
                        <div className="flex items-center justify-between">
                          <Typography variant="h6">Premium Features</Typography>
                          <span className="text-xs bg-[rgb(var(--color-primary))] text-[rgb(var(--color-primary-foreground))] px-2 py-1 rounded-full">
                            PRO
                          </span>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <div className="space-y-4">
                          <Typography variant="body2" color="muted">
                            Unlock advanced capabilities with our premium plan.
                          </Typography>
                          <ul className="space-y-2">
                            {['Unlimited projects', 'Priority support', 'Advanced analytics', 'Team collaboration'].map((feature) => (
                              <li key={feature} className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-[rgb(var(--color-success))]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M5 13l4 4L19 7"></path>
                                </svg>
                                <Typography variant="body2">{feature}</Typography>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardBody>
                      <CardFooter showDivider={false}>
                        <Button color="primary" className="w-full">Upgrade to Pro</Button>
                      </CardFooter>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card variant="glass" color="info" className="h-full">
                      <CardImage 
                        src="https://picsum.photos/600/150?random=9" 
                        alt="Statistics header"
                        height={150}
                      />
                      <CardHeader showDivider={false}>
                        <Typography variant="h6">Statistics Overview</Typography>
                      </CardHeader>
                      <CardBody>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 rounded-lg bg-[rgb(var(--color-background))]/50">
                            <Typography variant="h4" color="primary">1.2K</Typography>
                            <Typography variant="caption" color="muted">Active Users</Typography>
                          </div>
                          <div className="text-center p-4 rounded-lg bg-[rgb(var(--color-background))]/50">
                            <Typography variant="h4" color="success">98%</Typography>
                            <Typography variant="caption" color="muted">Satisfaction</Typography>
                          </div>
                          <div className="text-center p-4 rounded-lg bg-[rgb(var(--color-background))]/50">
                            <Typography variant="h4" color="warning">24/7</Typography>
                            <Typography variant="caption" color="muted">Support</Typography>
                          </div>
                          <div className="text-center p-4 rounded-lg bg-[rgb(var(--color-background))]/50">
                            <Typography variant="h4" color="info">500+</Typography>
                            <Typography variant="caption" color="muted">Integrations</Typography>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Grid>
                </Grid>
              </CardBody>
            </Card>

            {/* Image Fill Cards */}
            <Card>
              <CardHeader>
                <Typography variant="h5">Image Fill Cards</Typography>
              </CardHeader>
              <CardBody>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <Card 
                      variant="default"
                      imageFill="https://picsum.photos/400/300?random=20"
                      imageFillGradient="bottom"
                      className="h-64"
                      isClickable
                    >
                      <CardBody className="h-full flex flex-col justify-end">
                        <Typography variant="h6" className="text-white">Bottom Gradient</Typography>
                        <Typography variant="body2" className="text-white/80">
                          Perfect for hero sections
                        </Typography>
                      </CardBody>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <Card 
                      variant="default"
                      imageFill="https://picsum.photos/400/300?random=21"
                      imageFillGradient="top"
                      className="h-64"
                      isClickable
                    >
                      <CardBody className="h-full">
                        <Typography variant="h6" className="text-white">Top Gradient</Typography>
                        <Typography variant="body2" className="text-white/80">
                          Great for headers
                        </Typography>
                      </CardBody>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <Card 
                      variant="default"
                      imageFill="https://picsum.photos/400/300?random=22"
                      imageFillGradient="both"
                      className="h-64"
                      isClickable
                    >
                      <CardBody className="h-full flex flex-col justify-center text-center">
                        <Typography variant="h6" className="text-white">Both Gradients</Typography>
                        <Typography variant="body2" className="text-white/80">
                          Centered content
                        </Typography>
                      </CardBody>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <Card 
                      variant="glass"
                      imageFill="https://picsum.photos/400/300?random=23"
                      imageFillGradient="none"
                      imageFillOverlay={false}
                      className="h-64"
                      isClickable
                    >
                      <CardBody className="h-full flex flex-col justify-end">
                        <div className="bg-black/60 backdrop-blur-sm p-3 rounded">
                          <Typography variant="h6" className="text-white">Custom Overlay</Typography>
                          <Typography variant="body2" className="text-white/80">
                            Glass effect on image
                          </Typography>
                        </div>
                      </CardBody>
                    </Card>
                  </Grid>

                  <Grid item xs={12}>
                    <Card 
                      variant="elevated"
                      imageFill="https://picsum.photos/1200/400?random=24"
                      imageFillGradient="bottom"
                      className="h-80"
                      isClickable
                    >
                      <CardBody className="h-full flex items-end p-8">
                        <div>
                          <Typography variant="h3" className="text-white mb-2">
                            Hero Card with Image Fill
                          </Typography>
                          <Typography variant="body1" className="text-white/90 mb-4">
                            Create stunning hero sections with full image backgrounds and gradient overlays.
                          </Typography>
                          <Button color="primary" size="large">
                            Get Started
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Grid>
                </Grid>
              </CardBody>
            </Card>
          </section>

          {/* Typography Section */}
          <section className="space-y-6">
            <Typography variant="h2">Typography</Typography>
            
            <Card>
              <CardHeader>
                <Typography variant="h5">Typography Variants</Typography>
              </CardHeader>
              <CardBody className="space-y-6">
                {/* Heading Variants */}
                <div className="space-y-4">
                  <Typography variant="h6" color="muted">Headings</Typography>
                  <div className="space-y-3">
                    <Typography variant="h1">h1. Heading 1</Typography>
                    <Typography variant="h2">h2. Heading 2</Typography>
                    <Typography variant="h3">h3. Heading 3</Typography>
                    <Typography variant="h4">h4. Heading 4</Typography>
                    <Typography variant="h5">h5. Heading 5</Typography>
                    <Typography variant="h6">h6. Heading 6</Typography>
                  </div>
                </div>

                <Divider />

                {/* Body and Text Variants */}
                <div className="space-y-4">
                  <Typography variant="h6" color="muted">Body Text</Typography>
                  <div className="space-y-3">
                    <Typography variant="body1">
                      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.
                    </Typography>
                    <Typography variant="body2">
                      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.
                    </Typography>
                    <Typography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                    <Typography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                    <Typography variant="caption">caption. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                    <Typography variant="overline">overline. Lorem ipsum dolor sit amet</Typography>
                  </div>
                </div>

                <Divider />

                {/* Colors */}
                <div className="space-y-4">
                  <Typography variant="h6" color="muted">Colors</Typography>
                  <div className="space-y-3">
                    <Typography color="default">default color - The quick brown fox jumps over the lazy dog</Typography>
                    <Typography color="primary">primary color - The quick brown fox jumps over the lazy dog</Typography>
                    <Typography color="secondary">secondary color - The quick brown fox jumps over the lazy dog</Typography>
                    <Typography color="success">success color - The quick brown fox jumps over the lazy dog</Typography>
                    <Typography color="warning">warning color - The quick brown fox jumps over the lazy dog</Typography>
                    <Typography color="danger">danger color - The quick brown fox jumps over the lazy dog</Typography>
                    <Typography color="info">info color - The quick brown fox jumps over the lazy dog</Typography>
                    <Typography color="muted">muted color - The quick brown fox jumps over the lazy dog</Typography>
                  </div>
                </div>

                <Divider />

                {/* Text Alignment */}
                <div className="space-y-4">
                  <Typography variant="h6" color="muted">Text Alignment</Typography>
                  <div className="space-y-3 border border-[var(--color-border-secondary)] rounded-lg p-4">
                    <Typography align="left">Left aligned text - Lorem ipsum dolor sit amet</Typography>
                    <Typography align="center">Center aligned text - Lorem ipsum dolor sit amet</Typography>
                    <Typography align="right">Right aligned text - Lorem ipsum dolor sit amet</Typography>
                    <Typography align="justify">
                      Justified text - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>
                  </div>
                </div>

                <Divider />

                {/* Font Weights */}
                <div className="space-y-4">
                  <Typography variant="h6" color="muted">Font Weights</Typography>
                  <div className="space-y-3">
                    <Typography weight="thin">Thin weight (100) - The quick brown fox</Typography>
                    <Typography weight="light">Light weight (300) - The quick brown fox</Typography>
                    <Typography weight="normal">Normal weight (400) - The quick brown fox</Typography>
                    <Typography weight="medium">Medium weight (500) - The quick brown fox</Typography>
                    <Typography weight="semibold">Semibold weight (600) - The quick brown fox</Typography>
                    <Typography weight="bold">Bold weight (700) - The quick brown fox</Typography>
                    <Typography weight="extrabold">Extrabold weight (800) - The quick brown fox</Typography>
                    <Typography weight="black">Black weight (900) - The quick brown fox</Typography>
                  </div>
                </div>

                <Divider />

                {/* Special Features */}
                <div className="space-y-4">
                  <Typography variant="h6" color="muted">Special Features</Typography>
                  <div className="space-y-3">
                    <Typography gutterBottom>
                      This text has gutterBottom spacing. Notice the margin below.
                    </Typography>
                    <Typography noWrap className="border border-[var(--color-border-secondary)] rounded p-2">
                      This text has noWrap enabled. Lorem ipsum dolor sit amet, consectetur adipisicing elit. This very long text will be truncated with ellipsis instead of wrapping to the next line.
                    </Typography>
                    <Typography italic>
                      This text is displayed in italic style.
                    </Typography>
                    <Typography variant="body1" weight="bold" color="primary" italic>
                      Combined props: bold, primary color, and italic
                    </Typography>
                  </div>
                </div>

                <Divider />

                {/* Gradient Text */}
                <div className="space-y-4">
                  <Typography variant="h6" color="muted">Gradient Text</Typography>
                  <div className="space-y-3">
                    <Typography variant="h3" gradient="primary">Primary Gradient</Typography>
                    <Typography variant="h3" gradient="secondary">Secondary Gradient</Typography>
                    <Typography variant="h3" gradient="success">Success Gradient</Typography>
                    <Typography variant="h3" gradient="danger">Danger Gradient</Typography>
                    <Typography variant="h3" gradient="info">Info Gradient</Typography>
                    <Typography variant="h3" gradient="rainbow">Rainbow Gradient</Typography>
                    <Typography variant="h3" gradient="sunset">Sunset Gradient</Typography>
                    <Typography variant="h3" gradient="ocean">Ocean Gradient</Typography>
                    <Typography variant="h3" gradient="forest">Forest Gradient</Typography>
                    <Typography variant="h3" gradient="candy">Candy Gradient</Typography>
                    <Typography variant="h3" gradient="metal">Metal Gradient</Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Inputs Section */}
          <section className="space-y-6">
            <Typography variant="h2">Inputs</Typography>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Typography variant="h5">Input Variants</Typography>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Size:</Typography>
                      <Select
                        value={inputSize}
                        onChange={(value) => setInputSize(value as any)}
                        size="small"
                        options={[
                          { value: 'small', label: 'Small' },
                          { value: 'medium', label: 'Medium' },
                          { value: 'large', label: 'Large' }
                        ]}
                      />
                    </div>
                    <Checkbox
                      size="small"
                      checked={inputDisabled}
                      onChange={(e) => setInputDisabled(e.target.checked)}
                      label="Disabled"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Grid container spacing={3}>
                  {/* Inputs with labels only (no placeholder) */}
                  <Grid item xs={12}>
                    <Typography variant="h6" color="muted" gutterBottom>With Labels Only</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="First Name"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Last Name"
                      variant="glass"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  
                  {/* Inputs with both label and placeholder */}
                  <Grid item xs={12}>
                    <Typography variant="h6" color="muted" gutterBottom>With Labels and Placeholders</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Username"
                      placeholder="johndoe123"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Company"
                      variant="glass"
                      placeholder="Acme Corporation"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  
                  {/* Input Types */}
                  <Grid item xs={12}>
                    <Typography variant="h6" color="muted" gutterBottom>Input Types</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Email Address"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="user@example.com"
                      helperText="We'll never share your email"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      helperText="Must be at least 8 characters"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Age"
                      type="number"
                      helperText="Must be 18 or older"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Date of Birth"
                      type="date"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Appointment Time"
                      type="time"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  
                  {/* Search and URL */}
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Search"
                      type="search"
                      placeholder="Search for something..."
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Website"
                      type="url"
                      placeholder="https://example.com"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  
                  {/* Validation States */}
                  <Grid item xs={12}>
                    <Typography variant="h6" color="muted" gutterBottom>Validation States</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Valid Email"
                      type="email"
                      defaultValue="user@example.com"
                      success="Email is valid!"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Invalid Username"
                      defaultValue="user@"
                      error="Username must be alphanumeric"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  
                  {/* Placeholder Only */}
                  <Grid item xs={12}>
                    <Typography variant="h6" color="muted" gutterBottom>Placeholder Only (No Labels)</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      placeholder="Enter your message..."
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      placeholder="Search anything..."
                      variant="glass"
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  
                  {/* Special Examples */}
                  <Grid item xs={12}>
                    <Typography variant="h6" color="muted" gutterBottom>Special Examples</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Controlled Input"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      helperText={`Character count: ${inputValue.length}`}
                      size={inputSize}
                      disabled={inputDisabled}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      label="Read Only"
                      defaultValue="This value cannot be changed"
                      readOnly
                      helperText="Read-only input"
                      size={inputSize}
                    />
                  </Grid>
                </Grid>
              </CardBody>
            </Card>
          </section>

          {/* Dropdowns Section */}
          <section className="space-y-6">
            <Typography variant="h2">Dropdowns</Typography>
            
            <Card overflow="visible" className="relative z-10">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Typography variant="h5">All Dropdown Variants & Colors</Typography>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Size:</Typography>
                      <Select
                        value={dropdownSize}
                        onChange={(value) => setDropdownSize(value as any)}
                        size="small"
                        options={[
                          { value: 'small', label: 'Small' },
                          { value: 'medium', label: 'Medium' },
                          { value: 'large', label: 'Large' }
                        ]}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Radius:</Typography>
                      <Select
                        value={dropdownRadius}
                        onChange={(value) => setDropdownRadius(value as any)}
                        size="small"
                        options={[
                          { value: 'none', label: 'None' },
                          { value: 'small', label: 'Small' },
                          { value: 'medium', label: 'Medium' },
                          { value: 'large', label: 'Large' },
                          { value: 'full', label: 'Full' }
                        ]}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Label:</Typography>
                      <Select
                        value={dropdownLabelPlacement}
                        onChange={(value) => setDropdownLabelPlacement(value as any)}
                        size="small"
                        options={[
                          { value: '', label: 'None' },
                          { value: 'top', label: 'Top' },
                          { value: 'left', label: 'Left' },
                          { value: 'inside', label: 'Inside' }
                        ]}
                        placeholder="Label placement"
                      />
                    </div>
                    <Checkbox
                      size="small"
                      checked={dropdownHasPlaceholder}
                      onChange={(e) => setDropdownHasPlaceholder(e.target.checked)}
                      label="Placeholder"
                    />
                    <Checkbox
                      size="small"
                      checked={dropdownClearable}
                      onChange={(e) => setDropdownClearable(e.target.checked)}
                      label="Clearable"
                    />
                    <Checkbox
                      size="small"
                      checked={dropdownDisabled}
                      onChange={(e) => setDropdownDisabled(e.target.checked)}
                      label="Disabled"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody className="overflow-visible">
                <div className="w-full p-4">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left pb-4 pr-4">
                          <div className="text-sm font-medium text-[var(--color-foreground-secondary)]">Variant</div>
                        </th>
                        <th className="pb-4 px-4">
                          <div className="text-sm font-medium text-[var(--color-foreground-secondary)] text-center">Primary</div>
                        </th>
                        <th className="pb-4 px-4">
                          <div className="text-sm font-medium text-[var(--color-foreground-secondary)] text-center">Secondary</div>
                        </th>
                        <th className="pb-4 px-4">
                          <div className="text-sm font-medium text-[var(--color-foreground-secondary)] text-center">Success</div>
                        </th>
                        <th className="pb-4 px-4">
                          <div className="text-sm font-medium text-[var(--color-foreground-secondary)] text-center">Warning</div>
                        </th>
                        <th className="pb-4 px-4">
                          <div className="text-sm font-medium text-[var(--color-foreground-secondary)] text-center">Danger</div>
                        </th>
                        <th className="pb-4 pl-4">
                          <div className="text-sm font-medium text-[var(--color-foreground-secondary)] text-center">Info</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {(['solid', 'outline', 'ghost', 'glass', 'underline'] as const).map((variant) => (
                        <tr key={variant}>
                          <td className="py-4 pr-4">
                            <div className="text-sm font-medium text-[var(--color-foreground-secondary)] capitalize">{variant}</div>
                          </td>
                          {(['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const).map((color) => (
                            <td key={color} className="py-4 px-4">
                              <div className="flex justify-center">
                                <Select
                                  variant={variant}
                                  color={color}
                                  size={dropdownSize}
                                  radius={dropdownRadius}
                                  label={dropdownLabelPlacement ? 'Label' : undefined}
                                  labelPlacement={dropdownLabelPlacement}
                                  disabled={dropdownDisabled}
                                  clearable={dropdownClearable}
                                  options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3', disabled: true },
                                    { value: 'option4', label: 'Option 4' },
                                  ]}
                                  placeholder={dropdownHasPlaceholder ? "Select option" : undefined}
                                />
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>

            <Card overflow="visible">
              <CardHeader>
                <Typography variant="h5">Dropdown Label Examples</Typography>
              </CardHeader>
              <CardBody className="space-y-6">
                <Typography variant="h6" color="muted" gutterBottom>Label Placement Options</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Select
                      label="Framework"
                      labelPlacement="top"
                      options={[
                        { value: 'react', label: 'React' },
                        { value: 'vue', label: 'Vue' },
                        { value: 'angular', label: 'Angular' },
                        { value: 'svelte', label: 'Svelte' }
                      ]}
                      value={selectedFramework}
                      onChange={setSelectedFramework}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Select
                      label="Size"
                      labelPlacement="left"
                      options={[
                        { value: 'small', label: 'Small' },
                        { value: 'medium', label: 'Medium' },
                        { value: 'large', label: 'Large' },
                        { value: 'xlarge', label: 'Extra Large' }
                      ]}
                      value={selectedSize}
                      onChange={setSelectedSize}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Select
                      label="Status"
                      labelPlacement="inside"
                      options={[
                        { value: 'active', label: 'Active' },
                        { value: 'pending', label: 'Pending' },
                        { value: 'completed', label: 'Completed' },
                        { value: 'cancelled', label: 'Cancelled' }
                      ]}
                      value={selectedStatus}
                      onChange={setSelectedStatus}
                    />
                  </Grid>
                </Grid>
                
                <div className="mt-6">
                  <Typography variant="h6" color="muted" className="mb-4">Inside Label Behavior</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                      <div className="space-y-2">
                        <Typography variant="caption" color="muted">With label only</Typography>
                        <Select
                          label="Country"
                          labelPlacement="inside"
                          options={[
                            { value: 'us', label: 'United States' },
                            { value: 'uk', label: 'United Kingdom' },
                            { value: 'ca', label: 'Canada' },
                            { value: 'au', label: 'Australia' }
                          ]}
                        />
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} md={4}>
                      <div className="space-y-2">
                        <Typography variant="caption" color="muted">With label and placeholder</Typography>
                        <Select
                          label="Priority"
                          labelPlacement="inside"
                          options={[
                            { value: 'low', label: 'Low Priority' },
                            { value: 'medium', label: 'Medium Priority' },
                            { value: 'high', label: 'High Priority' },
                            { value: 'critical', label: 'Critical' }
                          ]}
                          value={selectedPriority}
                          onChange={setSelectedPriority}
                          placeholder="Select priority level"
                        />
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} md={4}>
                      <div className="space-y-2">
                        <Typography variant="caption" color="muted">Placeholder only</Typography>
                        <Select
                          options={[
                            { value: 'draft', label: 'Draft' },
                            { value: 'published', label: 'Published' },
                            { value: 'archived', label: 'Archived' }
                          ]}
                          placeholder="Select status"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>

                <div className="mt-6">
                  <Typography variant="h6" color="muted" className="mb-4">Clearable Select</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Select
                        label="Clearable Select"
                        labelPlacement="top"
                        options={[
                          { value: 'option1', label: 'Option 1' },
                          { value: 'option2', label: 'Option 2' },
                          { value: 'option3', label: 'Option 3' },
                          { value: 'option4', label: 'Option 4' }
                        ]}
                        placeholder="Select an option"
                        clearable
                      />
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Select
                        label="Clearable with Inside Label"
                        labelPlacement="inside"
                        options={[
                          { value: 'choice1', label: 'Choice 1' },
                          { value: 'choice2', label: 'Choice 2' },
                          { value: 'choice3', label: 'Choice 3' }
                        ]}
                        clearable
                      />
                    </Grid>
                  </Grid>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Checkboxes Section */}
          <section className="space-y-6">
            <Typography variant="h2">Checkboxes</Typography>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Typography variant="h5">All Checkbox Variants & Colors</Typography>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Size:</Typography>
                      <Select
                        value={checkboxSize}
                        onChange={(value) => setCheckboxSize(value as any)}
                        size="small"
                        options={[
                          { value: 'small', label: 'Small' },
                          { value: 'medium', label: 'Medium' },
                          { value: 'large', label: 'Large' }
                        ]}
                      />
                    </div>
                    <Checkbox
                      size="small"
                      checked={checkboxChecked}
                      onChange={(e) => setCheckboxChecked(e.target.checked)}
                      label="Checked"
                    />
                    <Checkbox
                      size="small"
                      checked={checkboxDisabled}
                      onChange={(e) => setCheckboxDisabled(e.target.checked)}
                      label="Disabled"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-left font-medium">Variant</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Primary</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Secondary</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Success</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Warning</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Danger</Typography>
                        </th>
                        <th className="p-3">
                          <Typography variant="body2" color="muted" className="text-center font-medium">Info</Typography>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {(['solid', 'outline'] as const).map((variant) => (
                        <tr key={variant}>
                          <td className="text-sm font-medium text-[var(--color-foreground-secondary)] p-3 capitalize">{variant}</td>
                          {(['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const).map((color) => (
                            <td key={color} className="text-center p-3">
                              <Checkbox
                                variant={variant}
                                color={color}
                                size={checkboxSize}
                                checked={checkboxChecked}
                                disabled={checkboxDisabled}
                                label="Option"
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>

            {/* Checkbox Groups */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Typography variant="h5">Checkbox Groups</Typography>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Orientation:</Typography>
                      <Select
                        value={checkboxGroupOrientation}
                        onChange={(value) => setCheckboxGroupOrientation(value as any)}
                        size="small"
                        options={[
                          { value: 'vertical', label: 'Vertical' },
                          { value: 'horizontal', label: 'Horizontal' }
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <div className="space-y-6">
                      <CheckboxGroup
                        label="Select Features"
                        description="Choose the features you want to enable"
                        options={[
                          { value: 'option1', label: 'Dark Mode' },
                          { value: 'option2', label: 'Notifications' },
                          { value: 'option3', label: 'Auto-save' },
                          { value: 'option4', label: 'Analytics', disabled: true }
                        ]}
                        value={checkboxGroupValues}
                        onChange={setCheckboxGroupValues}
                        orientation={checkboxGroupOrientation}
                        variant="solid"
                        color="primary"
                        size={checkboxSize}
                      />
                      
                      <div>
                        <Typography variant="body2" color="muted" className="mb-2">Selected: {checkboxGroupValues.join(', ') || 'None'}</Typography>
                      </div>
                    </div>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <div className="space-y-6">
                      <CheckboxGroup
                        label="Permissions"
                        description="Grant access to the following resources"
                        required
                        options={[
                          { value: 'read', label: 'Read Access' },
                          { value: 'write', label: 'Write Access' },
                          { value: 'delete', label: 'Delete Access' },
                          { value: 'admin', label: 'Admin Access' }
                        ]}
                        orientation={checkboxGroupOrientation}
                        variant="outline"
                        color="secondary"
                        size={checkboxSize}
                      />
                      
                      <CheckboxGroup
                        label="Subscription Options"
                        options={[
                          { value: 'newsletter', label: 'Newsletter' },
                          { value: 'updates', label: 'Product Updates' },
                          { value: 'promotions', label: 'Promotions' }
                        ]}
                        orientation={checkboxGroupOrientation}
                        variant="solid"
                        color="success"
                        size={checkboxSize}
                        disabled={checkboxDisabled}
                      />
                    </div>
                  </Grid>
                </Grid>
              </CardBody>
            </Card>
          </section>

          {/* Grid & Divider Section */}
          <section className="space-y-6">
            <Typography variant="h2">Grid & Divider</Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} xl={6}>
                <Card>
                  <CardHeader>
                    <Typography variant="h5">Grid Layout Examples</Typography>
                  </CardHeader>
              <CardBody>
                <div className="space-y-8">
                  {/* Basic Grid */}
                  <div>
                    <Typography variant="h6" color="muted" className="mb-4">Basic Responsive Grid</Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={4}>
                        <Card variant="flat">
                          <CardBody>
                            <Typography variant="body2">xs=12 sm=6 md=4</Typography>
                          </CardBody>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Card variant="flat">
                          <CardBody>
                            <Typography variant="body2">xs=12 sm=6 md=4</Typography>
                          </CardBody>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <Card variant="flat">
                          <CardBody>
                            <Typography variant="body2">xs=12 sm=12 md=4</Typography>
                          </CardBody>
                        </Card>
                      </Grid>
                    </Grid>
                  </div>

                  <Divider label="Different Spacing" />

                  {/* Different Spacing Examples */}
                  <div>
                    <Typography variant="h6" color="muted" className="mb-4">Grid Spacing Variations</Typography>
                    <div className="space-y-4">
                      <div>
                        <Typography variant="caption" color="muted" className="mb-2">spacing={1}</Typography>
                        <Grid container spacing={1}>
                          {[1, 2, 3, 4].map((i) => (
                            <Grid key={i} item xs={3}>
                              <Card variant="flat" color="primary">
                                <CardBody className="text-center">
                                  <Typography variant="body2">Item {i}</Typography>
                                </CardBody>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </div>
                      
                      <div>
                        <Typography variant="caption" color="muted" className="mb-2">spacing={2}</Typography>
                        <Grid container spacing={2}>
                          {[1, 2, 3, 4].map((i) => (
                            <Grid key={i} item xs={3}>
                              <Card variant="flat" color="secondary">
                                <CardBody className="text-center">
                                  <Typography variant="body2">Item {i}</Typography>
                                </CardBody>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </div>
                      
                      <div>
                        <Typography variant="caption" color="muted" className="mb-2">spacing={3}</Typography>
                        <Grid container spacing={3}>
                          {[1, 2, 3, 4].map((i) => (
                            <Grid key={i} item xs={3}>
                              <Card variant="flat" color="success">
                                <CardBody className="text-center">
                                  <Typography variant="body2">Item {i}</Typography>
                                </CardBody>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </div>
                    </div>
                  </div>

                  <Divider variant="dashed" color="primary" />

                  {/* Complex Layout */}
                  <div>
                    <Typography variant="h6" color="muted" className="mb-4">Complex Layout Example</Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={8}>
                        <Card variant="glass">
                          <CardBody>
                            <Typography variant="body2">Main Content Area (xs=12 md=8)</Typography>
                            <Typography variant="caption" color="muted" className="mt-2">
                              This takes full width on mobile and 8 columns on desktop
                            </Typography>
                          </CardBody>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Card variant="flat">
                              <CardBody>
                                <Typography variant="body2">Sidebar Item 1</Typography>
                              </CardBody>
                            </Card>
                          </Grid>
                          <Grid item xs={12}>
                            <Card variant="flat">
                              <CardBody>
                                <Typography variant="body2">Sidebar Item 2</Typography>
                              </CardBody>
                            </Card>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>

                  <Divider variant="gradient" color="primary" />

                  {/* Auto-fit Grid */}
                  <div>
                    <Typography variant="h6" color="muted" className="mb-4">Auto-sizing Grid Items</Typography>
                    <Grid container spacing={2}>
                      <Grid item xs>
                        <Card variant="flat">
                          <CardBody>
                            <Typography variant="body2">Auto width</Typography>
                          </CardBody>
                        </Card>
                      </Grid>
                      <Grid item xs={6}>
                        <Card variant="flat">
                          <CardBody>
                            <Typography variant="body2">Fixed width (xs=6)</Typography>
                          </CardBody>
                        </Card>
                      </Grid>
                      <Grid item xs>
                        <Card variant="flat">
                          <CardBody>
                            <Typography variant="body2">Auto width</Typography>
                          </CardBody>
                        </Card>
                      </Grid>
                    </Grid>
                  </div>

                  <Divider variant="dashed" />

                  {/* Grid with Form Elements */}
                  <div>
                    <Typography variant="h6" color="muted" className="mb-4">Grid with Form Elements (Full Width Dropdowns)</Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4}>
                        <Select
                          label="Category"
                          placeholder="Select a category"
                          options={[
                            { value: 'electronics', label: 'Electronics' },
                            { value: 'clothing', label: 'Clothing' },
                            { value: 'books', label: 'Books' },
                            { value: 'home', label: 'Home & Garden' },
                          ]}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Select
                          label="Sort By"
                          placeholder="Choose sorting"
                          options={[
                            { value: 'price-asc', label: 'Price: Low to High' },
                            { value: 'price-desc', label: 'Price: High to Low' },
                            { value: 'name', label: 'Name: A to Z' },
                            { value: 'rating', label: 'Rating' },
                          ]}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Select
                          label="Status"
                          placeholder="Filter by status"
                          options={[
                            { value: 'active', label: 'Active' },
                            { value: 'inactive', label: 'Inactive' },
                            { value: 'pending', label: 'Pending' },
                            { value: 'archived', label: 'Archived' },
                          ]}
                        />
                      </Grid>
                    </Grid>
                    <Typography variant="caption" color="muted" className="mt-3">
                      Select components automatically fill the full width of their grid columns
                    </Typography>
                  </div>

                  <Divider />

                  {/* Mixed Form Layout */}
                  <div>
                    <Typography variant="h6" color="muted" className="mb-4">Mixed Form Layout Example</Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Input
                          label="Full Name"
                          placeholder="Enter your name"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Input
                          label="Email"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Select
                          label="Country"
                          placeholder="Select country"
                          options={[
                            { value: 'us', label: 'United States' },
                            { value: 'uk', label: 'United Kingdom' },
                            { value: 'ca', label: 'Canada' },
                            { value: 'au', label: 'Australia' },
                          ]}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Select
                          label="State/Province"
                          placeholder="Select state"
                          options={[
                            { value: 'ca', label: 'California' },
                            { value: 'ny', label: 'New York' },
                            { value: 'tx', label: 'Texas' },
                            { value: 'fl', label: 'Florida' },
                          ]}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Input
                          label="Zip Code"
                          placeholder="12345"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Input
                          label="Comments"
                          placeholder="Any additional information..."
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Grid>

          <Grid item xs={12} xl={6}>
            <Card>
              <CardHeader>
                <Typography variant="h5">Divider Variants</Typography>
              </CardHeader>
              <CardBody className="space-y-6">
                <div>
                  <Typography variant="body2" color="muted" className="mb-2">Default Divider</Typography>
                  <Divider />
                </div>

                <div>
                  <Typography variant="body2" color="muted" className="mb-2">Full Width in Card</Typography>
                  <Divider fullWidth />
                </div>

                <div>
                  <Typography variant="body2" color="muted" className="mb-2">With Label</Typography>
                  <Divider label="Section Title" />
                  <Divider label="Left Aligned" labelPosition="left" color="primary" />
                  <Divider label="Right Aligned" labelPosition="right" color="secondary" />
                </div>

                <div>
                  <Typography variant="body2" color="muted" className="mb-2">Variants</Typography>
                  <Divider variant="solid" color="primary" />
                  <Divider variant="dashed" color="secondary" />
                  <Divider variant="dotted" color="success" />
                  <Divider variant="gradient" color="primary" />
                </div>

                <div>
                  <Typography variant="body2" color="muted" className="mb-2">Thickness</Typography>
                  <Divider thickness="thin" />
                  <Divider thickness="medium" color="primary" />
                  <Divider thickness="thick" color="secondary" />
                </div>

                <div className="flex items-center gap-4">
                  <Typography variant="body2" color="muted">Vertical</Typography>
                  <Divider orientation="vertical" className="h-16" />
                  <Typography variant="body2">Content</Typography>
                  <Divider orientation="vertical" variant="dashed" color="primary" className="h-16" />
                  <Typography variant="body2">More Content</Typography>
                </div>
              </CardBody>
            </Card>
          </Grid>
        </Grid>
          </section>

          {/* Glass Effects Showcase */}
          <section className="space-y-6">
            <Typography variant="h2">Glass Effects</Typography>
            
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-info)]" />
              <Grid container spacing={3} className="relative p-8">
                <Grid item xs={12} md={4}>
                  <Card variant="glass">
                    <CardBody className="text-white">
                      <Typography variant="h6" className="mb-2">Glass Card</Typography>
                      <Typography variant="body1" className="text-white/80">
                        Beautiful glassmorphism effect on gradient background.
                      </Typography>
                    </CardBody>
                  </Card>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <div className="space-y-4">
                    <Button variant="glass" color="primary" className="w-full">
                      Glass Button
                    </Button>
                    <Input
                      variant="glass"
                      label="Glass Input"
                      placeholder="Type something..."
                      className="text-white"
                    />
                  </div>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Card variant="glass" interactive>
                    <CardBody className="text-white">
                      <Typography variant="h6" className="mb-2">Interactive</Typography>
                      <Typography variant="body1" className="text-white/80">
                        Hover me for smooth animations.
                      </Typography>
                    </CardBody>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </section>

          {/* Navbar Section */}
          <section className="space-y-6">
            <Typography variant="h2">Navbar</Typography>
            
            <Card>
              <CardHeader>
                <Typography variant="h5">Navbar Variants</Typography>
              </CardHeader>
              <CardBody>
                <div className="space-y-6">
                  {/* Default Navbar */}
                  <div className="space-y-2">
                    <Typography variant="h6" color="muted">Default</Typography>
                    <div className="border border-border rounded-lg overflow-hidden">
                      <Navbar variant="default" sticky={false}>
                        <NavbarBrand>
                          <Typography variant="h6" weight="bold">Brand</Typography>
                        </NavbarBrand>
                        <NavbarContent justify="center">
                          <NavbarItem>
                            <NavbarLink href="#" active>Home</NavbarLink>
                          </NavbarItem>
                          <NavbarItem>
                            <NavbarLink href="#">About</NavbarLink>
                          </NavbarItem>
                          <NavbarItem>
                            <NavbarLink href="#">Services</NavbarLink>
                          </NavbarItem>
                        </NavbarContent>
                        <NavbarContent justify="end">
                          <Button size="small" variant="solid">Sign Up</Button>
                        </NavbarContent>
                      </Navbar>
                    </div>
                  </div>

                  <Divider />

                  {/* Glass Navbar */}
                  <div className="space-y-2">
                    <Typography variant="h6" color="muted">Glass</Typography>
                    <div className="border border-border rounded-lg overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950/20 dark:to-secondary-950/20 p-4">
                      <Navbar variant="glass" sticky={false}>
                        <NavbarBrand>
                          <Typography variant="h6" weight="bold">Glass Nav</Typography>
                        </NavbarBrand>
                        <NavbarContent justify="center">
                          <NavbarItem>
                            <NavbarLink href="#" active>Home</NavbarLink>
                          </NavbarItem>
                          <NavbarItem>
                            <NavbarLink href="#">Products</NavbarLink>
                          </NavbarItem>
                          <NavbarItem>
                            <NavbarLink href="#">Contact</NavbarLink>
                          </NavbarItem>
                        </NavbarContent>
                        <NavbarContent justify="end">
                          <ThemeSelector size="small" />
                        </NavbarContent>
                      </Navbar>
                    </div>
                  </div>

                  <Divider />

                  {/* Floating Navbar */}
                  <div className="space-y-2">
                    <Typography variant="h6" color="muted">Floating</Typography>
                    <div className="p-4 bg-background-secondary rounded-lg">
                      <Navbar variant="floating" sticky={false}>
                        <NavbarBrand>
                          <Typography variant="h6" weight="bold">Floating</Typography>
                        </NavbarBrand>
                        <NavbarContent justify="end">
                          <Button size="small" variant="ghost">Login</Button>
                          <Button size="small" variant="solid">Get Started</Button>
                        </NavbarContent>
                      </Navbar>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Theme Selector Section */}
          <section className="space-y-6">
            <Typography variant="h2">Theme Selector</Typography>
            
            <Card>
              <CardHeader>
                <Typography variant="h5">Theme Selector Sizes</Typography>
              </CardHeader>
              <CardBody>
                <div className="space-y-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Typography variant="body2" color="muted" className="w-20">Small:</Typography>
                      <ThemeSelector size="small" />
                    </div>
                    <div className="flex items-center gap-4">
                      <Typography variant="body2" color="muted" className="w-20">Medium:</Typography>
                      <ThemeSelector size="medium" />
                    </div>
                    <div className="flex items-center gap-4">
                      <Typography variant="body2" color="muted" className="w-20">Large:</Typography>
                      <ThemeSelector size="large" />
                    </div>
                  </div>

                  <Divider />

                  <div className="space-y-4">
                    <Typography variant="h6" color="muted">With Labels</Typography>
                    <div className="flex flex-col gap-4">
                      <ThemeSelector size="small" showLabels />
                      <ThemeSelector size="medium" showLabels />
                      <ThemeSelector size="large" showLabels />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Modals Section */}
          <section className="space-y-6">
            <Typography variant="h2">Modals</Typography>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Typography variant="h5">Modal Options</Typography>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Size:</Typography>
                      <Select
                        value={modalSize}
                        onChange={(value) => setModalSize(value as any)}
                        size="small"
                        options={[
                          { value: 'small', label: 'Small' },
                          { value: 'medium', label: 'Medium' },
                          { value: 'large', label: 'Large' },
                          { value: 'xlarge', label: 'X-Large' },
                          { value: 'full', label: 'Full' }
                        ]}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Backdrop:</Typography>
                      <Select
                        value={modalBackdrop}
                        onChange={(value) => setModalBackdrop(value as any)}
                        size="small"
                        options={[
                          { value: 'blur', label: 'Blur' },
                          { value: 'dark', label: 'Dark' },
                          { value: 'light', label: 'Light' },
                          { value: 'none', label: 'None' }
                        ]}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Animation:</Typography>
                      <Select
                        value={modalAnimation}
                        onChange={(value) => setModalAnimation(value as any)}
                        size="small"
                        options={[
                          { value: 'fade', label: 'Fade' },
                          { value: 'scale', label: 'Scale' },
                          { value: 'slide', label: 'Slide' },
                          { value: 'zoom', label: 'Zoom' },
                          { value: 'flip', label: 'Flip' }
                        ]}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Typography variant="body2" color="muted">Scroll:</Typography>
                      <Select
                        value={modalScrollBehavior}
                        onChange={(value) => setModalScrollBehavior(value as any)}
                        size="small"
                        options={[
                          { value: 'outside', label: 'Outside' },
                          { value: 'inside', label: 'Inside' }
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Checkbox
                      size="small"
                      checked={modalCloseOnBackdrop}
                      onChange={(e) => setModalCloseOnBackdrop(e.target.checked)}
                      label="Close on backdrop click"
                    />
                    <Checkbox
                      size="small"
                      checked={modalCloseOnEscape}
                      onChange={(e) => setModalCloseOnEscape(e.target.checked)}
                      label="Close on ESC key"
                    />
                  </div>

                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3}>
                      <Button 
                        variant="solid" 
                        color="primary"
                        onClick={() => setDemoModals(prev => ({ ...prev, basic: true }))}
                        className="w-full"
                      >
                        Basic Modal
                      </Button>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <Button 
                        variant="outline" 
                        color="secondary"
                        onClick={() => setDemoModals(prev => ({ ...prev, form: true }))}
                        className="w-full"
                      >
                        Form Modal
                      </Button>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <Button 
                        variant="glass" 
                        color="info"
                        onClick={() => setDemoModals(prev => ({ ...prev, confirmation: true }))}
                        className="w-full"
                      >
                        Confirmation Modal
                      </Button>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <Button 
                        variant="ghost" 
                        color="warning"
                        onClick={() => setDemoModals(prev => ({ ...prev, gallery: true }))}
                        className="w-full"
                      >
                        Gallery Modal
                      </Button>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <Button 
                        variant="glow" 
                        color="success"
                        onClick={() => setDemoModals(prev => ({ ...prev, long: true }))}
                        className="w-full"
                      >
                        Long Content Modal
                      </Button>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <Button 
                        variant="solid" 
                        color="danger"
                        onClick={() => setDemoModals(prev => ({ ...prev, nested: true }))}
                        className="w-full"
                      >
                        Nested Modals
                      </Button>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <Button 
                        variant="outline" 
                        color="primary"
                        onClick={() => setDemoModals(prev => ({ ...prev, fullscreen: true }))}
                        className="w-full"
                      >
                        Full Screen Modal
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Interactive Demo */}
          <section className="space-y-6">
            <Typography variant="h2">Interactive Demo</Typography>
            
            <Card variant="elevated">
              <CardHeader>
                <Typography variant="h5">Try the Components</Typography>
              </CardHeader>
              <CardBody className="space-y-4">
                <div className="flex gap-2">
                  <Button onClick={() => setModalOpen(true)}>
                    Open Modal
                  </Button>
                  <ToastDemo />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button variant="glass" size="small">Small Glass</Button>
                  <Button variant="glow" color="secondary" size="small">Secondary Glow</Button>
                  <Button variant="ghost" color="success" size="small">Success Ghost</Button>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Modal */}
          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <ModalHeader onClose={() => setModalOpen(false)}>
              <Typography variant="h5" className="font-semibold">Welcome to Velvet UI</Typography>
            </ModalHeader>
            <ModalBody>
              <Typography variant="body1" color="muted" className="mb-4">
                This modal demonstrates the smooth Mac OS-style animations. Notice how it scales in and out with a spring animation.
              </Typography>
              <div className="space-y-3">
                <Input
                  label="Name"
                  placeholder="Enter your name"
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setModalOpen(false)}>
                Continue
              </Button>
            </ModalFooter>
          </Modal>

          {/* Demo Modals */}
          <Modal 
            open={demoModals.basic || false} 
            onClose={() => setDemoModals(prev => ({ ...prev, basic: false }))}
            size={modalSize}
            backdrop={modalBackdrop}
            animation={modalAnimation}
            scrollBehavior={modalScrollBehavior}
            closeOnBackdrop={modalCloseOnBackdrop}
            closeOnEscape={modalCloseOnEscape}
          >
            <ModalHeader onClose={() => setDemoModals(prev => ({ ...prev, basic: false }))}>
              <Typography variant="h5" className="font-semibold">Basic Modal</Typography>
            </ModalHeader>
            <ModalBody>
              <Typography variant="body1" color="muted">
                This is a basic modal with configurable size, backdrop, and animation options. Try changing the settings above to see different behaviors.
              </Typography>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setDemoModals(prev => ({ ...prev, basic: false }))}>
                Close
              </Button>
            </ModalFooter>
          </Modal>

          <Modal 
            open={demoModals.form || false} 
            onClose={() => setDemoModals(prev => ({ ...prev, form: false }))}
            size={modalSize}
            backdrop={modalBackdrop}
            animation={modalAnimation}
            scrollBehavior={modalScrollBehavior}
            closeOnBackdrop={modalCloseOnBackdrop}
            closeOnEscape={modalCloseOnEscape}
          >
            <ModalHeader onClose={() => setDemoModals(prev => ({ ...prev, form: false }))}>
              <Typography variant="h5" className="font-semibold">Create New Account</Typography>
            </ModalHeader>
            <ModalBody>
              <form className="space-y-4">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                />
                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="••••••••"
                />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setDemoModals(prev => ({ ...prev, form: false }))}>
                Cancel
              </Button>
              <Button onClick={() => setDemoModals(prev => ({ ...prev, form: false }))}>
                Create Account
              </Button>
            </ModalFooter>
          </Modal>

          <Modal 
            open={demoModals.confirmation || false} 
            onClose={() => setDemoModals(prev => ({ ...prev, confirmation: false }))}
            size={modalSize}
            backdrop={modalBackdrop}
            animation={modalAnimation}
            scrollBehavior={modalScrollBehavior}
            closeOnBackdrop={modalCloseOnBackdrop}
            closeOnEscape={modalCloseOnEscape}
          >
            <ModalHeader onClose={() => setDemoModals(prev => ({ ...prev, confirmation: false }))}>
              <Typography variant="h5" className="font-semibold">Confirm Action</Typography>
            </ModalHeader>
            <ModalBody>
              <Typography variant="body1" color="muted">
                Are you sure you want to delete this item? This action cannot be undone.
              </Typography>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setDemoModals(prev => ({ ...prev, confirmation: false }))}>
                Cancel
              </Button>
              <Button color="danger" onClick={() => setDemoModals(prev => ({ ...prev, confirmation: false }))}>
                Delete
              </Button>
            </ModalFooter>
          </Modal>

          <Modal 
            open={demoModals.gallery || false} 
            onClose={() => setDemoModals(prev => ({ ...prev, gallery: false }))}
            size={modalSize}
            backdrop={modalBackdrop}
            animation={modalAnimation}
            scrollBehavior={modalScrollBehavior}
            closeOnBackdrop={modalCloseOnBackdrop}
            closeOnEscape={modalCloseOnEscape}
          >
            <ModalHeader onClose={() => setDemoModals(prev => ({ ...prev, gallery: false }))}>
              <Typography variant="h5" className="font-semibold">Image Gallery</Typography>
            </ModalHeader>
            <ModalBody>
              <Grid container spacing={3}>
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <Grid key={i} item xs={4}>
                    <div className="aspect-square bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg" />
                  </Grid>
                ))}
              </Grid>
            </ModalBody>
          </Modal>

          <Modal 
            open={demoModals.long || false} 
            onClose={() => setDemoModals(prev => ({ ...prev, long: false }))}
            size={modalSize}
            backdrop={modalBackdrop}
            animation={modalAnimation}
            scrollBehavior={modalScrollBehavior}
            closeOnBackdrop={modalCloseOnBackdrop}
            closeOnEscape={modalCloseOnEscape}
          >
            <ModalHeader onClose={() => setDemoModals(prev => ({ ...prev, long: false }))}>
              <Typography variant="h5" className="font-semibold">Terms of Service</Typography>
            </ModalHeader>
            <ModalBody scrollable={modalScrollBehavior === 'inside'}>
              <div className="space-y-4 text-[var(--color-foreground-secondary)]">
                <Typography variant="h6" className="font-semibold text-[var(--color-foreground)]">1. Introduction</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                
                <Typography variant="h6" className="font-semibold text-[var(--color-foreground)]">2. User Agreement</Typography>
                <Typography variant="body1">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                
                <Typography variant="h6" className="font-semibold text-[var(--color-foreground)]">3. Privacy Policy</Typography>
                <Typography variant="body1">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                
                <Typography variant="h6" className="font-semibold text-[var(--color-foreground)]">4. Terms of Use</Typography>
                <Typography variant="body1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                
                <Typography variant="h6" className="font-semibold text-[var(--color-foreground)]">5. Limitations</Typography>
                <Typography variant="body1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Typography>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setDemoModals(prev => ({ ...prev, long: false }))}>
                Decline
              </Button>
              <Button onClick={() => setDemoModals(prev => ({ ...prev, long: false }))}>
                Accept
              </Button>
            </ModalFooter>
          </Modal>

          <Modal 
            open={demoModals.fullscreen || false} 
            onClose={() => setDemoModals(prev => ({ ...prev, fullscreen: false }))}
            size="full"
            backdrop={modalBackdrop}
            animation={modalAnimation}
            scrollBehavior={modalScrollBehavior}
            closeOnBackdrop={modalCloseOnBackdrop}
            closeOnEscape={modalCloseOnEscape}
          >
            <ModalHeader onClose={() => setDemoModals(prev => ({ ...prev, fullscreen: false }))}>
              <Typography variant="h5" className="font-semibold">Full Screen Modal</Typography>
            </ModalHeader>
            <ModalBody scrollable={modalScrollBehavior === 'inside'}>
              <div className="max-w-4xl mx-auto py-8">
                <Typography variant="h4" className="mb-4">Full Screen Experience</Typography>
                <Typography variant="body1" color="muted" className="mb-6">
                  This modal takes up the entire viewport. The footer is fixed at the bottom, and the content area can scroll if needed.
                </Typography>
                
                <Grid container spacing={3} className="mb-8">
                  <Grid item xs={12} md={6}>
                    <Card>
                      <CardBody>
                        <Typography variant="h6" className="font-semibold mb-2">Feature One</Typography>
                        <Typography variant="body1" color="muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                      </CardBody>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Card>
                      <CardBody>
                        <Typography variant="h6" className="font-semibold mb-2">Feature Two</Typography>
                        <Typography variant="body1" color="muted">
                          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                      </CardBody>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Card>
                      <CardBody>
                        <Typography variant="h6" className="font-semibold mb-2">Feature Three</Typography>
                        <Typography variant="body1" color="muted">
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </Typography>
                      </CardBody>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Card>
                      <CardBody>
                        <Typography variant="h6" className="font-semibold mb-2">Feature Four</Typography>
                        <Typography variant="body1" color="muted">
                          Duis aute irure dolor in reprehenderit in voluptate velit.
                        </Typography>
                      </CardBody>
                    </Card>
                  </Grid>
                </Grid>
                
                <div className="space-y-4">
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <Input
                    label="Message"
                    placeholder="Type your message here..."
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setDemoModals(prev => ({ ...prev, fullscreen: false }))}>
                Cancel
              </Button>
              <Button color="primary" onClick={() => setDemoModals(prev => ({ ...prev, fullscreen: false }))}>
                Save Changes
              </Button>
            </ModalFooter>
          </Modal>

          <Modal 
            open={demoModals.nested || false} 
            onClose={() => setDemoModals(prev => ({ ...prev, nested: false }))}
            size={modalSize}
            backdrop={modalBackdrop}
            animation={modalAnimation}
            scrollBehavior={modalScrollBehavior}
            closeOnBackdrop={modalCloseOnBackdrop}
            closeOnEscape={modalCloseOnEscape}
          >
            <ModalHeader onClose={() => setDemoModals(prev => ({ ...prev, nested: false }))}>
              <Typography variant="h5" className="font-semibold">Parent Modal</Typography>
            </ModalHeader>
            <ModalBody>
              <Typography variant="body1" color="muted" className="mb-4">
                This is the parent modal. Click the button below to open a nested modal.
              </Typography>
              <Button 
                color="primary"
                onClick={() => setDemoModals(prev => ({ ...prev, nestedChild: true }))}
              >
                Open Nested Modal
              </Button>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setDemoModals(prev => ({ ...prev, nested: false }))}>
                Close
              </Button>
            </ModalFooter>
          </Modal>

          <Modal 
            open={demoModals.nestedChild || false} 
            onClose={() => setDemoModals(prev => ({ ...prev, nestedChild: false }))}
            size="small"
            backdrop="dark"
            animation="zoom"
            closeOnBackdrop={true}
            closeOnEscape={true}
            zIndex={1060}
          >
            <ModalHeader onClose={() => setDemoModals(prev => ({ ...prev, nestedChild: false }))}>
              <Typography variant="h5" className="font-semibold">Nested Modal</Typography>
            </ModalHeader>
            <ModalBody>
              <Typography variant="body1" color="muted" className="mb-4">
                This is a nested modal that appears on top of the parent modal. Notice how it has its own backdrop and can be closed independently.
              </Typography>
              <div className="space-y-3">
                <Input
                  label="Nested Input"
                  placeholder="Type something..."
                />
                <Button 
                  variant="outline"
                  color="secondary"
                  size="small"
                  onClick={() => setDemoModals(prev => ({ ...prev, nestedGrandchild: true }))}
                  className="w-full"
                >
                  Open Another Nested Modal
                </Button>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" size="small" onClick={() => setDemoModals(prev => ({ ...prev, nestedChild: false }))}>
                Cancel
              </Button>
              <Button size="small" onClick={() => setDemoModals(prev => ({ ...prev, nestedChild: false }))}>
                Save
              </Button>
            </ModalFooter>
          </Modal>

          <Modal 
            open={demoModals.nestedGrandchild || false} 
            onClose={() => setDemoModals(prev => ({ ...prev, nestedGrandchild: false }))}
            size="small"
            backdrop="blur"
            animation="fade"
            closeOnBackdrop={true}
            closeOnEscape={true}
            zIndex={1080}
          >
            <ModalHeader onClose={() => setDemoModals(prev => ({ ...prev, nestedGrandchild: false }))}>
              <Typography variant="h6" className="font-semibold">Third Level Modal</Typography>
            </ModalHeader>
            <ModalBody>
              <Typography variant="body1" color="muted">
                This demonstrates multiple levels of nested modals. Each modal has its own z-index and backdrop.
              </Typography>
            </ModalBody>
            <ModalFooter>
              <Button 
                variant="solid" 
                size="small" 
                color="primary"
                onClick={() => setDemoModals(prev => ({ ...prev, nestedGrandchild: false }))}
                className="w-full"
              >
                Got it!
              </Button>
            </ModalFooter>
          </Modal>
          {/* Badge Section */}
          <Typography variant="h3" className="mb-6 mt-12">Badge</Typography>
          <Card className="mb-8">
            <CardHeader>
              <Typography variant="h5">Badge Variants</Typography>
            </CardHeader>
            <CardBody>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="solid" color="primary">Primary</Badge>
                  <Badge variant="solid" color="secondary">Secondary</Badge>
                  <Badge variant="solid" color="success">Success</Badge>
                  <Badge variant="solid" color="warning">Warning</Badge>
                  <Badge variant="solid" color="danger">Danger</Badge>
                  <Badge variant="solid" color="info">Info</Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" color="primary">Outline Primary</Badge>
                  <Badge variant="outline" color="secondary">Outline Secondary</Badge>
                  <Badge variant="outline" color="success">Outline Success</Badge>
                  <Badge variant="outline" color="warning">Outline Warning</Badge>
                  <Badge variant="outline" color="danger">Outline Danger</Badge>
                  <Badge variant="outline" color="info">Outline Info</Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="soft" color="primary">Soft Primary</Badge>
                  <Badge variant="soft" color="secondary">Soft Secondary</Badge>
                  <Badge variant="soft" color="success">Soft Success</Badge>
                  <Badge variant="soft" color="warning">Soft Warning</Badge>
                  <Badge variant="soft" color="danger">Soft Danger</Badge>
                  <Badge variant="soft" color="info">Soft Info</Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge size="small">Small</Badge>
                  <Badge size="medium">Medium</Badge>
                  <Badge size="large">Large</Badge>
                  <Badge radius="none">No Radius</Badge>
                  <Badge radius="small">Small Radius</Badge>
                  <Badge radius="medium">Medium Radius</Badge>
                  <Badge radius="large">Large Radius</Badge>
                  <Badge radius="full">Full Radius</Badge>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Alert Section */}
          <Typography variant="h3" className="mb-6 mt-12">Alert</Typography>
          <Card className="mb-8">
            <CardHeader>
              <Typography variant="h5">Alert Examples</Typography>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <Alert>
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>This is a default alert message.</AlertDescription>
                </Alert>
                <Alert variant="info">
                  <AlertTitle>Info Alert</AlertTitle>
                  <AlertDescription>This is an informational alert message.</AlertDescription>
                </Alert>
                <Alert variant="success">
                  <AlertTitle>Success Alert</AlertTitle>
                  <AlertDescription>Your action was completed successfully!</AlertDescription>
                </Alert>
                <Alert variant="warning">
                  <AlertTitle>Warning Alert</AlertTitle>
                  <AlertDescription>Please review this important information.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Error Alert</AlertTitle>
                  <AlertDescription>Something went wrong. Please try again.</AlertDescription>
                </Alert>
                <Alert variant="info" closable onClose={() => console.log('Alert closed')}>
                  <AlertTitle>Closable Alert</AlertTitle>
                  <AlertDescription>This alert can be dismissed by clicking the X button.</AlertDescription>
                </Alert>
              </div>
            </CardBody>
          </Card>

          {/* Tabs Section */}
          <Typography variant="h3" className="mb-6 mt-12">Tabs</Typography>
          <Card className="mb-8">
            <CardHeader>
              <Typography variant="h5">Tabs Examples</Typography>
            </CardHeader>
            <CardBody>
              <div className="space-y-8">
                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">Solid Tabs</Typography>
                  <Tabs defaultValue="tab1" variant="solid">
                    <TabsList>
                      <TabsTrigger value="tab1">Profile</TabsTrigger>
                      <TabsTrigger value="tab2">Settings</TabsTrigger>
                      <TabsTrigger value="tab3">Notifications</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">
                      <Typography>Profile content goes here. You can add any components or content within tabs.</Typography>
                    </TabsContent>
                    <TabsContent value="tab2">
                      <Typography>Settings content goes here. Each tab can have completely different content.</Typography>
                    </TabsContent>
                    <TabsContent value="tab3">
                      <Typography>Notifications content goes here. Tabs support smooth animations between content.</Typography>
                    </TabsContent>
                  </Tabs>
                </div>

                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">Underlined Tabs</Typography>
                  <Tabs defaultValue="tab1" variant="underlined">
                    <TabsList>
                      <TabsTrigger value="tab1">Overview</TabsTrigger>
                      <TabsTrigger value="tab2">Analytics</TabsTrigger>
                      <TabsTrigger value="tab3">Reports</TabsTrigger>
                      <TabsTrigger value="tab4">Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">
                      <Typography>Overview content with underlined tab style.</Typography>
                    </TabsContent>
                    <TabsContent value="tab2">
                      <Typography>Analytics content with smooth transitions.</Typography>
                    </TabsContent>
                    <TabsContent value="tab3">
                      <Typography>Reports content with animated underline.</Typography>
                    </TabsContent>
                    <TabsContent value="tab4">
                      <Typography>Settings content with clean design.</Typography>
                    </TabsContent>
                  </Tabs>
                </div>

                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">Pills Tabs</Typography>
                  <Tabs defaultValue="tab1" variant="pills">
                    <TabsList>
                      <TabsTrigger value="tab1">All</TabsTrigger>
                      <TabsTrigger value="tab2">Active</TabsTrigger>
                      <TabsTrigger value="tab3">Completed</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">
                      <Typography>All items displayed here.</Typography>
                    </TabsContent>
                    <TabsContent value="tab2">
                      <Typography>Active items only.</Typography>
                    </TabsContent>
                    <TabsContent value="tab3">
                      <Typography>Completed items only.</Typography>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Accordion Section */}
          <Typography variant="h3" className="mb-6 mt-12">Accordion</Typography>
          <Card className="mb-8">
            <CardHeader>
              <Typography variant="h5">Accordion Examples</Typography>
            </CardHeader>
            <CardBody>
              <div className="space-y-6">
                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">Single Accordion</Typography>
                  <Accordion type="single" defaultValue="item-1">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is Velvet UI?</AccordionTrigger>
                      <AccordionContent>
                        Velvet UI is a modern React component library with smooth animations and Mac OS-inspired aesthetics. It provides a comprehensive set of components for building beautiful user interfaces.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do I install Velvet UI?</AccordionTrigger>
                      <AccordionContent>
                        You can install Velvet UI using npm or yarn. Simply run `npm install @velvet-ui/core` or `yarn add @velvet-ui/core` in your project directory.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is Velvet UI accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes! Velvet UI is built with accessibility in mind. All components follow WAI-ARIA guidelines and include proper keyboard navigation support.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">Multiple Accordion</Typography>
                  <Accordion type="multiple" defaultValue={["item-1", "item-3"]}>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Features</AccordionTrigger>
                      <AccordionContent>
                        Velvet UI includes 20+ components, 10 pre-built themes, TypeScript support, and smooth Framer Motion animations.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Customization</AccordionTrigger>
                      <AccordionContent>
                        Every component can be customized using Tailwind CSS classes. The theme system uses CSS variables for easy customization.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Browser Support</AccordionTrigger>
                      <AccordionContent>
                        Velvet UI supports all modern browsers including Chrome, Firefox, Safari, and Edge. IE11 is not supported.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Table Section */}
          <Typography variant="h3" className="mb-6 mt-12">Table</Typography>
          <Card className="mb-8">
            <CardHeader>
              <Typography variant="h5">Table Example</Typography>
            </CardHeader>
            <CardBody>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Version</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Button</TableCell>
                    <TableCell><Badge variant="soft" color="success">Stable</Badge></TableCell>
                    <TableCell>Actions</TableCell>
                    <TableCell>1.0.0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Card</TableCell>
                    <TableCell><Badge variant="soft" color="success">Stable</Badge></TableCell>
                    <TableCell>Layout</TableCell>
                    <TableCell>1.0.0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Modal</TableCell>
                    <TableCell><Badge variant="soft" color="success">Stable</Badge></TableCell>
                    <TableCell>Overlay</TableCell>
                    <TableCell>1.0.0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Table</TableCell>
                    <TableCell><Badge variant="soft" color="warning">Beta</Badge></TableCell>
                    <TableCell>Data Display</TableCell>
                    <TableCell>0.9.0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Accordion</TableCell>
                    <TableCell><Badge variant="soft" color="warning">Beta</Badge></TableCell>
                    <TableCell>Disclosure</TableCell>
                    <TableCell>0.9.0</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>

          {/* CodeBlock Section */}
          <Typography variant="h3" className="mb-6 mt-12">CodeBlock</Typography>
          <Card className="mb-8">
            <CardHeader>
              <Typography variant="h5">CodeBlock Examples</Typography>
            </CardHeader>
            <CardBody>
              <div className="space-y-6">
                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">Basic Code Block</Typography>
                  <CodeBlock language="tsx">{`import { Button } from '@velvet-ui/core'

function App() {
  return (
    <Button variant="solid" color="primary">
      Click me
    </Button>
  )
}`}</CodeBlock>
                </div>

                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">With Filename</Typography>
                  <CodeBlock language="tsx" filename="App.tsx">{`export default function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </div>
  )
}`}</CodeBlock>
                </div>

                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">With Line Numbers</Typography>
                  <CodeBlock language="css" showLineNumbers>{`.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 150ms;
}

.button:hover {
  transform: scale(1.05);
}`}</CodeBlock>
                </div>

                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">Light Theme</Typography>
                  <CodeBlock language="json" theme="light">{`{
  "name": "@velvet-ui/core",
  "version": "1.0.0",
  "description": "A modern React component library",
  "main": "dist/index.js",
  "types": "dist/index.d.ts"
}`}</CodeBlock>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Breadcrumb Section */}
          <Typography variant="h3" className="mb-6 mt-12">Breadcrumb</Typography>
          <Card className="mb-8">
            <CardHeader>
              <Typography variant="h5">Breadcrumb Examples</Typography>
            </CardHeader>
            <CardBody>
              <div className="space-y-6">
                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">Basic Breadcrumb</Typography>
                  <Breadcrumb
                    items={[
                      { label: 'Home', href: '/' },
                      { label: 'Components', href: '/components' },
                      { label: 'Breadcrumb' }
                    ]}
                  />
                </div>

                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">With Icons</Typography>
                  <Breadcrumb
                    items={[
                      { label: 'Dashboard', href: '/', icon: <span>🏠</span> },
                      { label: 'Projects', href: '/projects', icon: <span>📁</span> },
                      { label: 'Velvet UI', href: '/projects/velvet-ui', icon: <span>🎨</span> },
                      { label: 'Components' }
                    ]}
                  />
                </div>

                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">With Max Items</Typography>
                  <Breadcrumb
                    maxItems={3}
                    items={[
                      { label: 'Home', href: '/' },
                      { label: 'Products', href: '/products' },
                      { label: 'Electronics', href: '/products/electronics' },
                      { label: 'Computers', href: '/products/electronics/computers' },
                      { label: 'Laptops', href: '/products/electronics/computers/laptops' },
                      { label: 'Gaming Laptops' }
                    ]}
                  />
                </div>

                <div>
                  <Typography variant="body2" className="mb-4 text-foreground-secondary">Custom Separator</Typography>
                  <Breadcrumb
                    separator={<span className="mx-2">→</span>}
                    items={[
                      { label: 'Start', href: '/' },
                      { label: 'Middle', href: '/middle' },
                      { label: 'End' }
                    ]}
                  />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Container & Section Demo */}
          <Typography variant="h3" className="mb-6 mt-12">Container & Section</Typography>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <Typography variant="h5">Container Sizes</Typography>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <Container size="small" className="bg-background-secondary p-4 rounded">
                    <Typography variant="body2" className="text-center">Small Container (max-w-2xl)</Typography>
                  </Container>
                  <Container size="medium" className="bg-background-secondary p-4 rounded">
                    <Typography variant="body2" className="text-center">Medium Container (max-w-4xl)</Typography>
                  </Container>
                  <Container size="large" className="bg-background-secondary p-4 rounded">
                    <Typography variant="body2" className="text-center">Large Container (max-w-6xl)</Typography>
                  </Container>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Typography variant="h5">Section Examples</Typography>
              </CardHeader>
              <CardBody className="p-0">
                <Section spacing="small" background="secondary">
                  <Typography className="text-center">Small Section with Secondary Background</Typography>
                </Section>
                <Section spacing="medium" background="gradient">
                  <Typography className="text-center">Medium Section with Gradient Background</Typography>
                </Section>
                <Section spacing="small" background="dots">
                  <Typography className="text-center">Small Section with Dots Pattern</Typography>
                </Section>
              </CardBody>
            </Card>
          </div>

        </div>
      </div>
    </ToastProvider>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" defaultThemeName="default">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;