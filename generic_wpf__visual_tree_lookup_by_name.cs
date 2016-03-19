 private T GetChild<T>(DependencyObject element, string lookedName) where T : FrameworkElement
        {
            var childrenCount = VisualTreeHelper.GetChildrenCount(element);
            if (childrenCount == 0)
            {
                return null;
            }
            for (int i = 0; i < childrenCount; i++)
            {                
                var childElement = VisualTreeHelper.GetChild(element, i);
                var castedChild = (childElement as T);
                if (castedChild != null && castedChild.Name == lookedName)
                {
                    return castedChild;
                }
                var innerChild = GetChild<T>(childElement, lookedName);
                if (innerChild != null)
                {
                    return innerChild;
                }
            }
            return null;
        }