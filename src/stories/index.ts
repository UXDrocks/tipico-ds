/**
 * Design system barrel: components, icons, and screen layout utilities.
 * Use for app imports: import { Button, Card, ProgressBar } from './stories';
 */

/* Components */
export { Alert, type AlertVariant, type AlertProps } from './Alert';
export { Article, type ArticleProps } from './Article';
export { BottomNavigation, type BottomNavigationItem, type BottomNavigationProps } from './BottomNavigation';
export { Button, type ButtonVariant, type ButtonProps } from './Button';
export { Card, type CardVariant, type CardProps } from './Card';
export { Dialog, type DialogProps } from './Dialog';
export { Header, type HeaderVariant, type HeaderProps } from './Header';
export { InputField, type InputFieldProps } from './InputField';
export { Label, type LabelVariant, type LabelProps } from './Label';
export { Link, type LinkProps } from './Link';
export { List, type ListProps } from './List';
export { Pill, type PillVariant, type PillProps } from './Pill';
export { ProgressBar, type ProgressBarVariant, type ProgressBarAppearance, type ProgressBarProps } from './ProgressBar';
export { TabBar, type TabBarTab, type TabBarProps } from './TabBar';
export { Tag, type TagVariant, type TagProps } from './Tag';
export { TextField, type TextFieldProps } from './TextField';
export { Toast, type ToastVariant, type ToastProps } from './Toast';
export { ToastProvider, useToast, type ToastOptions, type ToastProviderProps } from './ToastProvider';
export { ToastStack, type ToastItem, type ToastStackProps } from './ToastStack';
export { TipicoLogo, type TipicoLogoVariant, type TipicoLogoProps } from './TipicoLogo';
export { LoginScreen, type LoginScreenProps } from './LoginScreen';

/* Screen layout (styles + default nav items for full-screen stories) */
export { screenRootStyles, screenMainStyles, defaultBottomNavItems } from './screen-layout';

/* Icons */
export {
  type DSIconProps,
  AlertCircleIcon,
  CheckCircleIcon,
  InfoIcon,
  XCircleIcon,
  BellIcon,
  StarIcon,
  HeartIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
  SettingsIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  PlusIcon,
  MinusIcon,
  LockIcon,
  UnlockIcon,
  EyeIcon,
  EyeOffIcon,
  MenuIcon,
  ICONS,
  type IconId,
  ICON_OPTIONS,
  type IconOption,
  iconFromOption,
} from './icons';
