import Popup from "../popup"
import SheetComponent, { type SheetProps } from "./sheet"
import SheetButton from "./sheet-button"
import SheetHeader from "./sheet-header"
import SheetItem from "./sheet-item"
import type { SheetItemObject } from "./sheet.shared"

export type { SheetProps } from "./sheet"
export type { SheetHeaderProps } from "./sheet-header"
export type { SheetItemProps } from "./sheet-item"
export type { SheetButtonProps } from "./sheet-button"

export type { SheetThemeVars } from "./sheet.shared"

interface SheetInterface {
  (props: SheetProps): JSX.Element

  Backdrop: typeof Popup.Backdrop
  Header: typeof SheetHeader
  Item: typeof SheetItem
  Button: typeof SheetButton
}

const Sheet = SheetComponent as SheetInterface
Sheet.Backdrop = Popup.Backdrop
Sheet.Header = SheetHeader
Sheet.Item = SheetItem
Sheet.Button = SheetButton

namespace Sheet {
  export type ItemObject = SheetItemObject
}

export default Sheet
