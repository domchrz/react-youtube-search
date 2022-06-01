# SearchTube

Overview
* the app lets you search for YouTube videos
* implements infinite scroll

Structure
* most of logic contained in App.tsx, including redux
* TypeScript used throughout the project, types contained in related files

context
* used for Theming with styled components

redux
* redux toolkit & thunk at work
* single thunk action located in store/actions with one overload
* slices split into videos containing items & meta used for subsequent fetches of the same query, loading which should handle display logic while user awaits for call to be fulfilled and error, providing error message if occurs

components
* pretty straightforward, none of them taps into redux, no HOC or render props used
* Placeholder & Overview should act like a temp component if they get a chance - displayed conditionally whether isLoading returns true

constants
* apikey, embed url and base fetch url
* MAX_RESULTS - const used throughout the app to determine how many results per page should be displayed, used for number of items in Placeholder as well

