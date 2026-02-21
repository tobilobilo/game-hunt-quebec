import { SupportedLocale } from "../config/global";
import { Label } from "../types/label";

export function getLabel(label: Label, locale: string | undefined)  {
    return label[locale as SupportedLocale] || label['fr'];
};