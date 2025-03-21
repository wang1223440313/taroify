import { type ITouchEvent, View } from "@tarojs/components"
import type { ViewProps } from "@tarojs/components/types/View"
import classNames from "classnames"
import * as React from "react"
import { type ReactNode, useCallback, useContext } from "react"
import Badge from "../badge"
import SidebarContext from "../sidebar/sidebar.context"
import { prefixClassname } from "../styles"

interface SidebarTabContentProps {
  badge?: boolean | string | number | ReactNode
  children: ReactNode
}

function SidebarTabContent(props: SidebarTabContentProps) {
  const { badge, children } = props

  return (
    <Badge
      className={prefixClassname("sidebar-tab__content")}
      children={children}
      content={badge}
    />
  )
}

interface SidebarTabProps extends ViewProps {
  className?: string
  value?: any
  disabled?: boolean
  badge?: boolean | string | number | ReactNode
  children?: ReactNode
}

function SidebarTab(props: SidebarTabProps) {
  const { value, className, disabled, badge, children, onClick, ...restProps } = props
  const { value: activeValue, onTabClick } = useContext(SidebarContext)
  const active = activeValue === value

  const handleClick = useCallback(
    (event: ITouchEvent) => {
      onClick?.(event)
      onTabClick?.({ value, disabled, children })
    },
    [children, disabled, onClick, onTabClick, value],
  )

  return (
    <View
      className={classNames(
        prefixClassname("sidebar-tab"),
        {
          [prefixClassname("sidebar-tab--active")]: active,
          [prefixClassname("sidebar-tab--disabled")]: disabled,
        },
        className,
      )}
      onClick={handleClick}
      {...restProps}
    >
      <SidebarTabContent badge={badge} children={children} />
    </View>
  )
}

export default SidebarTab
