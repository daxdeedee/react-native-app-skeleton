import React from 'react';
import {
  FlatList,
  ViewStyle,
  StyleProp,
  View,
  FlatListProps,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import colors from '~/values/color/Colors';

const defaultPageInfo: IpageInfo = {
  pageIndex: 1,
  pageLimit: 10,
};

export interface IpageInfo {
  pageIndex: number;
  pageLimit: number;
}

type Iprops = {
  initDatas: any;
  loadDatas?: any;
  onGetData?: ({ pageIndex, pageLimit }: IpageInfo) => any;
  pageInfo?: IpageInfo;
  style?: StyleProp<ViewStyle>;
  maxLength?: number;
} & FlatListProps<any>;

const LodingItem = () => {
  return (
    <View
      style={{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator color={colors.gray} />
    </View>
  );
};

const ScrollToTop = ({ onPress }: any) => {
  return (
    <View style={{ position: 'absolute', bottom: 30, right: 20 }}>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
        <View style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
};

const InfiniteList = ({ initDatas, loadDatas, onGetData, pageInfo, maxLength, style, ...props }: Iprops) => {
  const { height: wHeight } = useWindowDimensions();
  const [listData, setListData] = React.useState<any[]>(initDatas);
  const [isRefresh, setIsRefresh] = React.useState<boolean>(false);
  const pageInfoRef = React.useRef<IpageInfo>(defaultPageInfo);
  const [isLoadComplete, setIsLoadComplete] = React.useState<boolean>(false);
  const listRef = React.useRef<FlatList<any>>();
  const [isOnTop, setIsOnTop] = React.useState<boolean>(false);

  React.useEffect(() => {
    setListData(initDatas);
  }, [initDatas]);

  const onRefreshList = async () => {
    setIsRefresh(true);
    pageInfoRef.current = defaultPageInfo;
    if (onGetData) {
      const list = onGetData(defaultPageInfo);
      list && setListData(list);
      checkPageCount();
    }
    setIsRefresh(false);
  };

  const getData = async () => {
    if (!isLoadComplete && onGetData) {
      onGetData(pageInfoRef.current);
      const list = await onGetData(pageInfoRef.current);
      if (list) {
        pageInfoRef.current.pageIndex = pageInfoRef.current.pageIndex + 1;
        setListData((prev: any) => {
          return [...prev, ...list];
        });
      }

      checkPageCount();
    }
  };

  const checkPageCount = () => {
    if (maxLength) {
      setIsLoadComplete(listData?.length >= maxLength);
      listData?.length >= maxLength
        ? setIsLoadComplete(true)
        : (pageInfoRef.current.pageLimit =
            listData?.length + pageInfoRef.current.pageLimit > maxLength
              ? (pageInfoRef.current.pageLimit = maxLength - listData?.length)
              : 10);
    }
  };

  return (
    <>
      <FlatList
        {...props}
        ref={(ref) => {
          ref && (listRef.current = ref);
        }}
        style={style}
        keyExtractor={(item, index) => `${index}`}
        onEndReached={() => {
          getData();
        }}
        refreshControl={
          <RefreshControl
            refreshing={isRefresh}
            onRefresh={onRefreshList}
            tintColor={colors.gray}
            colors={[colors.gray]}
          />
        }
        onEndReachedThreshold={0.2}
        ListFooterComponent={isLoadComplete ? undefined : <LodingItem />}
        data={listData}
        onScroll={(event) => {
          const {
            nativeEvent: { contentOffset },
          } = event;
          setIsOnTop(contentOffset.y > wHeight);
        }}
      />
      {isOnTop && (
        <ScrollToTop
          onPress={() => {
            listRef.current?.scrollToOffset({ offset: 0 });
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    elevation: 10,

    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gray,
    borderColor: colors.black,
    borderWidth: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    marginTop: 8,
    width: 16,
    height: 16,
    borderTopColor: colors.white,
    borderLeftColor: colors.white,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    transform: [{ rotate: '45deg' }],
  },
});

export default InfiniteList;
