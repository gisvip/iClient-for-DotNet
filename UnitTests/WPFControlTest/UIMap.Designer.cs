﻿// ------------------------------------------------------------------------------
//  <auto-generated>
//      此代码由编码的 UI 测试生成器生成。
//      版本: 10.0.0.0
//
//      如果重新生成代码，则更改此文件可能会导致错误的行为，
//      并将丢失这些更改。
//  </auto-generated>
// ------------------------------------------------------------------------------

namespace MapControlTest
{
    using System;
    using System.CodeDom.Compiler;
    using System.Collections.Generic;
    using System.Drawing;
    using System.Text.RegularExpressions;
    using System.Windows.Input;
    using Microsoft.VisualStudio.TestTools.UITest.Extension;
    using Microsoft.VisualStudio.TestTools.UITesting;
    using Microsoft.VisualStudio.TestTools.UITesting.WinControls;
    using Microsoft.VisualStudio.TestTools.UITesting.WpfControls;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Keyboard = Microsoft.VisualStudio.TestTools.UITesting.Keyboard;
    using Mouse = Microsoft.VisualStudio.TestTools.UITesting.Mouse;
    using MouseButtons = System.Windows.Forms.MouseButtons;
    
    
    [GeneratedCode("编码的 UI 测试生成器", "10.0.40219.1")]
    public partial class UIMap
    {
        
        #region Properties
        public UIMainWindowWindow UIMainWindowWindow
        {
            get
            {
                if ((this.mUIMainWindowWindow == null))
                {
                    this.mUIMainWindowWindow = new UIMainWindowWindow();
                }
                return this.mUIMainWindowWindow;
            }
        }
        
        public UI提示Window UI提示Window
        {
            get
            {
                if ((this.mUI提示Window == null))
                {
                    this.mUI提示Window = new UI提示Window();
                }
                return this.mUI提示Window;
            }
        }
        #endregion
        
        #region Fields
        private UIMainWindowWindow mUIMainWindowWindow;
        
        private UI提示Window mUI提示Window;
        #endregion
    }
    
    [GeneratedCode("编码的 UI 测试生成器", "10.0.40219.1")]
    public class UIMainWindowWindow : WpfWindow
    {
        
        public UIMainWindowWindow()
        {
            #region 搜索条件
            this.SearchProperties[WpfWindow.PropertyNames.Name] = "MainWindow";
            this.SearchProperties.Add(new PropertyExpression(WpfWindow.PropertyNames.ClassName, "HwndWrapper", PropertyExpressionOperator.Contains));
            this.WindowTitles.Add("MainWindow");
            #endregion
        }
        
        #region Properties
        public WpfCustom UIMapCustom
        {
            get
            {
                if ((this.mUIMapCustom == null))
                {
                    this.mUIMapCustom = new WpfCustom(this);
                    #region 搜索条件
                    this.mUIMapCustom.SearchProperties[UITestControl.PropertyNames.ClassName] = "Uia.MapControl";
                    this.mUIMapCustom.SearchProperties["AutomationId"] = "Map";
                    this.mUIMapCustom.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIMapCustom;
            }
        }
        
        public WpfButton UI拖动Button
        {
            get
            {
                if ((this.mUI拖动Button == null))
                {
                    this.mUI拖动Button = new WpfButton(this);
                    #region 搜索条件
                    this.mUI拖动Button.SearchProperties[WpfButton.PropertyNames.AutomationId] = "DragButton";
                    this.mUI拖动Button.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUI拖动Button;
            }
        }
        
        public WpfEdit UINowCenterYEdit
        {
            get
            {
                if ((this.mUINowCenterYEdit == null))
                {
                    this.mUINowCenterYEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUINowCenterYEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "NowCenterY";
                    this.mUINowCenterYEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUINowCenterYEdit;
            }
        }
        
        public WpfEdit UINowCenterXEdit
        {
            get
            {
                if ((this.mUINowCenterXEdit == null))
                {
                    this.mUINowCenterXEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUINowCenterXEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "NowCenterX";
                    this.mUINowCenterXEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUINowCenterXEdit;
            }
        }
        
        public WpfEdit UIPanCenterEdit
        {
            get
            {
                if ((this.mUIPanCenterEdit == null))
                {
                    this.mUIPanCenterEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIPanCenterEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "PanCenter";
                    this.mUIPanCenterEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIPanCenterEdit;
            }
        }
        
        public WpfButton UI确定Button
        {
            get
            {
                if ((this.mUI确定Button == null))
                {
                    this.mUI确定Button = new WpfButton(this);
                    #region 搜索条件
                    this.mUI确定Button.SearchProperties[WpfButton.PropertyNames.AutomationId] = "CenterChange";
                    this.mUI确定Button.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUI确定Button;
            }
        }
        
        public WpfEdit UIItemEdit
        {
            get
            {
                if ((this.mUIItemEdit == null))
                {
                    this.mUIItemEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIItemEdit.SearchProperties[WpfEdit.PropertyNames.Instance] = "4";
                    this.mUIItemEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIItemEdit;
            }
        }
        
        public WpfEdit UIZoomEdit
        {
            get
            {
                if ((this.mUIZoomEdit == null))
                {
                    this.mUIZoomEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIZoomEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "Zoom";
                    this.mUIZoomEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIZoomEdit;
            }
        }
        
        public WpfButton UI确定Button1
        {
            get
            {
                if ((this.mUI确定Button1 == null))
                {
                    this.mUI确定Button1 = new WpfButton(this);
                    #region 搜索条件
                    this.mUI确定Button1.SearchProperties[WpfButton.PropertyNames.AutomationId] = "ZoomChange";
                    this.mUI确定Button1.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUI确定Button1;
            }
        }
        
        public WpfButton UI修改服务Button
        {
            get
            {
                if ((this.mUI修改服务Button == null))
                {
                    this.mUI修改服务Button = new WpfButton(this);
                    #region 搜索条件
                    this.mUI修改服务Button.SearchProperties[WpfButton.PropertyNames.AutomationId] = "ChangeServer";
                    this.mUI修改服务Button.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUI修改服务Button;
            }
        }
        
        public WpfEdit UIMapNameEdit
        {
            get
            {
                if ((this.mUIMapNameEdit == null))
                {
                    this.mUIMapNameEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIMapNameEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "MapName";
                    this.mUIMapNameEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIMapNameEdit;
            }
        }
        
        public WpfEdit UIUrlEdit
        {
            get
            {
                if ((this.mUIUrlEdit == null))
                {
                    this.mUIUrlEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIUrlEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "Url";
                    this.mUIUrlEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIUrlEdit;
            }
        }
        
        public UI全幅地图范围Group UI全幅地图范围Group
        {
            get
            {
                if ((this.mUI全幅地图范围Group == null))
                {
                    this.mUI全幅地图范围Group = new UI全幅地图范围Group(this);
                }
                return this.mUI全幅地图范围Group;
            }
        }
        
        public UI地图可视范围Group UI地图可视范围Group
        {
            get
            {
                if ((this.mUI地图可视范围Group == null))
                {
                    this.mUI地图可视范围Group = new UI地图可视范围Group(this);
                }
                return this.mUI地图可视范围Group;
            }
        }
        #endregion
        
        #region Fields
        private WpfCustom mUIMapCustom;
        
        private WpfButton mUI拖动Button;
        
        private WpfEdit mUINowCenterYEdit;
        
        private WpfEdit mUINowCenterXEdit;
        
        private WpfEdit mUIPanCenterEdit;
        
        private WpfButton mUI确定Button;
        
        private WpfEdit mUIItemEdit;
        
        private WpfEdit mUIZoomEdit;
        
        private WpfButton mUI确定Button1;
        
        private WpfButton mUI修改服务Button;
        
        private WpfEdit mUIMapNameEdit;
        
        private WpfEdit mUIUrlEdit;
        
        private UI全幅地图范围Group mUI全幅地图范围Group;
        
        private UI地图可视范围Group mUI地图可视范围Group;
        #endregion
    }
    
    [GeneratedCode("编码的 UI 测试生成器", "10.0.40219.1")]
    public class UI全幅地图范围Group : WpfGroup
    {
        
        public UI全幅地图范围Group(UITestControl searchLimitContainer) : 
                base(searchLimitContainer)
        {
            #region 搜索条件
            this.SearchProperties[WpfGroup.PropertyNames.Name] = "全幅地图范围";
            this.WindowTitles.Add("MainWindow");
            #endregion
        }
        
        #region Properties
        public WpfEdit UIBoundsLeftEdit
        {
            get
            {
                if ((this.mUIBoundsLeftEdit == null))
                {
                    this.mUIBoundsLeftEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIBoundsLeftEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "BoundsLeft";
                    this.mUIBoundsLeftEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIBoundsLeftEdit;
            }
        }
        
        public WpfEdit UIBoundsTopEdit
        {
            get
            {
                if ((this.mUIBoundsTopEdit == null))
                {
                    this.mUIBoundsTopEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIBoundsTopEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "BoundsTop";
                    this.mUIBoundsTopEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIBoundsTopEdit;
            }
        }
        
        public WpfEdit UIBoundsRightEdit
        {
            get
            {
                if ((this.mUIBoundsRightEdit == null))
                {
                    this.mUIBoundsRightEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIBoundsRightEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "BoundsRight";
                    this.mUIBoundsRightEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIBoundsRightEdit;
            }
        }
        
        public WpfEdit UIBoundsBottomEdit
        {
            get
            {
                if ((this.mUIBoundsBottomEdit == null))
                {
                    this.mUIBoundsBottomEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIBoundsBottomEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "BoundsBottom";
                    this.mUIBoundsBottomEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIBoundsBottomEdit;
            }
        }
        #endregion
        
        #region Fields
        private WpfEdit mUIBoundsLeftEdit;
        
        private WpfEdit mUIBoundsTopEdit;
        
        private WpfEdit mUIBoundsRightEdit;
        
        private WpfEdit mUIBoundsBottomEdit;
        #endregion
    }
    
    [GeneratedCode("编码的 UI 测试生成器", "10.0.40219.1")]
    public class UI地图可视范围Group : WpfGroup
    {
        
        public UI地图可视范围Group(UITestControl searchLimitContainer) : 
                base(searchLimitContainer)
        {
            #region 搜索条件
            this.SearchProperties[WpfGroup.PropertyNames.Name] = "地图可视范围";
            this.WindowTitles.Add("MainWindow");
            #endregion
        }
        
        #region Properties
        public WpfEdit UIViewBoundsLeftEdit
        {
            get
            {
                if ((this.mUIViewBoundsLeftEdit == null))
                {
                    this.mUIViewBoundsLeftEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIViewBoundsLeftEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "ViewBoundsLeft";
                    this.mUIViewBoundsLeftEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIViewBoundsLeftEdit;
            }
        }
        
        public WpfEdit UIViewBoundsTopEdit
        {
            get
            {
                if ((this.mUIViewBoundsTopEdit == null))
                {
                    this.mUIViewBoundsTopEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIViewBoundsTopEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "ViewBoundsTop";
                    this.mUIViewBoundsTopEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIViewBoundsTopEdit;
            }
        }
        
        public WpfEdit UIViewBoundsRightEdit
        {
            get
            {
                if ((this.mUIViewBoundsRightEdit == null))
                {
                    this.mUIViewBoundsRightEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIViewBoundsRightEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "ViewBoundsRight";
                    this.mUIViewBoundsRightEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIViewBoundsRightEdit;
            }
        }
        
        public WpfEdit UIViewBoundsBottomEdit
        {
            get
            {
                if ((this.mUIViewBoundsBottomEdit == null))
                {
                    this.mUIViewBoundsBottomEdit = new WpfEdit(this);
                    #region 搜索条件
                    this.mUIViewBoundsBottomEdit.SearchProperties[WpfEdit.PropertyNames.AutomationId] = "ViewBoundsBottom";
                    this.mUIViewBoundsBottomEdit.WindowTitles.Add("MainWindow");
                    #endregion
                }
                return this.mUIViewBoundsBottomEdit;
            }
        }
        #endregion
        
        #region Fields
        private WpfEdit mUIViewBoundsLeftEdit;
        
        private WpfEdit mUIViewBoundsTopEdit;
        
        private WpfEdit mUIViewBoundsRightEdit;
        
        private WpfEdit mUIViewBoundsBottomEdit;
        #endregion
    }
    
    [GeneratedCode("编码的 UI 测试生成器", "10.0.40219.1")]
    public class UI提示Window : WinWindow
    {
        
        public UI提示Window()
        {
            #region 搜索条件
            this.SearchProperties[WinWindow.PropertyNames.Name] = "提示";
            this.SearchProperties[WinWindow.PropertyNames.ClassName] = "#32770";
            this.WindowTitles.Add("提示");
            #endregion
        }
        
        #region Properties
        public UI地图加载成功Window UI地图加载成功Window
        {
            get
            {
                if ((this.mUI地图加载成功Window == null))
                {
                    this.mUI地图加载成功Window = new UI地图加载成功Window(this);
                }
                return this.mUI地图加载成功Window;
            }
        }
        
        public UI确定Window UI确定Window
        {
            get
            {
                if ((this.mUI确定Window == null))
                {
                    this.mUI确定Window = new UI确定Window(this);
                }
                return this.mUI确定Window;
            }
        }
        
        public WinTitleBar UI提示TitleBar
        {
            get
            {
                if ((this.mUI提示TitleBar == null))
                {
                    this.mUI提示TitleBar = new WinTitleBar(this);
                    #region 搜索条件
                    this.mUI提示TitleBar.WindowTitles.Add("提示");
                    #endregion
                }
                return this.mUI提示TitleBar;
            }
        }
        
        public WinControl UI提示Dialog
        {
            get
            {
                if ((this.mUI提示Dialog == null))
                {
                    this.mUI提示Dialog = new WinControl(this);
                    #region 搜索条件
                    this.mUI提示Dialog.SearchProperties[UITestControl.PropertyNames.Name] = "提示";
                    this.mUI提示Dialog.SearchProperties[UITestControl.PropertyNames.ControlType] = "Dialog";
                    this.mUI提示Dialog.WindowTitles.Add("提示");
                    #endregion
                }
                return this.mUI提示Dialog;
            }
        }
        #endregion
        
        #region Fields
        private UI地图加载成功Window mUI地图加载成功Window;
        
        private UI确定Window mUI确定Window;
        
        private WinTitleBar mUI提示TitleBar;
        
        private WinControl mUI提示Dialog;
        #endregion
    }
    
    [GeneratedCode("编码的 UI 测试生成器", "10.0.40219.1")]
    public class UI地图加载成功Window : WinWindow
    {
        
        public UI地图加载成功Window(UITestControl searchLimitContainer) : 
                base(searchLimitContainer)
        {
            #region 搜索条件
            this.SearchProperties[WinWindow.PropertyNames.ControlId] = "65535";
            this.WindowTitles.Add("提示");
            #endregion
        }
        
        #region Properties
        public WinText UI地图加载成功Text
        {
            get
            {
                if ((this.mUI地图加载成功Text == null))
                {
                    this.mUI地图加载成功Text = new WinText(this);
                    #region 搜索条件
                    this.mUI地图加载成功Text.SearchProperties[WinText.PropertyNames.Name] = "地图加载成功";
                    this.mUI地图加载成功Text.WindowTitles.Add("提示");
                    #endregion
                }
                return this.mUI地图加载成功Text;
            }
        }
        
        public WinText UI地图图层异常Text
        {
            get
            {
                if ((this.mUI地图图层异常Text == null))
                {
                    this.mUI地图图层异常Text = new WinText(this);
                    #region 搜索条件
                    this.mUI地图图层异常Text.SearchProperties[WinText.PropertyNames.Name] = "地图图层异常";
                    this.mUI地图图层异常Text.WindowTitles.Add("提示");
                    #endregion
                }
                return this.mUI地图图层异常Text;
            }
        }
        #endregion
        
        #region Fields
        private WinText mUI地图加载成功Text;
        
        private WinText mUI地图图层异常Text;
        #endregion
    }
    
    [GeneratedCode("编码的 UI 测试生成器", "10.0.40219.1")]
    public class UI确定Window : WinWindow
    {
        
        public UI确定Window(UITestControl searchLimitContainer) : 
                base(searchLimitContainer)
        {
            #region 搜索条件
            this.SearchProperties[WinWindow.PropertyNames.ControlId] = "2";
            this.WindowTitles.Add("提示");
            #endregion
        }
        
        #region Properties
        public WinButton UI确定Button
        {
            get
            {
                if ((this.mUI确定Button == null))
                {
                    this.mUI确定Button = new WinButton(this);
                    #region 搜索条件
                    this.mUI确定Button.SearchProperties[WinButton.PropertyNames.Name] = "确定";
                    this.mUI确定Button.WindowTitles.Add("提示");
                    #endregion
                }
                return this.mUI确定Button;
            }
        }
        #endregion
        
        #region Fields
        private WinButton mUI确定Button;
        #endregion
    }
}
